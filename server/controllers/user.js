import express from "express"
import User from "../models/users"
import bcrypt from 'bcryptjs'


export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if (!isPasswordCorrect) return res.status(404).json({ message: "Invalid crendentials!" })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' })

        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}

export const signup = async (req, res) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body
    try {
        const existingUser = await User.findOne({ email })

        if (existingUser) return res.status(404).json({ message: 'User already exists!' })

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match." })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' })

        res.status(200).json({ result, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}