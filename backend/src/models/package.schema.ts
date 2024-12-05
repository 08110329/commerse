import { model, Schema } from "mongoose";

const packageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Хэрэглэгчийн загвар
    required: true,
  },
  products: {
    type: Schema.Types.ObjectId,
    ref: "Product", // Бүтээгдэхүүний загвар
    required: true,
  },
  createdAt: {
    type: Date,

    default: Date.now,
  },
  updatedAt: {
    type: Date,

    default: Date.now,
  },
  title: {
    type: String,
    default: "No title",
  },
  price: {
    type: String,
    default: 0,
  },
  amount: {
    type: String,
    default: 0,
  },
  image_link: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
  },
});

export const packageModel = model("package", packageSchema);
