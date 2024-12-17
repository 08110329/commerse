import { RequestHandler } from "express";
import { orderModel } from "../models/order.schema";

type Products = {
productId:string,
quantity:number,
size:string
}

export const createOrder: RequestHandler = async (req, res) => {
  try {
  
    const newOrders = orderModel.create({
      ...req.body
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
  } catch (error) {}
};
