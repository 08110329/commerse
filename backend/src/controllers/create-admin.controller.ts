import {RequestHandler} from "express";
import { adminModel } from "../models/admin.schema";
export const createAdminController: RequestHandler = async (req, res) => {
    try{
 const {name,email,phone, password} =req.body;

 await adminModel.create({
    name,
    email,
    phone,
    password,
   createdAt: new Date(),
   updatedAt:new Date(),
 });

 return res.status(201).json({
    message:"belen bolloo",
 });
    } catch (error) {
        return res.status(500).json({
            message:"aldaatai bolloo"
        })
    };
};
