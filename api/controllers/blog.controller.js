import Blog from "../models/blog.model.js";
import { errorHandler } from "../utils/error.js";

export const post = async (req, res, next) => {
    try {

        const {title, para, img} = await req.body
        if(!title, !para,!img) {
            return next(errorHandler(400, 'Please provide all field'))
        }

        const newBlog = new Blog({
            title, para, img
        })

        await newBlog.save()

        return res.json({message:'success', blog:newBlog})
        
    } catch (error) {
        next(error)
    }
}

export const get = async (req, res, next) => {
    try {
      const data = await Blog.find();
  
      return res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  };

  
export const getSingleBlog = async (req, res, next) => {
    try {
      const data = await Blog.findById(req.params.id);
  
      
  
      return res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  };

  

export const put = async (req, res, next) => {
    try {
      const { img,artist,para, _id } = await req.body;
  
      const data = { img,artist,para };
  
      const updateArtist = await Blog.findByIdAndUpdate(_id, data);
  
      return res.status(200).json({ success: true, updateArtist });
    } catch (error) {
      next(error);
    }
  };
  
  
  
  export const deleteData = async (req, res, next) => {
    try {
      const  {id}  = await req.body;
  
      console.log(id);
  
  
  
      const updateArtist = await Blog.findByIdAndDelete(id);
  
      return res.status(200).json({ success: true, message:'Delete success' });
    } catch (error) {
      next(error);
    }
  };