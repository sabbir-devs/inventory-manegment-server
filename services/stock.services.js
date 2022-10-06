const Stock = require("../models/Stock")

exports.getStockServices = async() => {
    const stocks = await Stock.find({});
    return stocks;
}
exports.createStockServices = async(data) => {
    const stock = await Stock.create(data);
    return stock;
}
exports.getStockByIdServices = async(id) => {
    const stock = await Stock.findOne({_id: id});
    return stock;
}
exports.updateStockByIdServices = async(id, data) => {
    const stock = await Stock.findOne({_id: id}, data, {
        runValidators:true
    });
    return stock;
}