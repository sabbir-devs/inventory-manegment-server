const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand.controller');

router.route("/")
    .get(brandController.getBrandsController)
    .post(brandController.createBrandController)

router.route("/:id")
    .get(brandController.getBrandById)
    .patch(brandController.updateBrandById)

module.exports = router