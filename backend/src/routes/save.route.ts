import { Router } from "express";
import {
  createSave,
  deleteSave,
  getSave,
} from "../controllers/save.controller";

const saveRouter = Router();
saveRouter
  .post("/createSave", createSave)
  .get("/getSave", getSave)
  .delete("/deleteSave/:id", deleteSave);

export default saveRouter;
