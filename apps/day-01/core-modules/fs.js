var fs = require('fs');

console.log('begin');

// synchronous version
// var result = fs.readFileSync(__filename, 'utf8');
// console.log('result:', result);

// async version
fs.readFile(__filename, 'utf8', (err, result) => {
  if (err) {
    console.log('Error when reading file:', err);
    return;
  }

  console.log('result:', result);
});

console.log('end');
