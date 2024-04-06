import mongoose, { Schema } from "mongoose";

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  fb: {
    type: String,
    default: ""
  },
  viber: {
    type: String,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  }
}, {timestamps: true});

const Artist =
  mongoose.models.Artists || mongoose.model("Artists", ArtistSchema);

export default Artist;
