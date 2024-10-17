import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "../controllers/product.controller";

const productRouter = Router();
productRouter
  .post("/product", createProduct)
  .get("/getProducts", getProducts)
  .delete("/deleteProduct/:id", deleteProduct)
  .get("/getProduct/:id", getProduct);

export default productRouter;
