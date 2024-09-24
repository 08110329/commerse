import express from "express";
import cors from "cors";
import { adminRouter } from "./routes.ts/admin.router";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(_req, res) => {
    res.json({message: "Hello"});
});

app.use("/admin", adminRouter)
app.use("/users", )

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001")
})