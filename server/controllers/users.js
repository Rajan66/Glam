const User = require('../models/users')

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getUser = async (req, res) => {
    const { _id: id } = req.params
    try {
        const user = await User.findOne({ _id })
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createUser = async (req, res) => {
    const user = req.body
    const userExists = await User.findOne({ uid: user.uid })
    if (userExists) {
        console.log({ message: 'User already exists' })
        res.json({ message: 'User already exists' })
        return
    }
    const newUser = new User(user)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


module.exports = {
    createUser,
    getUsers,
    getUser
}