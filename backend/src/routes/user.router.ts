import { Router } from "express";
import {
  createUserController,
  getUser,
  getUserController,
  logout,
  updateUserController
} from "../controllers/create-user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getMe } from "../controllers/auth.controller";
const userRouter = Router();

userRouter
  .post("/register", createUserController)
  .post("/login", getUserController)
  .post("/logout", logout)
  .post("/updateUserController",updateUserController)
  .get("/me", authMiddleware, getMe)
  .get("/getUser/:userId", getUser);
export { userRouter };
