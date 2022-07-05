const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'A name must be entered'],
        trim: true
    },
    age: Number,
    email: {
        type: String,
        trim: true
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User;