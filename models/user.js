const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db')

const UserSchema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    access: {
        type: Number
    } 
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt( 10, (err, salt)=> {
        bcrypt.hash( newUser.password , salt, (err,hash) =>{
            if (err) throw err
            newUser.password = hash
            newUser.save(callback)
        })
    })
}