import { Router } from "express";
import { createCustomer, deleteCustomer, getCustomers } from "../controllers";

const customerRouter = Router();

customerRouter
  .post("createCustomer", createCustomer)
  .get("getCustomer", getCustomers)
  .get("getCustomers", getCustomers)
  .delete("deleteCustomer", deleteCustomer);

export default customerRouter;
