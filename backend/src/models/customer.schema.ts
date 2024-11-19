import { model, Schema } from "mongoose";

const customerSchema = new Schema({
  lastName: {
    type: String,
    required: false,
  },
  FirstName: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  address: {
    type: String,
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

export const customerModel = model("Customer", customerSchema);
