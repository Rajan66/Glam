const express = require("express")
const { getUser, createUser, getUsers } = require('../controllers/user.js')

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)

router.post('/', createUser)

module.exports = router