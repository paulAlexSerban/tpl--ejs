const express = require('express');
const adminController = require('../controllers/admin');
const assetsController = require("../controllers/assets");

const router = express.Router();


router.get('/add-product', adminController.getAddProducts); // /admin/add-product => GET
router.get('/products', adminController.getProducts); // /admin/products => GET

router.post('/add-product', adminController.postAddProduct); // /admin/add-product => POST
router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);
router.get("/assets/:dir/:file", assetsController.getAssets);
router.get("/public/:dir/:file", assetsController.getPublic);

exports.routes = router;
