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

const Users = mongoose.model("Users", userSchema)

module.exports = Users