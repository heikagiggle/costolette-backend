import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/category.js";
import cors from "cors";
// import { swaggerDocs } from "./swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);

// swaggerDocs(app);

app.listen(PORT, () => {
  console.log("server running succesfully");
});
