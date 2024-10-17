import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
} from "../controllers/category.controller";

const categoryRouter = express.Router();
categoryRouter
  .post("/category", createCategory)
  .get("/getCategory", getCategory)
  .delete("/deleteCategory/:id", deleteCategory);

export default categoryRouter;
