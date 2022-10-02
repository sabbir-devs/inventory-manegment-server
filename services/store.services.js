const Store = require("../models/Store")

// get operation
exports.getStoreServices = async() => {
    const stores = await Store.find({});
    return products;
}

// post operation
exports.createStoreServices = async(data) => {
    const store = await Store.create(data)
    return store;
}

// by ID operation
exports.getStoreByIdServices = async(id) => {
    const store = await Store.findOne({_id: id})
    return store;
}