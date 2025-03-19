import { EventData, EventQueue } from './EventQueue';
import { sleep } from './Utils';
import { SendTelegramMessage } from './TelegramHelper';
const TG_BOT_ID: string | undefined = process.env.TG_BOT_ID;
const TG_CHAT_ID: string | undefined = process.env.TG_CHAT_ID;
const TIMELOCK_NAME: string | undefined = process.env.TIMELOCK_NAME;
const EXPLORER_URI: string | undefined = process.env.EXPLORER_URI;

async function startEventProcessor() {
  console.log('Started the event processor');

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (EventQueue.length > 0) {
      const event = EventQueue.shift();
      if (event) {
        await ProcessAsync(event);
      }
    } else {
      await sleep(1000);
    }
  }
}

async function ProcessAsync(event: EventData) {
  if (!TG_BOT_ID) {
    throw new Error('No TG_BOT_ID found in env');
  }

  if (!TG_CHAT_ID) {
    throw new Error('No TG_BOT_ID found in env');
  }

  console.log(`NEW EVENT DETECTED AT BLOCK ${event.block}: ${event.eventName}`, { args: event.eventArgs });
  const msgToSend: string | undefined = await buildMessageFromEvent(event);
  if (!msgToSend) {
    console.log('Nothing to send to TG');
  } else {
    await SendTelegramMessage(TG_CHAT_ID, TG_BOT_ID, msgToSend, false);
  }
}

async function buildMessageFromEvent(event: EventData): Promise<string | undefined> {
  switch (event.eventName.toLowerCase()) {
    default:
      return `${buildMsgHeader(event)}\n` + event.eventArgs.join('\n');
  }
}

function buildMsgHeader(event: EventData, headerAddMsg = ''): string {
  return `[${TIMELOCK_NAME}] [${event.eventName}] ${headerAddMsg}\n` + `tx: ${buildTxUrl(event.txHash)}\n`;
}

function buildTxUrl(txhash: string): string {
  return `${EXPLORER_URI}/tx/${txhash}`;
}

startEventProcessor();
