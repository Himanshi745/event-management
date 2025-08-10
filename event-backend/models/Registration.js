// models/Registration.js
import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  venue: { type: String, required: true },
  place: { type: String, required: true },
  date: { type: Date, required: true },
  peopleCount: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  additionalInfo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Registration", registrationSchema);
