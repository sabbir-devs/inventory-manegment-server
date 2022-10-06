const { getStockServices, getStockByIdServices, updateStockByIdServices, createStockServices } = require("../services/stock.services");

exports.getStockController = async (req, res, next) => {
    try {
        const stocks = await getStockServices();
        res.status(200).json({
            status: "success",
            message: "successfuly get stock",
            data: stocks
        })
    } catch (error) {
        req.status(400).json({
            status: 'fail',
            message: "couldn't get the stock",
            error: error.message
        })
    }
}
exports.getStockByIdController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const stocks = await getStockByIdServices(id);
        res.status(200).json({
            status: "success",
            message: "successfuly get stock",
            data: stocks
        })
    } catch (error) {
        req.status(400).json({
            status: 'fail',
            message: "couldn't get the stock",
            error: error.message
        })
    }
}
exports.updateStockByIdController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const stocks = await updateStockByIdServices(id, req.body);
        res.status(200).json({
            status: "success",
            message: "successfuly get stock",
            data: stocks
        })
    } catch (error) {
        req.status(400).json({
            status: 'fail',
            message: "couldn't get the stock",
            error: error.message
        })
    }
}
exports.createStockController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const stocks = await createStockServices(id, req.body);
        res.status(200).json({
            status: "success",
            message: "successfuly get stock",
            data: stocks
        })
    } catch (error) {
        req.status(400).json({
            status: 'fail',
            message: "couldn't get the stock",
            error: error.message
        })
    }
}
