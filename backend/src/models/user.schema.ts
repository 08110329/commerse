import { model, Schema } from "mongoose";

const userSchema = new Schema({
  lastName: {
    type: [String],
    required: false,
  },
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
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  saveProduct: {
    type: [Schema.Types.ObjectId],
    ref: "save",
    required: false,
  },
  role: {
    type: String,
    emun: ["user", "admin"],
    default: "user",
  },
  phone:{
    type:Number,
    required:true
  },
  desc:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  save: {
    type: [Schema.Types.ObjectId],
    ref: "Product",
    required: false,
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
export const userModel = model("user", userSchema);
