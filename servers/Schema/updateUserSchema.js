const { Schema, default: mongoose } = require("mongoose");

const updateUserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true,
    }
})

const UpdatedUser=mongoose.model('UpdatedUser',updateUserSchema);

module.exports=UpdatedUser;