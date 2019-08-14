const Joi = require('@hapi/joi');

const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'iPhone X', price: 70000 },
  { id: 2, name: 'Samsung Galaxy S10', price: 65000 }
];

const validateProduct = product => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required()
  });

  return Joi.validate(product, schema);
};

router.route('/')
  .get((req, res) => {
    res.json(products);
  })
  .post((req, res) => {
    const result = validateProduct(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.details[0].message })
    }

    const newProduct = { ...req.body, id: products[products.length - 1].id + 1 };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

router.route('/:id')
  .get((req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product does not exist!' });
    }

    res.json(product);
  })
  .put((req, res) => {
    const result = validateProduct(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.details[0].message })
    }

    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product does not exist!' });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json(product);
  })
  .delete((req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product does not exist!' });
    }

    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.json({ message: 'Product deleted successfully!' });
  });

module.exports = router;
