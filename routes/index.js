const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");

router.get("/products", controller.getAllProduct);

router.post("/products/create", controller.addProduct);
router.post("/products/:id/update_quantity", controller.updateProduct);

router.delete("/products/id=:id", controller.deleteProduct);

module.exports = router;
