const CryptoJS = require("crypto-js");
const User = require("../models/User");

exports.updateUser = async (req, res) => {
  //IF USER TRY TO UPDATE PASSWORD, ENCRYPT BEFORE EVERYTHING
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SCRT_KEY
    ).toString();
  }

  //UPDATE USER
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE USER
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    deletedUser
      ? res.status(200).json("User has been deleted!")
      : res.status(404).json("User Not Found!");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort("-createdAt");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
