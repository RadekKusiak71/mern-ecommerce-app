const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
    try {
        console.log('Order Data Received:', req.body);
        const orderData = req.body;
        const newOrder = new Order(orderData);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
