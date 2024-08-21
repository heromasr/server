const express = require('express');
const mongoose = require('mongoose');
const app = express();

const productRouter = require('./routes/product.routes');
const salesRoutes = require("./routes/sale.routes")
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.DB_URL)
    .then(db => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

// Define a schema for the 'User' collection
app.use(express.urlencoded({ extended: false }));
/*app.get('/', function (req, res) {
    res.send('Hello World')
})*/
app.use('/products', productRouter)
app.use("/sales", salesRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 