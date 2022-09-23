const Product = require("../models/Product");


exports.getProductService = async () => {
    const products = await Product.find({});
    return products;
};

exports.createProductService = async (data) => {
    const product = await Product.create(data);
    return product;
}

exports.getSingleProductService = async (productId) => {
    const product = await Product.findOne({ _id: productId });
    return product;
}

exports.updateProductService = async (productId, data) => {
    // new version to take valid input for update product detail
    const result = await Product.updateOne({ _id: productId }, { $set: data }, {
        runValidators: true
    });

    // // old version to take valid input for update product detail
    // const product = await Product.findById(productId);
    // const result = await product.set(data).save();
    return result;
}

// delete a product
exports.deleteProductService = async(id) => {
    const result = await Product.deleteOne({_id: id});
    return result;
}

exports.bulkUpdateProductService = async (data) => {
    // one data update for all product
    // const result = await Product.updateMany({ _id: data.ids }, data.data, {
    //     runValidators: true
    // })

    // muntyple data update different value all product
    let products = [];
    data.ids.forEach(product => {
        products.push(Product.updateOne({_id: product.id}, product.data));        
    });
    const result = await Promise.all(products);
    return result;
}