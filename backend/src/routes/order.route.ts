import { create } from "domain";
import { Router } from "express";
import { createOrder, getOrder } from "../controllers";

const orderRouter = Router();
orderRouter.post("/createOrder", createOrder).get("/getOrder", getOrder);

export default orderRouter;
