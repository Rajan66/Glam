import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    productImage: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Product = mongoose.model('Product', productSchema)

export default Product
