import Artworks from "../models/artWorks.model.js";
import { errorHandler } from "../utils/error.js";

export const postArtworks = async (req, res, next) => {
  try {
    const { img, artist } = await req.body;

    if (!img || !artist)
      return next(
        errorHandler(400, "Cannot post artworks, please provide correct data")
      );

    const newArtworks = new Artworks({
      img,
      artist
    });
    await newArtworks.save();

    return res.status(200).json({ img, artist });
  } catch (error) {
    next(error);
  }
};


export const getArtworks = async (req, res, next) => {
  try {
    const allArtworks = await Artworks.find()
    

    return res.status(200).json(allArtworks);
  } catch (error) {
    next(error);
  }
};



export const put = async (req, res, next) => {
  try {
    const { img,artist, _id } = await req.body;

    const data = { img,artist };

    const updateArtist = await Artworks.findByIdAndUpdate(_id, data);

    return res.status(200).json({ success: true, updateArtist });
  } catch (error) {
    next(error);
  }
};



export const deleteData = async (req, res, next) => {
  try {
    const  {id}  = await req.body;

    console.log(id);



    const updateArtist = await Artworks.findByIdAndDelete(id);

    return res.status(200).json({ success: true, message:'Delete success' });
  } catch (error) {
    next(error);
  }
};
