import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
} from "../controllers/category.controller";

const categoryRouter = express.Router();
categoryRouter
  .post("/", createCategory)
  .get("/", getCategory)
  .delete("/deleteCategory/:id", deleteCategory);

export default categoryRouter;
