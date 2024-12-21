import { model, Schema } from "mongoose";

const orderProductSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: false,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  size: { type: String, required: false },
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  product: {
    type: [orderProductSchema],
    required: true,
  },
  status: {
    type: String,
    enum: [
      "Шинэ захиалага",
      "Бэлтгэгдэж байна",
      "Хүргэлтэнд гарсан",
      "Хүргэгдсэн",
      "Цуцлагдсан",
    ],
    default: "Шинэ захиалага",
  },
  payment:{
    type:String,
    required:false,
  },
  lastName: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const orderModel = model("order", orderSchema);
