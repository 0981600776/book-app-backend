const Order = require("./order.model")

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        console.log("Error creating order", error);
        res.status(500).json({message: "Failed to create order"})
    }
}

const getAllOrder = async (req, res) => {
    try {
        const allOrder = await Order.find();
        res.status(200).send(allOrder);
    } catch (error) {
        console.log("Error Not Order", error);
        res.status(404).send({message: "Order not found"})
    }
}

// get order by Email
const getOrderByEmail = async (req, res) => {
    try {
        const {email} = req.params;
        const orders = await Order.find({email}).sort({createAt: -1});
        if (!orders) {
            return res.status(404).json({message: "Order is not Found"});
        }
        res.status(200).json(orders);
    } catch (error) {
        console.log("Error fetching order", error);
        res.status(500).json({message: "Failed to fetch order"})
    }
}

module.exports = {
    createOrder,
    getAllOrder,
    getOrderByEmail
}