// routes/registrationRoutes.js
import express from "express";
import Registration from "../models/Registration.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.status(201).json({ message: "Event registered successfully", registration });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
