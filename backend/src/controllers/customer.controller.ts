import { RequestHandler } from "express";
import { customerModel } from "../models/customer.schema";

export const createCustomer: RequestHandler = async (req, res) => {
  try {
    const { lastName, FirstName, Phone, email, address } = req.body;
    console.log(req.body);

    const customer = await customerModel.create({
      lastName,
      FirstName,
      Phone,
      email,
      address,
    });

    return res.status(201).json({
      message: "amjilttai uuslee",
      customer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "serveriin aldaa",
    });
  }
};

export const getCustomers: RequestHandler = async (req, res) => {
  try {
    const customers = await customerModel.find({}); //  categoryModelooos bugdiig n awya

    return res.status(200).json({
      customers,
      message: "bollo",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server aldaa",
    });
  }
};

export const getCustomer: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await customerModel.findById(id);

    return res.status(200).json({
      customer,
      message: "amjilttai bolloo",
    });
  } catch (error) {
    return res.status(500).json({
      message: "serveriin aldaa",
    });
  }
};

export const deleteCustomer: RequestHandler = async (req, res) => {
  try {
    const deleteCustomer = await customerModel.findByIdAndDelete(req.params.id);
    if (!deleteCustomer) {
      return res.status(404).json({
        message: "customer oldhgui bn",
      });
    }
    return res.status(200).json({
      customer: deleteCustomer,
      message: "customer ustlaa",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "aldaa",
    });
  }
};
