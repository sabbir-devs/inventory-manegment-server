const express = require('express');
const stockController = require('../controllers/stock.controller');
const router = express.Router();

router.route('/')
    .get(stockController.getStockController)
    .post(stockController.createStockController)

router.route('/:id')
.get(stockController.getStockByIdController)
.post(stockController.updateStockByIdController)

module.exports = router;