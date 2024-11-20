import { RequestHandler } from "express";
import { orderModel } from "../models/order.schema";

export const createOrder: RequestHandler = async (req, res) => {
  try {
    const {
      productCode,
      user,
      product,
      payment,
      status,
      phone,
      desc,
      address,
      orderTime,
      orderDetails,
    } = req.body;
    const newOrders = orderModel.create({
      productCode,
      user,
      product,
      payment,
      status,
      phone,
      desc,
      address,
      orderTime,
      orderDetails,
    });
    return res.status(201).json({
      message: "product uuslee",
      newOrders,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "aldaa",
    });
  }
};

export const getOrder: RequestHandler = async (req, res) => {
  try {
  } catch (error) {}
};
