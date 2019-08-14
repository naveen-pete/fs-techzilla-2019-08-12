const express = require('express');
const productRouter = require('./routes/products');

const app = express();

const users = [{ id: 1, name: 'Ram' }, { id: 2, name: 'Hari' }];

const log = (req, res, next) => {
  console.log('log() - url:', req.url, ', method:', req.method);
  next();
};

app.use(log);
app.use(express.json());
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send("<h2>Welcome to ECommerce Application API</h2>");
});

app.get('/api/users', (req, res) => {
  res.send(users);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server started. Listening on port ' + port);
});
