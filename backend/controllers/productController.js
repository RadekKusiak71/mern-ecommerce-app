const Product = require('../models/productModel');

const getProducts = async (req, res, next) => {
    try {
        const data = await Product.find({});
        if (data.length) {
            res.status(200).json(data);
        } else {
            res.status(200).json({ message: 'No products have been found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const retrieveProductById = async (req, res, next) => {
    try {
        const productId = req.params.id;
        console.log(productId)
        const product = await Product.findOne({ _id: productId });

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


const retrieveProductByCategory = async (req, res, next) => {
    try {
        const categoryName = req.params.categoryName;
        const products = await Product.find({ category: categoryName });
        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ message: 'Products not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


const productsByQuery = async (req, res, next) => {
    const products = await Product.find({
        $or: [
            {
                category: { $in: req.body.categories }
            }
        ]
    })
    console.log(products)
}

module.exports = { getProducts, retrieveProductById, retrieveProductByCategory, productsByQuery };
