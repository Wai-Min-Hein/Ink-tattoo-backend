import mongoose, { Schema } from "mongoose";

const ArtworksSchema = new Schema ({
    img: {
        type: String,
        required: true,
        
    },
    artist: {
        type: String,
        required: true,
        
    }
}, {timestamps: true})

const Artworks =mongoose.models.Artworks ||  mongoose.model('Artworks', ArtworksSchema)
export default Artworks

