const User = require('../models/user')


const createUser = async (req, res) => {
    const user = req.body
    console.log(user)
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
    createUser
}