import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    userName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }
}, {timestamps: true})

 const User =mongoose.models.Users || mongoose.model('Users', UserSchema)

 export default User