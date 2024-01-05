const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    id: String,
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
    }],
    totalPrice: Number,
    shippingAddress: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const Order = mongoose.Model('Order', orderSchema)


module.exports = Order