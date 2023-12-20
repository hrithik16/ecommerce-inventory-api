const Product = require("../models/product");

module.exports.addProduct = async function (req, res) {
  console.log("Add Controller triggered");
  const id = await Product.countDocuments({});
  try {
    const product = Product.create({
      id: id + 1,
      name: req.body.name,
      quantity: req.body.quantity,
    });
    console.log(product);
    return res.status(200).json({ data: { product: req.body } });
  } catch (error) {
    console.error("Error creating project:", error);
  }
};

module.exports.getAllProduct = async function (req, res) {
  console.log("Get Controller triggered");
  try {
    const Products = await Product.find({});
    return res.status(200).json({ data: Products });
  } catch (error) {
    console.error("Error Fetching project:", error);
  }
};

module.exports.deleteProduct = async function (req, res) {
  console.log("Delete Controller triggered");
  const id = req.params.id;
  try {
    const Products = await Product.deleteOne({ id: id });
    if (Products.deletedCount == 0)
      return res
        .status(404)
        .json({ data: { message: "product with this id doesn't exist" } });
    return res.status(200).json({ data: { message: "product deleted" } });
  } catch (error) {
    console.error("Error Fetching project:", error);
  }
};

module.exports.updateProduct = async function (req, res) {
  console.log("Update Controller triggered");
  const id = req.params.id;
  const number = req.query.number;
  try {
    const Products = await Product.findOneAndUpdate(
      { id: id },
      { quantity: number }
    );
    if (Products == null)
      return res
        .status(404)
        .json({ data: { message: "product with this id doesn't exist" } });
    return res
      .status(200)
      .json({ data: { product: Products, message: "updated successfully" } });
  } catch (error) {
    console.error("Error Fetching project:", error);
  }
};
