import { model, Schema } from "mongoose";

const genreSchema = new Schema({
  name: {
    type: String,
    requied: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
export const genreModel = model("Genre", genreSchema);
