const morgan = require('morgan');
const express = require('express');
const config = require('config');

const log = require('./middleware/log');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const homeRouter = require('./routes/home');

const app = express();

// middleware
app.use(log);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/public', express.static('public'));

app.set('view engine', 'pug');
app.set('views', 'app-views');

console.log(process.env.NODE_ENV);
console.log(app.get('env'));
console.log(config.get('app-name'));
console.log(config.get('db.connection-string'));

// routes
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/', homeRouter);

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server started. Listening on port ' + port);
});
