const Router = require("express").Router();
const Product = require("../models/product.model");

Router.post('/', async function (req, res) {


    try {
        const product = new Product(req.body);
        await product.save();
        res.status(200).json("Creado");

    }

    catch {
        res.status(500).json("Error");
    }


});
Router.get("/", async function (req, res) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json("Error");
    }
});
module.exports = Router;