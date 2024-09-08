import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";
import basicRoutes from "./routes/basicRoutes";
import testRoutes from "./routes/testRoutes";
import responseCodeRoutes from "./routes/responseCodeRoutes";
import crudRoutes from "./routes/crudRoutes";
import forumRoutes from "./routes/forumRoutes";

// Below code is for rate limiter

// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//   message: "Too many requests from this IP, please try again after 15 minutes",
// });

// Below code is for cors related settings

// const corsOptions = {
//   origin: 'https://yourfrontenddomain.com', // this should be the URL of your frontend
//   credentials: true, // to support cookies
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'] // allowed headers
// };

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// app.use(apiLimiter);
app.use(bodyParser.json());

app.use("/basic", basicRoutes);
app.use("/responseCode", responseCodeRoutes);
app.use("/test", testRoutes);
app.use("/crud", crudRoutes);
app.use("/forum", forumRoutes);

// Below code is for basic api

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Below code is for connecting to MongoDB and then starting the server

// mongoose
//   .connect(process.env.MONGO_URI!, {
//     serverSelectionTimeoutMS: 5000,
//   })
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));
