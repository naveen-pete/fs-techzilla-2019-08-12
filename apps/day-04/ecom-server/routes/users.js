const express = require('express');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    res.json([]);
  })
  .post(async (req, res) => {
    res.json({})
  });

module.exports = router;