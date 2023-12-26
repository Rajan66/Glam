const express = require("express")
const { getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/products.js")
const middleware = require('../middleware/auth.js')

const router = express.Router()

router.get('/', getProducts)
router.post('/', middleware.decodeToken, createProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router