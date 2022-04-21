const express = require("express");
const { createCart } = require("../controllers/cart.controllers");

router = express.Router();

router.post("/cart/addItem", createCart);

module.exports = router;