const sale = require("../models/sale.model")


const saleController = {
    list: async function (request, response) {
        try {
            const sales = await sale.find({})
            res.status(200).json({ sales: sales });

        } catch (error) {
            res.status(500).json(Error);
        }


    },
    create: async function (request, response) {
        try {
            const sale = new Sale(req.body);
            await sale.save();
            res.status(200).json({ sale: sale });

        } catch (error) {
            res.status(500).json(Error);
        }
    },

};
module.exports = saleController; 