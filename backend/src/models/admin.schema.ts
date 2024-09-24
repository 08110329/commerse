import mongoose from 'mongoose'
const { model, Schema } = mongoose;

const adminSchema = new Schema({
name:{
    type:String,
    required: true,
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
createAt: {
    type: Date,
    required: true,
    default: Date.now,
},
updateAt: {
    type: Date,
    required: true,
    default: Date.now,
},
});

export const adminModel = model("adminModel" , adminSchema)