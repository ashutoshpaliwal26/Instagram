import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String, 
        require : true
    },
    email : {
        type : String, 
        require : true,
        unique : true
    },
    phone : Number,
    password  : String,
    username : {
        type : String,
        unique : true,
        require : true
    }
})

mongoose.models = {};

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;