import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        Validite:{
            validator:val => {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val);
            },
            msg:"email is not valid"
    }
},
    password:{
        type:String,        
        required:true,
        minlength:5
    }
},{timestamps:true});

const User = mongoose.model("User",userschema);

export default User;