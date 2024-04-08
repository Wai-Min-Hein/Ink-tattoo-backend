import Artworks from "../models/artWorks.model.js";
import Artist from "../models/artists.model.js";
import { errorHandler } from "../utils/error.js";

export const get = async (req, res, next) => {
  try {
    const data = await Artist.find();

    return res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getSingleArtist = async (req, res, next) => {
  try {
    const data = await Artist.findById(req.params.id);

    const name = data.name;

    const artWorks = await Artworks.find({ artist: name }).exec();

    const artistData = { ...data._doc, artWorks };

    return res.status(200).json({ success: true, data, artistData });
  } catch (error) {
    next(error);
  }
};

export const post = async (req, res, next) => {
  try {
    const { name, img, position, fb, viber, phone } = await req.body;

    const data = { name, img, position, fb, viber, phone };

    if (!data) return errorHandler(400, "Please provide all fields");

    const newArtworks = new Artist({
      name,
      img,
      position,
      fb,
      viber,
      phone,
    });

    await newArtworks.save();

    return res.status(200).json({ success: true, newArtworks });
  } catch (error) {
    next(error);
  }
};

export const put = async (req, res, next) => {
  try {
    const { name, img, position, fb, viber, phone, _id } = await req.body;

    const data = { name, img, position, fb, viber, phone };

    const updateArtist = await Artist.findByIdAndUpdate(_id, data);

    return res.status(200).json({ success: true, updateArtist });
  } catch (error) {
    next(error);
  }
};



export const deleteData = async (req, res, next) => {
  try {
    const  {id}  = await req.body;



    const updateArtist = await Artist.findByIdAndDelete(id);

    return res.status(200).json({ success: true, message:'Delete success' });
  } catch (error) {
    next(error);
  }
};
