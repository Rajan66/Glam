const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        default: 'user',
    },
})

const User = mongoose.model("User", userSchema)

module.exports = User