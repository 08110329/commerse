import { Router } from "express";
import {
  createReview,
  deleteReview,
  getReview,
} from "../controllers/review.controller";

const reviewRouter = Router();
reviewRouter
  .post("/createReview", createReview)
  .get("/getReview", getReview)
  .delete("/deleteReview/:id", deleteReview);

export default reviewRouter;
