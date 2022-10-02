const { getStoreServices, createStoreController, createStoreServices, getStoreByIdServices } = require("../services/store.services");

// get operation
exports.getStoreController = async(req, res, next) => {
    try {
        const result = await getStoreServices();
        res.status(200).json({
            status:'success!',
            message: 'get all product successful!',
            data : result
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:"can't not get data",
            error: error.message
        })
    }
}

// post operation
exports.createStoreController = async(req, res, next) => {
    try {
        const result = await createStoreServices(req.body);
        res.status(200).json({
            status:'success!',
            message: 'get all product successful!',
            data : result
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:"couldn't create store",
            error: error.message
        })
    }
}

// by ID operation
exports.getStoreById = async(req, res, next) => {
    const {id} = req.params;
    try {
        const result = await getStoreByIdServices(id);
        res.status(200).json({
            status:'success!',
            message: 'product find successful',
            data : result
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:"couldn't create store",
            error: error.message
        })
    }
}

