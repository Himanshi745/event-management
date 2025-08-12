import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";
import eventRoutes from "./routes/eventRoutes.js"; 


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/events", eventRoutes); 
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(express.static(path.join(__dirname, "public")));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/registration", registrationRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));
