import { RequestHandler } from "express";
import { userModel } from "../models/user.schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string; // Ensure JWT secret is set in environment variables
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || "10", 10); // Use environment variable for salt rounds

// Хэрэглэгчийн Контроллер үүсгэх
export const createUserController: RequestHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Нэр, имэйл, нууц үг оруулсан эсэхийг шалгах
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Нэр, имэйл, болон нууц үг шаардагдана.",
      });
    }
    // Хэрэглэгч аль хэдийн бүртгэлтэй эсэхийг шалгах
    const hereglegchMonuu = await userModel.findOne({ email });
    if (hereglegchMonuu) {
      return res
        .status(400)
        .json({ message: "Ижил email-тэй хэрэглэгч бүртгэлтэй байна." });
    }

    // Нууц үгийг hash хийх
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Шинэ хэрэглэгчийг үүсгэх
    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
      role: "user",
    });

    // JWT токен үүсгэх (Шинэ хэрэглэгчийг нэвтрүүлэх)
    const token = jwt.sign(
      {
        userId: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Шинээр үүсгэсэн хэрэглэгчийн мэдээллийг буцаах
    return res.status(201).json({
      message: "Хэрэглэгч амжилттай үүсгэгдлээ.",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error(error); // Алдааг логлож байна
    return res.status(500).json({
      message: "Хэрэглэгчийг үүсгэх үед алдаа гарлаа.",
    });
  }
};

// Хэрэглэгчийн Контроллер авах
export const getUserController: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Имэйл, нууц үг оруулсан эсэхийг шалгах
    if (!email || !password) {
      return res.status(400).json({
        message: "Имэйл болон нууц үг шаардагдана.",
      });
    }

    // Имэйлээр хэрэглэгчийг хайх
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Мэдээлэл буруу байна.",
      });
    }

    // Нууц үгийг шалгах (bcrypt гэх мэт ашиглан)
    if (password! == user.password) {
      return res.status(401).json({
        message: "Мэдээлэл буруу байна.",
      });
    }
    // Нууц үг тохирч байгаа эсэхийг шалгах
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Email эсвэл нууц үг буруу байна." });
    }

    // JWT токен үүсгэх
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Хэрэглэгчийн мэдээллийг буцаах
    return res.status(200).json({
      message: "Хэрэглэгч амжилттай нэвтэрлээ.",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error); // Алдааг логлож байна
    return res.status(500).json({
      message: "Нэвтрэх үед алдаа гарлаа.",
    });
  }
};
// Хэрэглэгч гарах
export const logout: RequestHandler = (req, res) => {
  try {
    // Ideally, you would use token blacklisting here
    return res.status(200).json({ message: "Амжилттай гарлаа." });
  } catch (error) {
    console.error("Гарах алдаа:", error);
    return res.status(500).json({ message: "Серверт алдаа гарлаа." });
  }
};
