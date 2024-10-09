import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  // shine schema uusgeed  dotr n utguudaa ogood torol bolon uussen hugatsaa bolon update hiisn hugatsaagaa typiig n ogood
  torol: {
    type: String,
    requied: true,
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
export const CategoryModel = model("Category", categorySchema); // export model n paramtrtee category bolon deer byu schemagaas duudad ogno
