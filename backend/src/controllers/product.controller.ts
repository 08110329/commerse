import { RequestHandler } from "express";
import { productModel } from "../models/product.schema";

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const {
      title,
      price,
      image,
      description,
      size,
      color,
      tshirheg,
      productCode,
      torolId,
    } = req.body;

    await productModel.create({
      title,
      price,
      image,
      description,
      size,
      color,
      tshirheg,
      productCode,
      torolId,
    });
    return res.status(201).json({
      message: "product uuslee",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "aldaa",
    });
  }
};

export const getProducts: RequestHandler = async (req, res) => {
  try {
    const products = await productModel.find();

    return res.status(200).json({
      products,
      message: "amjilttai bolloo",
    });
  } catch (error) {
    return res.status(500).json({
      message: "serveriin aldaa",
    });
  }
};

export const getProduct: RequestHandler = async (req, res) => {
  console.log(req.params.id);
  try {
    const products = await productModel.findById(req.params.id);

    return res.status(200).json({
      products,
      message: "amjilttai bolloo",
    });
  } catch (error) {
    return res.status(500).json({
      message: "serveriin aldaa",
    });
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({
        message: "product oldsngui",
      });
    }
    return res.status(200).json({
      product: deleteProduct,
      message: "product ustlaa",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "aldlaa",
    });
  }
};
