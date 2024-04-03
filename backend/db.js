import mongoose from "mongoose";
//mongo url
mongoose.connect('mongodb+srv://admin:F6S6wlabL81IUDfB@cluster0.m5kku6s.mongodb.net/paytmApp')
//user Schema
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }

});

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})
export const Account  = mongoose.model('Account',accountSchema);
export const User = mongoose.model('User', userSchema);
