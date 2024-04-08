import mongoose, { Schema } from 'mongoose'

const BlogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    para:{
        type: String,
        required: true
    }
}, {timestamps: true})

const Blog = mongoose.model('Blog', BlogSchema)

export default Blog