
import { Router } from "express";
import { createOrder, getOrder, updateOrder} from "../controllers";

const orderRouter = Router();
orderRouter.post("/createOrder", createOrder).get("/getOrder", getOrder).put("/updateOrder",updateOrder);

export default orderRouter;
