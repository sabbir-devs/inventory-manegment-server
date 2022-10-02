const express = require('express');
const { categoryController } = require('../controllers/category.controller');
const router = express.Router();

router.route('/')
    .get(categoryController.getCategoryController)
    .post(categoryController.createCategoryController)


router.route("/:id")
    .get(categoryController.getCategoryById)