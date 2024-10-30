import { Router } from "express";
import {
  createPackage,
  addToPackage,
  deleteFromPackage,
  getPackage,
} from "../controllers/package.controller";

const packageRouter = Router();
packageRouter
  .post("/createPackage", createPackage)
  .get("/getPackage", getPackage)
  .post("/addToPackage", addToPackage)
  .delete("/deleteFromPackage", deleteFromPackage);

export default packageRouter;
