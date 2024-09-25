import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.router";
import { connectToDatabase } from "./database";

connectToDatabase();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Hello" });
});

app.use("/users", userRouter);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
