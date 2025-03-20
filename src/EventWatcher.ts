import { ethers, Contract, Interface } from 'ethers';
import WebSocket from 'ws';
import dotenv from 'dotenv';
import { EventQueue } from './EventQueue';
import { timelockAbi } from './abis/TimelockAbi';
import { MorphoBankAbi } from './abis/MorphoBankAbi';
dotenv.config();

const WSS_URL: string | undefined = process.env.WSS_PROVIDER;
const MORPHO_BANK: boolean | undefined = process.env.MORPHO_BANK === 'true';
const TIMELOCK_ADDRESS: string | undefined = process.env.TIMELOCK_ADDRESS;

let provider = new ethers.WebSocketProvider(createWebSocket());

function createWebSocket() {
  if (!WSS_URL) {
    throw new Error('No WSS_URL found in env');
  }
  const ws = new WebSocket(WSS_URL);

  ws.on('close', () => {
    console.log('Disconnected. Reconnecting...');
    setTimeout(() => {
      provider = new ethers.WebSocketProvider(createWebSocket());
      startListening();
    }, 1000);
  });

  ws.on('error', (error) => {
    console.log('WebSocket error: ', error);
  });

  return ws;
}

function startListening() {
  if (!TIMELOCK_ADDRESS) {
    throw new Error('No TIMELOCK_ADDRESS found in env');
  }
  console.log('Started the event listener');
  const timelockContract = new Contract(TIMELOCK_ADDRESS, MORPHO_BANK ? MorphoBankAbi : timelockAbi, provider);

  const iface = new Interface(MORPHO_BANK ? MorphoBankAbi : timelockAbi);

  timelockContract.removeAllListeners();

  timelockContract.on('*', (event) => {
    // The `event.log` has the entire EventLog
    const parsed = iface.parseLog(event.log);

    if (!parsed) {
      console.log('Could not parse event', { event });
      return;
    }

    EventQueue.push({
      txHash: event.log.transactionHash,
      eventName: parsed.name,
      eventArgs: parsed.args.map((_) => _.toString()),
      block: event.log.blockNumber,
      originArgs: parsed.args
    });
  });
}

startListening();
