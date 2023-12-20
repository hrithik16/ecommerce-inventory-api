const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");

router.get("/products", controller.getAllProduct); // This is for fetching all the projects

router.post("/products/create", controller.addProduct); //This is to add one project
router.post("/products/:id/update_quantity", controller.updateProduct); //This is to update a project

router.delete("/products/id=:id", controller.deleteProduct); //This is to delete a project

module.exports = router;
