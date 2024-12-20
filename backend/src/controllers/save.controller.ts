import { RequestHandler } from "express";
import { saveModel } from "../models/save.schema";

export const createSave: RequestHandler = async (req, res) => {
  try {
    const { user, products } = req.body;

    const newSave = new saveModel({
      user,
      products,
    });
    const save = await newSave.save();
    return res.status(200).json({
      save,
      massage: "amjilttai hadgallaa",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server aldaatai",
    });
  }
};

export const getSave: RequestHandler = async (req, res) => {
  try {
    const save = await saveModel
      .find({
        user: req.query.user,
      })
      .populate("products");

    return res.status(200).json({
      save,
      message: "amjilttai uuslee",
    });
  } catch (error) {
    return res.status(500).json({
      message: "servert aldaa bn",
    });
  }
};

export const deleteSave: RequestHandler = async (req, res) => {
  try {
    const deleteSave = await saveModel.findByIdAndDelete(req.params.id);

    if (!deleteSave) {
      return res.status(404).json({
        message: " oldsongui",
      });
    }
    return res.status(200).json({
      save: deleteSave,
      message: "ustlaa",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "aldaa",
    });
  }
};
