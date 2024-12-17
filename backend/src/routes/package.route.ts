import { Router } from "express";
import {
  createPackage,
  addToPackage,
  deleteFromPackage,
  getPackage,
  updatePackage,
} from "../controllers/package.controller";

const packageRouter = Router();
packageRouter
  .post("/createPackage", createPackage)
  .get("/getPackage", getPackage)
  .post("/addToPackage", addToPackage)
  .put("/updatePackage", updatePackage)
  .delete("/deleteFromPackage", deleteFromPackage);
export default packageRouter;
