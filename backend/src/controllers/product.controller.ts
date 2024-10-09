import { RequestHandler } from "express";
import { productModel } from "../models/product.schema";

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const {
      title,
      description,
      productCode,
      price,
      image,
      size,
      color,
      tshirheg,
      torolId,
    } = req.body;
    console.log();

    const newProduct = await productModel.create({
      title,
      description,
      price,
      image,
      size,
      color,
      tshirheg,
      productCode,
      torolId,
    });
    return res.status(201).json({
      message: "product uuslee",
      newProduct,
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
    const products = await productModel.find({});

    return res.status(200).json({
      message: "amjilttai bolloo",
      products,
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
    const products = await productModel.find({});

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
