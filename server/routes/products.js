import express from "express"
import { getProduct, createProduct } from "../controllers/products.js"

const app = express()

app.get(getProduct, '/')
app.post(createProduct, '/')