import { model, Schema } from "mongoose";
// const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  //   phone: {
  //     type: String,
  //     required: true,
  //   },
  role: {
    type: String,
    default: "user",
  },
  //   avatar: {
  //     type: String,
  //     required: true,
  //   },
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
export const userModel = model("userModel", userSchema);
