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
};


const productsByFilters = async (req, res, next) => {
    try {
        let sizes = [];
        let categories = [];
        var products = [];

        if (req.body.params) {
            req.body.params.forEach(element => {
                if (element.length === 1) {
                    sizes.push(element);
                } else {
                    categories.push(element);
                }
            });

            let filter = {};

            if (categories.length > 0) {
                filter.category = { $in: categories };
            }

            if (sizes.length > 0) {
                sizes.forEach(size => {
                    filter[`sizes.${size}`] = { $gt: 0 };
                });
            }

            products = await Product.find(filter);

        } else {
            products = await Product.find();

        }
        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ message: 'Products not found' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const searchProductsByName = async (req, res, next) => {
    try {
        const query = req.params.query;
        const regex = new RegExp(query, 'i');

        const products = await Product.find({ name: regex });

        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ message: 'Products not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = { searchProductsByName, getProducts, retrieveProductById, retrieveProductByCategory, productsByFilters };
