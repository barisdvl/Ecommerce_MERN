const Product = require("../models/Product");

//CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const oldProduct = await Product.findOne({ title: req.body.title });
    if (oldProduct) {
      return res.status(403).json("Product already exist");
    }

    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    console.log("Controller Check");
    console.log(err);
    res.status(500).json(err);
  }
};

//UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    deletedProduct
      ? res.status(200).json("Product has been deleted!")
      : res.status(404).json("Product Not Found!");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET PRODUCT
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL PRODUCT
exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().sort("-createdAt");
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};