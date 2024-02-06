const express = require("express")
const { createUser, getUsers } = require('../controllers/users')

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)

router.post('/', createUser)

module.exports = router