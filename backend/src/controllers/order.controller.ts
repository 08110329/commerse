import { RequestHandler } from "express";
import { orderModel } from "../models/order.schema";

type Products = {
  productId: string;
  quantity: number;
  size: string;
};

export const createOrder: RequestHandler = async (req, res) => {
  try {
    const newOrders = orderModel.create({
      ...req.body,
    });

    return res.status(201).json({
      message: "order uuslee",
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
    const orders = await orderModel.find().populate("user").populate("product.productId");
    return res.status(200).json({
      orders,
      message: "amjilttai zahialga uuslee",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const updateOrder: RequestHandler = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const order = await orderModel.findByIdAndUpdate(
      orderId,
      {
        status: status,
      },
      { new: true }
    );
    console.log(orderId);
    if (!order) {
      return res.status(404).json({ message: "order oldsngui" });
    }
    res.status(200).json({ message: "status amjilttai soligdloo", order });
  } catch (error) {
    console.error("status амжилттай soligdloo", error);
  }
};
