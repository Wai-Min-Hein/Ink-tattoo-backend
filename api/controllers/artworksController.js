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
