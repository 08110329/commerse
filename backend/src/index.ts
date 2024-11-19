import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/user.router";
import { connectToDatabase } from "./database";
import categoryRouter from "./routes/category.route";
import productRouter from "./routes/product.route";
import reviewRouter from "./routes/review.route";
import saveRouter from "./routes/save.route";
import { v2 as cloudinary } from "cloudinary";
import Multer, { memoryStorage } from "multer";
import orderRouter from "./routes/order.route";
import packageRouter from "./routes/package.route";
import customerRouter from "./routes/customer.route";

dotenv.config();

connectToDatabase();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Hello" });
});

app.use("/user", userRouter);
app.use(categoryRouter);
app.use(productRouter);
app.use(reviewRouter);
app.use(saveRouter);
app.use(orderRouter);
app.use(packageRouter);
app.use(customerRouter);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = memoryStorage();
//ram dree zurgaa hadlagah function ene2
const upload = Multer({
  storage,
});

async function handleUpload(file: string) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}

app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) return res.status(400).send("no file upload.");

  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURL = "data:" + req.file.mimetype + ";base64," + b64; // zurgiig string bolgoj huwirgadg function
    const cldRes = await handleUpload(dataURL);
    res.json(cldRes);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
