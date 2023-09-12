const router = require("express").Router();
const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedcart = await newCart.save();
    console.log(savedcart);
    res.status(200).json(savedcart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET PRODUCT
router.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userID: req.params.userid });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
