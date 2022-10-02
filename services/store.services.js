const Store = require("../models/Store")

// get operation
exports.getStoreServices = async() => {
    const products = await Store.find({});
    return products;
}

// post operation
exports.createStoreServices = async(data) => {
    const result = await Store.create(data)
    return result;
}

// by ID operation
exports.getStoreByIdServices = async(id) => {
    const product = await Store.findOne({_id: id})
    return product;
}