const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/products', productController.getProducts);

router.get('/products/:id', productController.retrieveProductById);

router.get('/products/category/:categoryName', productController.retrieveProductByCategory);

router.post('/products/query', productController.productsByFilters);


module.exports = router;