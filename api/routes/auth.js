const router = require("express").Router();
const { log } = require("console");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN  (JWT is here)

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log("Bhaiya yaha aaye?");
    !user && res.status(401);

    const hashPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const OriginalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong Credentials");

    //JWT Token
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      //secret key
      process.env.JWT_SEC
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
