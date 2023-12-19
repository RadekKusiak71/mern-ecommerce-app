const connectDB = require('../config/connectDB');
const Product = require('../models/productModel');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();


const shirts = [
    {
        "name": "Beige Comfort Shirt",
        "category": "shirt",
        "productImage": "/beige_shirt.jpg",
        "sizes": {
            "S": 5,
            "M": 0,
            "L": 2,
            "XL": 4
        },
        "price": 14.99,
        "description": "Experience unparalleled comfort with our Beige Comfort Shirt. Perfect for any occasion, this shirt is a wardrobe essential that combines style and coziness."
    },
    {
        "name": "Classic Black Shirt",
        "category": "shirt",
        "productImage": "/black_shirt.jpg",
        "sizes": {
            "S": 3,
            "M": 1,
            "L": 4,
            "XL": 2
        },
        "price": 14.99,
        "description": "Elevate your style with our Classic Black Shirt. Versatile and sophisticated, this shirt is a timeless addition to your wardrobe."
    },
    {
        "name": "Blue Casual Shirt",
        "category": "shirt",
        "productImage": "/blue_shirt.jpg",
        "sizes": {
            "S": 2,
            "M": 3,
            "L": 1,
            "XL": 6
        },
        "price": 14.99,
        "description": "Add a pop of color to your look with our Blue Casual Shirt. Perfect for casual outings, this shirt brings a relaxed yet stylish vibe to your wardrobe."
    },
    {
        "name": "White Everyday Shirt",
        "category": "shirt",
        "productImage": "/white_shirt.jpg",
        "sizes": {
            "S": 4,
            "M": 2,
            "L": 3,
            "XL": 1
        },
        "price": 14.99,
        "description": "Stay crisp and clean with our White Everyday Shirt. A wardrobe staple, this shirt is perfect for both formal and casual occasions."
    }
];

const hoodies = [
    {
        "name": "Brown Cozy Hoodie",
        "category": "hoodie",
        "productImage": "/hoodie_brown.jpg",
        "sizes": {
            "S": 1,
            "M": 0,
            "L": 2,
            "XL": 5
        },
        "price": 20.00,
        "description": "Stay warm and stylish with our Brown Cozy Hoodie. Crafted for comfort, this hoodie is perfect for chilly days and adds a touch of warmth to your wardrobe."
    },
    {
        "name": "Gray Comfort Hoodie",
        "category": "hoodie",
        "productImage": "/hoodie_gray.jpg",
        "sizes": {
            "S": 3,
            "M": 1,
            "L": 4,
            "XL": 2
        },
        "price": 20.00,
        "description": "Experience ultimate comfort with our Gray Comfort Hoodie. Soft and cozy, this hoodie is a must-have for lounging at home or casual outings."
    },
    {
        "name": "Black Stylish Hoodie",
        "category": "hoodie",
        "productImage": "/hoodie_black.jpg",
        "sizes": {
            "S": 2,
            "M": 3,
            "L": 1,
            "XL": 6
        },
        "price": 20.00,
        "description": "Step out in style with our Black Stylish Hoodie. A versatile and chic addition to your wardrobe, perfect for expressing your unique fashion sense."
    }
];

const jeans = [
    {
        "name": "Red Trendy Jeans",
        "category": "jeans",
        "productImage": "/red_jeans.jpg",
        "sizes": {
            "S": 2,
            "M": 3,
            "L": 1,
            "XL": 4
        },
        "price": 39.99,
        "description": "Make a bold fashion statement with our Red Trendy Jeans. Stand out in the crowd and showcase your unique style with these eye-catching jeans."
    },
    {
        "name": "Light Blue Classic Jeans",
        "category": "jeans",
        "productImage": "/lightblue_jeans.jpg",
        "sizes": {
            "S": 1,
            "M": 4,
            "L": 2,
            "XL": 3
        },
        "price": 39.99,
        "description": "Achieve a classic look with our Light Blue Classic Jeans. Versatile and timeless, these jeans are a wardrobe essential for any season."
    },
    {
        "name": "Gray Modern Jeans",
        "category": "jeans",
        "productImage": "/gray_jeans.jpg",
        "sizes": {
            "S": 3,
            "M": 2,
            "L": 4,
            "XL": 1
        },
        "price": 39.99,
        "description": "Stay on-trend with our Gray Modern Jeans. The perfect blend of style and comfort, these jeans are ideal for a casual and fashionable look."
    },
    {
        "name": "Dark Blue Stylish Jeans",
        "category": "jeans",
        "productImage": "/darkblue_jeans.jpg",
        "sizes": {
            "S": 4,
            "M": 1,
            "L": 3,
            "XL": 2
        },
        "price": 39.99,
        "description": "Elevate your denim collection with our Dark Blue Stylish Jeans. The perfect choice for a polished and trendy appearance, day or night."
    }
];

const tee = [
    {
        "name": "White Casual Tee",
        "category": "tee",
        "productImage": "/white_tee.jpg",
        "sizes": {
            "S": 5,
            "M": 1,
            "L": 3,
            "XL": 2
        },
        "price": 9.99,
        "description": "Stay cool and casual with our White Casual Tee. Effortlessly stylish, this tee is a versatile addition to your wardrobe, perfect for everyday wear."
    },
    {
        "name": "Black Classic Tee",
        "category": "tee",
        "productImage": "/black_tee.jpg",
        "sizes": {
            "S": 2,
            "M": 4,
            "L": 1,
            "XL": 3
        },
        "price": 9.99,
        "description": "Achieve a classic look with our Black Classic Tee. Timeless and versatile, this tee is a wardrobe essential for a polished and comfortable style."
    },
    {
        "name": "Beige Everyday Tee",
        "category": "tee",
        "productImage": "/beige_tee.jpg",
        "sizes": {
            "S": 3,
            "M": 2,
            "L": 4,
            "XL": 1
        },
        "price": 9.99,
        "description": "Add a touch of warmth to your wardrobe with our Beige Everyday Tee. Comfortable and stylish, this tee is perfect for everyday casual wear."
    },
    {
        "name": "Gray Trendy Tee",
        "category": "tee",
        "productImage": "/gray_tee.jpg",
        "sizes": {
            "S": 4,
            "M": 1,
            "L": 2,
            "XL": 3
        },
        "price": 9.99,
        "description": "Stay on-trend with our Gray Trendy Tee. Express your unique style with this versatile tee, perfect for creating casual and fashionable looks."
    }
];

const jackets = [
    {
        "name": "White Elegant Jacket",
        "category": "jacket",
        "productImage": "/white_jacket.jpg",
        "sizes": {
            "S": 3,
            "M": 2,
            "L": 4,
            "XL": 1
        },
        "price": 100.00,
        "description": "Make a statement with our White Elegant Jacket. A timeless and elegant piece that adds sophistication to any outfit, day or night."
    },
    {
        "name": "Black Classic Jacket",
        "category": "jacket",
        "productImage": "/black_jacket.jpg",
        "sizes": {
            "S": 4,
            "M": 1,
            "L": 3,
            "XL": 2
        },
        "price": 100.00,
        "description": "Elevate your outerwear collection with our Black Classic Jacket. Versatile and stylish, this jacket is a must-have for a polished and sophisticated look."
    },
    {
        "name": "Green Stylish Jacket",
        "category": "jacket",
        "productImage": "/green_jacket.jpg",
        "sizes": {
            "S": 2,
            "M": 3,
            "L": 1,
            "XL": 4
        },
        "price": 100.00,
        "description": "Stand out in style with our Green Stylish Jacket. A bold and trendy choice for those who want to make a fashion statement wherever they go."
    }
];


const products = [...shirts, ...hoodies, ...jeans, ...tee, ...jackets];

async function insertData() {
    try {
        await connectDB();
        await Product.insertMany(products);
        console.log('Data inserted successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        mongoose.disconnect();
    }
}

insertData();