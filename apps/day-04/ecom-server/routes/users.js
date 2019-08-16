const express = require('express');
const router = express.Router();

const users = [{ id: 1, name: 'Ram' }, { id: 2, name: 'Hari' }];

router.get('/', (req, res) => {
  res.send(users);
});

module.exports = router;