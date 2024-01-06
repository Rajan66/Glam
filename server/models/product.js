const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: [String], required: true },
    productImage: { type: String },
    createdAt: {
        type: Date,
        default: new Date()
    },
    price: { type: Number, required: true },

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product