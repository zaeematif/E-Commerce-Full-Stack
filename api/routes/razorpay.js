const express = require("express");
const instance = require("../index");

const router = express.Router();

router.post("/payment", async (req, res) => {
  const options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  console.log(order);
  res.status(200).json("Success");
});

module.exports = router;
