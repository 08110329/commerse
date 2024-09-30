import { model, Schema } from "mongoose";

const reviewSchema = new Schema({
  users: {
    type: [Schema.Types.ObjectId],
    ref: "user",
    required: false,
  },
  products: {
    type: [Schema.Types.ObjectId],
    ref: "Product",
    required: false,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
export const reviewModel = model("review", reviewSchema);
