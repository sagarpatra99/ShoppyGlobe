// import express from "express"

// const app = express()

// app.get("/", (req, res) => res.send("Hi, I'm root route"))

// app.get("/products", (req, res) => res.send())

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running at : ${PORT}`);

// })

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config()

const app = express();
app.use(express.json());

console.log("MONGO_URI from .env:", process.env.MONGO_URI);


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB error", err));

// Use product routes
app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
