import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
type UserType = {
  userId: string;
  email: string;
  role: string;
};

// JWT нууц түлхүүр
const JWT_SECRET = process.env.JWT_SECRET as string;

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Токен байхгүй." });
    }
    const decoded = jwt.verify(token, JWT_SECRET) as UserType;

    req.user = decoded; // req.user-ийг тодорхойлох
    next();
  } catch (error) {
    return res.status(401).json({ message: "Токен буруу байна." });
  }
};

// Админ рүү хандах эрхийг шалгах middleware
const checkAdminRole = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Зөвхөн админд." });
  }
};

export { checkAdminRole };
