export const timelockAbi = [
  {
    constant: false,
    inputs: [
      { name: 'target', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'signature', type: 'string' },
      { name: 'data', type: 'bytes' },
      { name: 'eta', type: 'uint256' }
    ],
    name: 'executeTransaction',
    outputs: [{ name: '', type: 'bytes' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'acceptAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'pendingAdmin',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'target', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'signature', type: 'string' },
      { name: 'data', type: 'bytes' },
      { name: 'eta', type: 'uint256' }
    ],
    name: 'queueTransaction',
    outputs: [{ name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'pendingAdmin_', type: 'address' }],
    name: 'setPendingAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'target', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'signature', type: 'string' },
      { name: 'data', type: 'bytes' },
      { name: 'eta', type: 'uint256' }
    ],
    name: 'cancelTransaction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'delay',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'MAXIMUM_DELAY',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'MINIMUM_DELAY',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'GRACE_PERIOD',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'delay_', type: 'uint256' }],
    name: 'setDelay',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'bytes32' }],
    name: 'queuedTransactions',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { name: 'admin_', type: 'address' },
      { name: 'delay_', type: 'uint256' }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  { payable: true, stateMutability: 'payable', type: 'fallback' },
  { anonymous: false, inputs: [{ indexed: true, name: 'newAdmin', type: 'address' }], name: 'NewAdmin', type: 'event' },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'newPendingAdmin', type: 'address' }],
    name: 'NewPendingAdmin',
    type: 'event'
  },
  { anonymous: false, inputs: [{ indexed: true, name: 'newDelay', type: 'uint256' }], name: 'NewDelay', type: 'event' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'txHash', type: 'bytes32' },
      { indexed: true, name: 'target', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
      { indexed: false, name: 'signature', type: 'string' },
      { indexed: false, name: 'data', type: 'bytes' },
      { indexed: false, name: 'eta', type: 'uint256' }
    ],
    name: 'CancelTransaction',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'txHash', type: 'bytes32' },
      { indexed: true, name: 'target', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
      { indexed: false, name: 'signature', type: 'string' },
      { indexed: false, name: 'data', type: 'bytes' },
      { indexed: false, name: 'eta', type: 'uint256' }
    ],
    name: 'ExecuteTransaction',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'txHash', type: 'bytes32' },
      { indexed: true, name: 'target', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
      { indexed: false, name: 'signature', type: 'string' },
      { indexed: false, name: 'data', type: 'bytes' },
      { indexed: false, name: 'eta', type: 'uint256' }
    ],
    name: 'QueueTransaction',
    type: 'event'
  }
];
