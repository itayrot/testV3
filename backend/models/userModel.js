const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema, 'users'); // The third argument explicitly sets the collection name

// Works
module.exports = User;
