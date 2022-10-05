const Supplier = require("../models/Supplier")
const { getSupplierServices, createSupplierServices, getSupplierByIdServices, updateSupplierByIdServices } = require("../services/supplier.services")

exports.getSupplierController = async (req, res, next) => {
    try {
        const supplier = await getSupplierServices();
        res.status(200).json({
            status: "success",
            message: "supplier found successful",
            data: supplier
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "couldn't get the supplier",
            error: error.message
        })
    }
}
exports.createSupplierController = async (req, res, next) => {
    try {
        const supplier = await createSupplierServices(req.body)
        res.status(200).json({
            status: "success!",
            message: "successful created tthe supplier",
            data: supplier
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "couldn't create the supplier",
            error: error.message
        })
    }
}
exports.getSupplierById = async (req, res, next) => {
    const { id } = req.params
    try {
        const supplier = await getSupplierByIdServices(id);
        if(!supplier){
            res.status(404).json({
                status:"fail",
                message:"couldn't find the supplier with this Id"
            })
        }
        res.status(200).json({
            status: "success!",
            message: "successfuly get the supplier",
            data: supplier
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "couldn't get the supplier",
            error: error.message
        })
    }
}
exports.updateSupplierById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const supplier = await updateSupplierByIdServices(id, req.body);
        if(!supplier.modifiedCount){
            return res.status(400).json({
                status:'fail',
                error:"Couldn't update the product with this id"
            })
        }
        res.status(200).json({
            status: 'success!',
            message: "brand update successful",
            data: supplier
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couldn't update the brand",
            error: error.message
        })
    }
}