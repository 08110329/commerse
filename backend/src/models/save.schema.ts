import { model, Schema, Types } from "mongoose";

const saveSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  products: {
    type: Schema.Types.ObjectId,
    ref: "product",
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

export const saveModel = model("save", saveSchema);
