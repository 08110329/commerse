import { model, Schema } from "mongoose";

const orderSchema = new Schema({
  productCode: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  payment: {
    type: String,
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
  phone: {
    type: String,
  },
  desc: {
    type: String,
  },
  address: {
    type: String,
  },
  orderTime: {
    type: Date,
    default: () => new Date(),
  },
  orderDetails: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product", 
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1, // Minimum quantity is 1
      },
      price: {
        type: Number,
        required: true, // Price of the product
      },
      total: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const orderModel = model("order", orderSchema);
