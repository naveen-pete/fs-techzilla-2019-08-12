var age = 20;

var greet = name => {
  console.log('Hello ' + name + '. Welcome to Node');
}

// module.exports.age = age;
// module.exports.greet = greet;

module.exports = {
  age: age,
  greet: greet
};
