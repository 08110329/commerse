import { RequestHandler } from "express";
import { reviewModel } from "../models/review.schema";

export const createReview: RequestHandler = async (req, res) => {
  try {
    const { userId, productId, comment, rating } = req.body;

    if (!userId || !productId || !comment || !rating) {
      return res.status(400).json({
        message: "bugdiig shaardana",
      });
    }
    const newReview = await reviewModel.create({
      userId,
      productId,
      comment,
      rating,
    });
    return res.status(200).json({
      newReview,
      message: "amjilttai uuusle",
    });
  } catch (error) {
    return res.status(400).json({
      message: "server aldaatai",
    });
  }
};

export const getReview: RequestHandler = async (req, res) => {
  try {
    const reviews = await reviewModel.find();

    return res.status(200).json({
      reviews,
      message: "bolloo",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server aldaa",
    });
  }
};

export const deleteReview: RequestHandler = async (req, res) => {
  try {
    const deleteReview = await reviewModel.findByIdAndDelete(req.params.id);
    if (!deleteReview) {
      return res.status(404).json({
        message: "review oldsngui",
      });
    }
    return res.status(200).json({
      reviews: deleteReview,
      message: "review ustlaa",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "aldaa",
    });
  }
};
