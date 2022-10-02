const express = require('express');
const productController = require('../controllers/product.controller');
const uploader = require('../middleware/uploader');
const router = express.Router();

router.post("/file-upload", uploader.single("image"), productController.fileUploadController)

router.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct)


router.route('/bulk-update').patch(productController.bulkUpdateProduct)
router.route('/bulk-delete').delete(productController.bulkDeleteProduct)

// allways we will put dynamic route bottom side of our page
router.route('/:id')
    .get(productController.getSingleProdeuct)
    .patch(productController.updateProductById)
    .delete(productController.deleteProductById)

module.exports = router