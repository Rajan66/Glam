const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    id: { type: String },
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
    }],
    totalPrice: { type: Number },
    createdAt: {
        type: Date,
        default: new Date()
    },
})