import { model, Schema } from "mongoose"


const adminSchema = new Schema({
name:{
    type:String,
    required: true,
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