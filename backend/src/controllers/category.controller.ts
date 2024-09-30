import { RequestHandler } from "express";
import { CategoryModel } from "../models/category.schema";

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const { torol } = req.body;

    await CategoryModel.create({
      torol,
    });

    return res.status(201).json({
      message: "amjilttai uuslee",
    });
  } catch (error) {
    return res.status(500).json({
      message: "serveriin aldaa",
    });
  }
};

export const getCategory: RequestHandler = async (req, res) => {
  try {
    const torols = await CategoryModel.find(); //  categoryModelooos bugdiig n awya

    return res.status(200).json({
      torols,
      message: "bollo",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server aldaa",
    });
  }
};

export const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const deleteTorol = await CategoryModel.findByIdAndDelete(req.params.id);
    if (!deleteTorol) {
      return res.status(404).json({
        message: "category oldhgui bn",
      });
    }
    return res.status(200).json({
      torol: deleteTorol,
      message: "category ustlaa",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "aldaa",
    });
  }
};
