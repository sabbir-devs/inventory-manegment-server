const express = require('express');
const supplierController = require("../controllers/supplier.controller");
const router = express.Router();

router.route('/')
.get(supplierController.getSupplierController)
.post(supplierController.createSupplierController);

router.route('/:id')
.get(supplierController.getSupplierById)
.patch(supplierController.updateSupplierById)

module.exports = router