import mongoose from "mongoose";

const connectDb = async () => {
     try {
       await mongoose.connect(process.env.MONGO_DB_URL);
       console.log("connected to MongoDb");
    } catch (error) {
       console.log("Error connecting to MongoDb",error.message); 
    }
   
};


export default connectDb;