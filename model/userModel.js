const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'User name is required']
    },
    password: {
        type: String,
        require: [true, 'Password is required']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('users', userSchema);