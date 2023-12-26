const express = require("express")
const { getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/products.js")

const router = express.Router()

router.get('/', getProduct)
router.post('/', createProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router