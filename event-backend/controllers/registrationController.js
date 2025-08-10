import Registration from "../models/Registration.js";

export const registerForEvent = async (req, res) => {
  try {
    const registration = new Registration(req.body);
    const saved = await registration.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getRegistrations = async (req, res) => {
  try {
    const regs = await Registration.find().populate("eventId");
    res.json(regs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
