const Router = require("express").Router();

const SalesController = require('../controller/sales.controller');

Router.get("/", SalesController.list);
Router.post("/", SalesController.create);

module.exports = Router;