const Brand = require("../models/Brand")
const { createBrandServices, getBrandService, getBrandByIdServce, updateBrandByIdServce } = require("../services/brand.services")

exports.getBrandsController = async (req, res, next) => {
    try {
        const brands = await getBrandService();
        res.status(200).json({
            status: 'success!',
            message: "Brand find successful!",
            data: brands
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't found the brand",
            error: error.message
        })
    }
}
exports.createBrandController = async (req, res, next) => {
    try {
        const result = await createBrandServices(req.body)
        res.status(200).json({
            status: 'success!',
            message: "Brand create successful!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't create the brand",
            error: error.message
        })
    }
}

// find product by specific id
exports.getBrandById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const brand = await getBrandByIdServce(id);
        if(!brand){
            return res.status(400).json({
                status: 'fail',
                error: "Couldn't find a brand with this id"
            })
        }
        res.status(200).json({
            status: 'success!',
            message: "bradn found successful",
            data: brand
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couldn't find the brand",
            error: error.message
        })
    }
}
exports.updateBrandById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const brand = await updateBrandByIdServce(id, req.body);
        if(!brand.modifiedCount){
            return res.status(400).json({
                status:'fail',
                error:"Couldn't update the product with this id"
            })
        }
        res.status(200).json({
            status: 'success!',
            message: "brand update successful",
            data: brand
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couldn't update the brand",
            error: error.message
        })
    }
}


// left color code: #9e03a3
// middle color code: #2199ec
// right color code: #00ffff