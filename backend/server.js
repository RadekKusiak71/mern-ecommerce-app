const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const productsRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const connectDB = require('./config/connectDB');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json());
app.use('/static', express.static('static'))

connectDB();
app.use('/api', productsRoutes);
app.use('/api', orderRoutes);

app.listen(PORT, () => console.log(`Server is running on 127.0.0.1:${PORT}`));