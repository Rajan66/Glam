const express = require("express")
const { createUser, getUsers,getUser,updateUser } = require('../controllers/users')

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)

router.post('/', createUser)
router.patch('/:id', updateUser)

module.exports = router