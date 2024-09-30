import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
} from "../controllers/product.controller";

const productRouter = Router();
productRouter
  .post("/createProduct", createProduct)
  .get("/getProduct", getProduct)
  .delete("/deleteProduct/:id", deleteProduct);

export default productRouter;
