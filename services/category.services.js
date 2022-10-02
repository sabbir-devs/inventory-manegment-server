const Category = require("../models/Category")

exports.getCategoriesServices = async() => {
    const categorys = await Category.find({});
    return categorys;
}

exports.getCategoryByIdServices = async(id) => {
    const category = await Category.findOne({_id: id});
    return category;
}

exports.createCategorysServices = async(data) => {
    const category = await Category.create(data);
    return category;
}