const Product = require("../models/Product");
const {
  getProductService,
  createProductService,
  updateProductService,
  getSingleProductService,
  bulkUpdateProductService,
  deleteProductService,
} = require("../services/product.services");

// get all product
exports.getProducts = async (req, res, next) => {
  try {
    const products = await getProductService();
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get data",
      error: error.message,
    });
  }
};

// create a new product
exports.createProduct = async (req, res, next) => {
  try {
    // save or create
    const result = await createProductService(req.body);
    result.logger();

    res.status(200).json({
      status: "success",
      message: "Data inserted successfuly!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

// find one product by id and modify
// get a product
exports.getSingleProdeuct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getSingleProductService(id);
    res.status(200).json({
      status: "success",
      message: "product get successfuly",
      data: product
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "can't get product",
      error: error.message
    })
  }
}

// update one product
exports.updateProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductService(id, req.body)
    res.status(200).json({
      status: 'success',
      message: "product update Successfuly!",
      data: result
    })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "could'n update product",
      error: error.message
    })
  }
}

// delete one product 
exports.deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductService(id);
    res.status(200).json({
      status: "success",
      message: "product delete successful",
      data: result
    })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "could't delete the product",
      error: error.message
    })
  }
}

// buld update
exports.bulkUpdateProduct = async (req, res, next) => {
  try {
    const product = await bulkUpdateProductService(req.body);
    res.status(200).json({
      status: 'success',
      message: "product update successfuly!",
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "could'n update product",
      error: error.message
    })
  }
}



































// pracice code

//   exports.getProducts = async (req, res, next) => {
//     try {
//         // we can find one data using spacefic id or name any quantity
//         // using or operetor we can find spacefic data: { $or: [{ _id: "632b328429959b69b3a35f72"}, {name:'sabbir'}, {price:70}] }
//         // const product = await Product.find({ name:'sabbir'});
//         // const product = await Product.find({ $or: [{ _id: "632b328429959b69b3a35f72"}, {name:'sabbir'}, {price:70}]});
//         // const product = await Product.find({ status: { $ne: 'out-of-stock' } }); // not equal
//         // const product = await Product.find({ quantity: { $gt: 100 } }); // is greater than
//         // const product = await Product.find({ quantity: { $lte: 100 } }); // is less than
//         // const product = await Product.find({ name: { $in: ["sabbir", "rabbi","apple","moon"] } }); // if this specific name is exist on database then we can see the data
//         // const product = await Product.find({}, 'name quantity'); // now we can see name and quantity
//         // const product = await Product.find({}, '-name  -price'); // now we can see name and price quantity will never show
//         // const product = await Product.find({}).limit(5); // we can limit our product how much product on display
//         // const product = await Product.find({}).sort({quantity: -1}); // we can load product sorted
//         // const product = await Product.find({}).select({name: 1}); // load all product name
//         // const product = await Product.where("name").equals("sabbir").where("quantity").gte(100);// product will we get name sabbir quantity must 100+
//         // const product = await Product
//         //     .where("name").equals(/\w/)
//         //     .where("quantity").gte(0).lte(600)
//         //     .limit(2);// product will we get name all quantity greter then 0 less then 600 and product load 2 for limit 2
//         // const product = await Product.findById('632be882b7c7881db7077091');

//         const products = getProductService; // for get all product;
//         res.status(200).json({
//             status: 'success',
//             data: products
//         })
//     } catch (error) {
//         res.status(400).json({
//             status: 'fail',
//             message: "can't get data",
//             error: error.message
//         })
//     }
// };

// exports.createProduct = async (req, res, next) => {
//     try {
//       // save or create
//       const result = createProductService;

//       // instance creation -> Do Something -> save()

//       // another options
//       // const product = new Product(req.body);
//       // if (product.quantity == 0) {
//       //   product.status = "out-of-stock"
//       // }
//       // const result = await product.save();
//       result.logger();

//       res.status(200).json({
//         status: "success",
//         message: "Data inserted successfuly!",
//         data: result
//       })

//     } catch (error) {
//       res.status(400).json({
//         status: 'fail',
//         message: 'Data not inserted',
//         error: error.message
//       })
//     }
//   }
