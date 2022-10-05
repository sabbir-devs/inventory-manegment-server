const Supplier = require("../models/Supplier")

exports.getSupplierServices = async () => {
    const suppliers = await Supplier.find({});
    return suppliers;
}
exports.createSupplierServices = async (data) => {
    const supplier = await Supplier.create(data);
    return supplier
}
exports.getSupplierByIdServices = async (id) => {
    const supplier = await Supplier.findOne({ _id: id });
    return supplier;
}
exports.updateSupplierByIdServices = async (id, data) => {
    const supplier = await Supplier.updateOne({ _id: id }, data, {
        runValidators: true
    })
    return supplier;
}