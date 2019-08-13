const Joi = require('@hapi/joi');

const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'iPhone X', price: 70000 },
  { id: 2, name: 'Samsung Galaxy S10', price: 65000 }
];

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const result = validateProduct(req.body);
  if (result.error) {
    return res.status(400).json({ message: result.error.details[0].message })
  }

  const newProduct = { ...req.body, id: products[products.length - 1].id + 1 };
  products.push(newProduct);
  res.json(newProduct);
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product does not exist!' });
  }

  res.json(product);
});

router.put('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product does not exist!' });
  }

  product.name = req.body.name;
  product.price = req.body.price;

  res.json(product);
});

router.delete('/:id', (req, res) => {
  // #1
  // let index = 0;
  // const product = products.find((p, i) => {
  //   index = i;
  //   return p.id === parseInt(req.params.id);
  // });

  // if (!product) {
  //   return res.status(404).json({ message: 'Product does not exist!' });
  // }
  // products.splice(index, 1);
  // res.json({message: 'Product deleted successfully!'});

  // #2
  // const index = products.findIndex(p => p.id === parseInt(req.params.id));
  // products.splice(index, 1);
  // res.json({message: 'Product deleted successfully!'});

  // #3
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product does not exist!' });
  }

  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.json({ message: 'Product deleted successfully!' });
});

const validateProduct = product => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required()
  });

  return Joi.validate(product, schema);
}

module.exports = router;
