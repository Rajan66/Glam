const express = require("express")
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/products")
const middleware = require('../middleware/auth.js')

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProduct)

router.post('/', middleware.decodeToken, middleware.checkModerator, createProduct)
router.patch('/:id', middleware.decodeToken, middleware.checkModerator, updateProduct)
router.delete('/:id', middleware.decodeToken, middleware.checkModerator, deleteProduct)

module.exports = router