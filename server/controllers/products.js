import mongoose from "mongoose"
import Product from "../models/Products"



export const getProduct = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const createProduct = async (req, res) => {
    const product = req.body
    const newProduct = new Product({ ...product, createdAt: new Date.toISOString() })
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}