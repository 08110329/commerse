import { RequestHandler } from "express";
import { userModel } from "../models/user.schema";

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

    // Шинэ хэрэглэгчийг үүсгэх
    const newUser = await userModel.create({
      username,
      email,
      password,
    });

    // Шинээр үүсгэсэн хэрэглэгчийн мэдээллийг буцаах
    return res.status(201).json({
      message: "Хэрэглэгч амжилттай үүсгэгдлээ.",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
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
    if (password !== user.password) {
      return res.status(401).json({
        message: "Мэдээлэл буруу байна.",
      });
    }

    // Хэрэглэгчийн мэдээллийг буцаах
    return res.status(200).json({
      message: "Хэрэглэгч амжилттай нэвтэрлээ.",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error); // Алдааг логлож байна
    return res.status(500).json({
      message: "Нэвтрэх үед алдаа гарлаа.",
    });
  }
};
