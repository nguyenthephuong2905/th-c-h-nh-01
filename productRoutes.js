const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ ProductStoreCode: 1, ProductOriginPrice: -1 });
    res.render('index', { products });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/api/products', async (req, res) => {
  try {
    await Product.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/api/products/delete/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
