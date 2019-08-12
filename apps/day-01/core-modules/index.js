const User = require('./user');

const user = new User();

user.on('userCreated', (user) => {
  console.log('User created successfully.');
  console.log('new user:', user);
});

user.on('userDeleted', () => {
  console.log('User deleted successfully.');
});

user.create();
user.delete();
