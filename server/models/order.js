const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    id: String,
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
    }],
    totalPrice: Number,
    shippingAddress: {
        name: String,
        address: String,
        city: String,
        state: String,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const Order = mongoose.Model('Order', orderSchema)


module.exports = Order