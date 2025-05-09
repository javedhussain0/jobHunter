import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import reviewRoutes from "./routes/review.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT;


app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/V1/reviews", reviewRoutes);
app.get("/", (req, res) => {
  res.json({
      message: "Hello coder!",
    
  });
});


const ConnectDB = () => {
    try {
      mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB", error);
    }
  };
  const StartServer = ()=>{
  app.listen(PORT, () => {
    ConnectDB();
    console.log(`Server is running on port ${PORT}`);
  });
  }
  
  
  StartServer();