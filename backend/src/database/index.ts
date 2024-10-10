import { connect } from "mongoose";
//mongodb holboh function
export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://monhitgelsh:08110329@cluster0.iml6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("database holbogdloo");
};
