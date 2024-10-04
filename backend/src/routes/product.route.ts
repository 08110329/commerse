import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "../controllers/product.controller";

const productRouter = Router();
productRouter
  .post("/createProduct", createProduct)
  .get("/getProduct", getProducts)
  .delete("/deleteProduct/:id", deleteProduct)
  .get("/getProduct/:id", getProduct);

export default productRouter;
