import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    } , 
    surname: {
        type: String
    },
    username: {
        type : String, 
    }, 
    password: {
        type: String
    }
} , {
    versionKey: false
})

export const userModel = mongoose.model("users" , UserSchema)

