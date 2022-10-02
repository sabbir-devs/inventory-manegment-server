const Category = require("../models/Category")
const { getCategoriesServices, createCategoryServices } = require("../services/category.services")

exports.getCategoryController = async (req, res, next) => {
    try {
        const categorys = await getCategoriesServices();
        res.status(200).json({
            status: 'success!',
            message: 'category find successful!',
            data: categorys
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "coudn't find category",
            error: error.message
        })

    }
}

exports.getCategoryById = async (req, res, next) => {
    const { id } = req.params
    try {
        const category = await getCategoryByIdServices(id);
        res.status(200).json({
            status: 'success!',
            message: "category find successful",
            data: category
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couldn't get category",
            error: error.message
        })
    }
}

exports.createCategoryController = async (req, res, next) => {
    try {
        const category = await createCategoryServices(req.body);
        res.status(200).json({
            status: 'success!',
            message: 'category create successful!',
            data: category
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "coudn't create category",
            error: error.message
        })
    }
}