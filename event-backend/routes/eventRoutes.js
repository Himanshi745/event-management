import express from "express";
import { updateEvent } from "../controllers/eventController.js";
import { getEvents, createEvent } from "../controllers/eventController.js";
import Event from "../models/Event.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);

// Get single event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", updateEvent);

router.delete("/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
