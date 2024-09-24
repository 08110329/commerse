import mongoose from 'mongoose';
import { adminModel } from './admin.schema';
const {Schema, model} = mongoose;

const usersSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    admin:{
        type:String,Schema,
        ref:adminModel,
        required:true,
    },
    avatar:{
        type:String,
        required:true,
    }
})
export const usersModel = model("usersModel", usersSchema)