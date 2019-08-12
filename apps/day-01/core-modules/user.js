const EventEmitter = require('events');

class User extends EventEmitter {
  create() {
    // to save the user on the server
    this.emit('userCreated', { id: 100, name: 'ram' });
  }

  delete() {
    // to delete the user from the server
    this.emit('userDeleted');
  }
}

module.exports = User;