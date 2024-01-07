const Order = require('../models/orders')

const getOrders = async (req, res) => {
    const uid = req.body.uid
    try {
        const orders = Order.find({ uid: uid })
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getOrder = async (req, res) => {
    const _id = req.params
    try {
        const order = Order.findOne(_id)
        res.status(200).json(order)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createOrder = async (req, res) => {
    const order = req.body
    const newOrder = new Order({ ...order })
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