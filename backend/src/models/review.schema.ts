import { model, Schema } from "mongoose";

const reviewSchema = new Schema({
  userId: {
    type: [Schema.Types.ObjectId],
    ref: "user",
    required: true,
  },
  productId: {
    type: [Schema.Types.ObjectId],
    ref: "Product",
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
export const reviewModel = model("review", reviewSchema);
