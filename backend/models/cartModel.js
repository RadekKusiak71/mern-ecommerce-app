const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, required: true },
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
            productImage: { type: String, default: '/noImg.jpg' }
        }
    ],
});

const Cart = mongoose.model('Cart', cartModel);

module.exports = Cart;