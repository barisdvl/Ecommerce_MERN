const Cart = require("../models/Cart");

//CREATE CART
exports.createCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE CART
exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE CART
exports.deleteCart = async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);
    deletedCart
      ? res.status(500).json("Cart has been deleted!")
      : res.status(404).json("Cart Not Found!");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER CART
exports.getUserCart = async (req, res) => {
  try {
    const userCart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(userCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL CARTS
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};
