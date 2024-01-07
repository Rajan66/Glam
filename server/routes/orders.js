const express = require('express')
const { getOrders, getOrder, createOrder } = require('../controllers/orders')

const router = express.Router()

router.get('/', getOrders)
router.get('/:id', getOrder)

router.post('/', createOrder)

module.exports = router