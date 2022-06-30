const Order = require("../models/Order");

//CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE ORDER
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE ORDER
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    order ? res.status(200).json("Order has been deleted!") : res.status(404).json("Order Id Not Found.");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER ORDERS
exports.getUserOrders = async (req, res) => {
  try {
    const userOrders = await Order.find({ userId: req.params.userId });
    res.status(200).json(userOrders);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL ORDERS
exports.getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json(err);
  }
};
