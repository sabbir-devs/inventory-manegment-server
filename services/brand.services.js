const Brand = require("../models/Brand")

exports.getBrandService = async () => {
    const brands = await Brand.find({}).select("-products -suppliers");
    return brands
}

exports.createBrandServices = async (data) => {
    const result = await Brand.create(data);
    return result;
}

exports.getBrandByIdServce = async (id) => {
    const brand = await Brand.findOne({ _id: id }).select("-products -suppliers");
    return brand;
}
exports.updateBrandByIdServce = async (brandId, data) => {
    const brand = await Brand.updateOne({ _id: brandId }, { $set: data }, {
        runValidators: true
    });
    return brand;
}