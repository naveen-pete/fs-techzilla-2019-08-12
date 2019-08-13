const _ = require('lodash');

const numbers = [10, 20, 30];
const doubles = _.map(numbers, (n) => {
  return n * 2;
});

console.log('doubles:', doubles);
