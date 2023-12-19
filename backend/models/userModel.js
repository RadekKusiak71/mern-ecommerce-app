const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    shippingInfo: {
        street: { type: String },
        houseNumber: { type: String },
        city: { type: String },
        zipCode: { type: String },
        Country: { type: String },
    },
},
    { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;