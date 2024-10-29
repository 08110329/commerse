import { model, Schema } from "mongoose";

const orderSchema = new Schema({});

export const orderModel = model("order", orderSchema);
