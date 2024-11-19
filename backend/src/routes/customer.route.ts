import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
} from "../controllers";

const customerRouter = Router();

customerRouter
  .post("/createCustomer", createCustomer)
  .get("/getCustomers", getCustomers)
  .delete("/deleteCustomer", deleteCustomer)
  .get("/getCustomer/:id", getCustomer);
export default customerRouter;
