const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    ref: String,
    Price: Number,
    description: String,
    isAvailable: Boolean
});

module.exports = mongoose.model('Product', Product);