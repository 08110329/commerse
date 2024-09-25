import { Router } from "express";
import {
  createUserController,
  getUserController,
} from "../controllers/create-user.controller";
const userRouter = Router();

userRouter
  .post("/register", createUserController)
  .post("/login", getUserController);
export { userRouter };
