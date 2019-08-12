const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('userCreated', () => {
  console.log('User created successfully.');
});

emitter.on('userDeleted', () => {
  console.log('User deleted successfully.');
});

emitter.emit('userDeleted');
