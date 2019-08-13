const http = require('http');

const products = [{ id: 1, name: 'iPhone X' }, { id: 2, name: 'Samsung Galaxy S10' }];
const users = [{ id: 1, name: 'Ram' }, { id: 2, name: 'Hari' }];


const server = http.createServer((req, res) => {
  // http://localhost:4500/
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h2>Welcome to ECommerce Application API</h2>");
    res.end();
  }

  // http://localhost:4500/api/products
  if (req.url === '/api/products') {

    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(products));
      res.end();
    }

    if (req.method === 'POST') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<h4>New product saved.</h4>');
      res.end();
    }
  }

  // http://localhost:4500/api/users
  if (req.url === '/api/users') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
  }

});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});