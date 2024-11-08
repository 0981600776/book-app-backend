const express = require('express');
const { createOrder, getAllOrder, getOrderByEmail } = require('./order.controller');

const router = express.Router();

// create order endpoint
router.post("/", createOrder)

// get all order
router.get("/", getAllOrder)

// get orders by user email
router.get("/email/:email", getOrderByEmail)

module.exports = router;