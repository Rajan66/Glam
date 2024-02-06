const Order = require('../models/orders')

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getUserOrders = async (req, res) => {
    const uid = req.body.uid
    console.log(uid)
    try {
        const orders = await Order.find({ uid: uid })
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getOrder = async (req, res) => {
    const { id: _id } = req.params
    console.log(_id)
    try {
        const order = await Order.findById(_id)
        console.log(order)
        res.status(200).json(order)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createOrder = async (req, res) => {
    const order = req.body
    const newOrder = await new Order({ ...order })
    try {
        await newOrder.save()
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    getOrders,
    getOrder,
    createOrder
}