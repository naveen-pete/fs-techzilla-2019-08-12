const bcrypt = require('bcrypt');

const pwd = '123';
let hash = '';

async function generate() {
  const salt = await bcrypt.genSalt(10);
  hash = await bcrypt.hash(pwd, salt);
  console.log('salt:', salt);
  console.log('hash:', hash);
}

async function generateNoSalt() {
  hash = await bcrypt.hash(pwd, 10);
  console.log('hash:', hash);
}

async function check(password) {
  const result = await bcrypt.compare(password, hash);
  console.log('result:', result, ', password:', password);
}

// generate().then(() => {
//   check(pwd);
//   check('abc');
// });

generateNoSalt().then(() => {
  check(pwd);
  check('abc');
});
