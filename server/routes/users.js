const express = require("express")
const { createUser, getUsers,getUser } = require('../controllers/users')

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)

router.post('/', createUser)

module.exports = router