const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema

const Sale = new Schema({

    quantity: {
        type: Number,
        min: 1,
        max: 10

    },
    date: {
        type: Date,
        default: Date.now,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'products',

    },

});

module.exports = mongoose.model("sale", Sale);
