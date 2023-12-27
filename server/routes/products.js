const express = require("express")
const { getProducts,getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/products.js")
const middleware = require('../middleware/auth.js')

const router = express.Router()

router.get('/', getProducts)
router.get('/', getProduct)

router.post('/', middleware.decodeToken, createProduct)
router.patch('/:id', middleware.decodeToken, updateProduct)
router.delete('/:id', middleware.decodeToken, deleteProduct)

module.exports = router