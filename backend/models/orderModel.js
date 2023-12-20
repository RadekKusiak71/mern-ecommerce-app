const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    orderedItems: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, required: true },
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
            productImage: { type: String, default: '/noImg.jpg' }
        }
    ],
    shippingData: {
        street: {
            type: String,
            required: true
        },
        houseNumber: {
            type: String
        },
        zipCode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;