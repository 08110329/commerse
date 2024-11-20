import { model, Schema } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: [String],
  },
  description: {
    type: String,
  },
  color: {
    type: [String],
  },
  size: {
    type: [String],
  },
  tshirheg: {
    type: Number,
  },
  productCode: {
    type: String,
  },
  torolId: {
    type: String,
    ref: "Category",
  },
  createdAt: {
    type: Date,

    default: Date.now,
  },
  updatedAt: {
    type: Date,

    default: Date.now,
  },
});

export const productModel = model("product", productSchema);
