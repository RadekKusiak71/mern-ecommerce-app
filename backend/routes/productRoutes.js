const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/products', productController.getProducts);

router.get('/products/:id', productController.retrieveProductById);

router.get('/products/category/:categoryName', productController.retrieveProductByCategory);

router.get('/products?filters[categories]=:categories&', productController.productsByQuery);


module.exports = router;