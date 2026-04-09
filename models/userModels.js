const mongoose = require('mongoose');


//define usere model

const userSchema = new mongoose.Schema({
    first_name: {type: String, require: true},
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    email: {type: String, require: true, unique: true},
});

module.exports = mongoose.model('Users', userSchema);

