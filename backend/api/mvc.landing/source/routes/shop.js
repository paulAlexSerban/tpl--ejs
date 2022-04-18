const express = require("express");
const shopController = require("../controllers/shop");
const assetsController = require("../controllers/assets");


const router = express.Router();



router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);

/**
 * `:productId` - dynamic segment
 *  - signals to express that it should not look for a route
 *  - instead that the part after `:` can pe anything
 */
router.get("/products/:productId", shopController.getProduct);

router.post("/cart", shopController.postCart);

router.get("/cart", shopController.getCart);
router.get("/checkout", shopController.getCheckout);
router.get("/orders", shopController.getOrders);
router.get("/assets/:dir/:file", assetsController.getAssets);
router.get("/public/:dir/:file", assetsController.getPublic);

module.exports = router;
