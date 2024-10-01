import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.router";
import { connectToDatabase } from "./database";
import categoryRouter from "./routes/category.route";
import productRouter from "./routes/product.route";
import reviewRouter from "./routes/review.route";
import saveRouter from "./routes/save.route";

connectToDatabase();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Hello" });
});

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use(productRouter);
app.use(reviewRouter);
app.use(saveRouter);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
