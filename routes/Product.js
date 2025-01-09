const {getProducts, getProductById,createProduct} = require('../controller/Product');

const express = require('express');
const router = express.Router();

// GET all products
router.get('/', getProducts);
// GET product by id
router.get('/:id', getProductById);
// POST a new product
router.post('/', createProduct);


module.exports = router;
