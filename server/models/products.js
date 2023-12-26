const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: { type: String },
    title: { type: String, },
    description: { type: String },
    tags: [String],
    productImage: { type: String, },
    createdAt: {
        type: Date,
        default: new Date()
    },
    price: { type: Number, },

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
