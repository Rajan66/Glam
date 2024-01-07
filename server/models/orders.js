const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
}, { _id: false });

const orderSchema = mongoose.Schema({
    uid: String,
    products: [productSchema],
    totalPrice: { type: Number },
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

const Orders = mongoose.model('Orders', orderSchema)

module.exports = Orders