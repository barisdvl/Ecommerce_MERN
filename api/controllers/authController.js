const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.registerUser = async (req, res) => {
  console.log(req.body)
  try {
    //If email already exist
    oldUser = await User.findOne({ email: req.body.email });
    if (oldUser) {
      return res.status(401).json("Email already exist. Please Login!");
    }

    //Register user
    const newUser = new User({
      email: req.body.email,
      full_name: req.body.full_name,
      username: req.body.username,
      phone: req.body.phone,
      address: req.body.address,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SCRT_KEY
      ).toString(),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    //Find user with email from Database
    const user = await User.findOne({ email: req.body.email });

    //If not find return
    if (!user) {
      return res.status(401).json("Wrong credentials!");
    }

    //decrypt password
    const userPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SCRT_KEY
    ).toString(CryptoJS.enc.Utf8);

    //password verification
    if (userPassword !== req.body.password) {
      return res.status(401).json("Wrong credentials!");
    }

    //create access token with JWT
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SCRT,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};
