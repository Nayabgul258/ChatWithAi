import express from "express";
import dotenv from "dotenv";
import connectDb from "./dataBase/db.js";
import userRoutes from "./routes/userRoute.js";
import chatRoute from "./routes/chatRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());




// Routes
app.use("/api/user", userRoutes);
app.use("/api/chat",chatRoute);

// Connect DB and start server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
