// ES5
// function greet() {
//   console.log('Hello Node');
// }

// ES5
// function sum(a, b) {
//   return a + b;
// }

// ES5
// function express syntax
// anonymous function
// var sum = function (a, b) {
//   return a + b;
// }

// ES6 / ES2015
// arrow function syntax #1
// var sum = (a, b) => {
//   return a + b;
// }

// ES6 / ES2015
// arrow function syntax #2
var sum = (a, b) => a + b;

// ES6
var double = x => x * 2;

var c = sum(10, 20);
console.log('sum:', c);

console.log('double:', double(10));


// var numbers = [1, 2, 3];
// var squares = [];
// for(var i=0; i<numbers.length; i++) {
//   // logic
//   squares[i] = numbers[i] * numbers[i];
// }

// squares = numbers.map(n => n * n);
