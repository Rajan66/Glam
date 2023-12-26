const mongoose = require("mongoose")
const Product = require("../models/products.js")

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createProduct = async (req, res) => {
    const product = req.body
    const newProduct = new Product({ ...product, createdAt: new Date().toISOString() })
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    const { id: _id } = req.params
    const product = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).send('No product with that id')
    }
    const updatedProduct = await Product.findByIdAndUpdate(_id, { ...product, _id }, { new: true })
    res.json(updatedProduct)
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send('No product with that id')
    }
    await Product.findByIdAndDelete(id)
    res.json({ message: "Product Deleted Successfully" })
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}