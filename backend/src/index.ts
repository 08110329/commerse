import express from "express";

const app = express();

app.get("/",(_req, res) => {
    res.json({message: "Hello"});
});

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001")
})