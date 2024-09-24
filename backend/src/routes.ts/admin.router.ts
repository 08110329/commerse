import { Router } from "express";
import { createAdminController } from "../controllers/create-admin.controller";
const adminRouter = Router();

adminRouter
.post("/", createAdminController)
export {adminRouter};