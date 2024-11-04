import { RequestHandler } from "express";
import { packageModel } from "../models/package.schema";

export const createPackage: RequestHandler = async (req, res) => {
  try {
    const { user, products, image_link, title, price, amount } = req.body;

    const newPackage = await packageModel.create({
      user,
      products,
      image_link,
      title,
      price,
      amount,
    });

    return res.status(200).json({
      newPackage,
      message: "amjilttai uuusle",
    });
  } catch (error) {
    return res.status(400).json({
      message: "server aldaatai",
    });
  }
};

export const getPackage: RequestHandler = async (req, res) => {
  try {
    const packagies = await packageModel.find();

    return res.status(200).json({
      packagies,
      message: "amjilttai duudlaa",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server aldaatai",
    });
  }
};

export const addToPackage: RequestHandler = async (req, res) => {
  try {
    const { user, productId } = req.body;

    const addPackagies = await packageModel.updateOne(
      { user }, // Хэрэглэгчийн ID-ээр хайж байна
      { $addToSet: { products: productId } } // Сагсанд бүтээгдэхүүн нэмэх
    );

    return res.status(200).json({
      addPackagies,
      message: "Бүтээгдэхүүн сагсанд амжилттай нэмэгдлээ.",
    });
  } catch (error) {
    console.error("Сагсанд нэмэхэд алдаа гарлаа:", error);
    return res.status(500).json({ message: "Алдаа гарлаа." });
  }
};

export const deleteFromPackage: RequestHandler = async (req, res) => {
  const { id } = req.params; // URL-ээс ID-г авна

  try {
    const deletedPackage = await packageModel.findOneAndDelete({
      productId: id,
    });

    if (!deletedPackage) {
      return res.status(404).json({
        message: "Бүтээгдэхүүн олдсонгүй.",
      });
    }

    return res.status(200).json({
      deletedPackage,
      message: "Бүтээгдэхүүн амжилттай устгагдлаа.",
    });
  } catch (error) {
    console.error("Устгахад алдаа гарлаа:", error);
    return res.status(500).json({
      message: "Серверийн алдаа.",
    });
  }
};
