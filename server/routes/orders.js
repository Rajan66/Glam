const express = require('express')
const { getOrders, getOrder, getUserOrders, createOrder } = require('../controllers/orders')

const router = express.Router()

router.get('/', getOrders)
router.get('/:id', getOrder)
router.get('/users/:uid', getUserOrders)

router.post('/', createOrder)

module.exports = router