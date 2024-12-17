import { model, Schema } from "mongoose";

const packageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user", 
    required: true,
  },
  products: {
    type: Schema.Types.ObjectId,
    ref: "product", 
    required: true,
  },
  quantity:{
    type: Number,
    required:true,
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

export const packageModel = model("package", packageSchema);
