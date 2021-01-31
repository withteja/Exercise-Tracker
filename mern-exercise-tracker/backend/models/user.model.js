const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const users = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
},
    {
        timestamps: true,
    }
);

const User = mongoose.model('Users', users);

module.exports = User;

