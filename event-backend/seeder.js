import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js"; 

import Event from "./models/Event.js";

dotenv.config();
await connectDB();

// Sample events data
const events = [
  {
    name: "Corporate Events",
    category: "Corporate",
    description: "High-level corporate conferences and meetings.",
    images: [
      "/assets/Conference1.jpg",
      "/assets/Conference2.jpg",
      "/assets/Conference3.jpg",
      "/assets/Conference4.jpg",
      "/assets/Conference5.jpg",
      "/assets/Conference6.jpg",
      "/assets/Conference7.jpg",
      "/assets/Conference8.jpg",
    ],
    date: new Date(),
    venue: "City Convention Center",
  },
  {
    name: "Social Events",
    category: "Social",
    description: "Weddings, birthdays, private parties.",
    images: [
      "/assets/Wedding1.jpg",
      "/assets/Birthday1.jpg",
      "/assets/Birthday2.jpg",
      "/assets/Wedding2.jpg",
      "/assets/Birthday3.jpg",
      "/assets/Birthday4.jpg",
      "/assets/Birthday5.jpg",
    ],
    date: new Date(),
    venue: "Luxury Banquet Hall",
  },
  {
    name: "Cultural Events",
    category: "Cultural",
    description: " Festivals, Celebrations, traditional performances, Exhibitions.",
    images: [
      "/assets/Festival1.jpg",
      "/assets/Festival2.jpg",
      "/assets/Festival3.jpg",
      "/assets/Festival4.jpg",
      "/assets/Festival5.jpg",
      "/assets/Festival6.jpg",
      "/assets/Festival7.jpg",
      "/assets/Festival8.jpg",
    ],
    date: new Date(),
    venue: "City Auditorium and Open Grounds",
  },
  {
    name: "Entertainment Events",
    category: "Entertainment",
    description: " Concerts, Marathons, Award Nights.",
    images: [
      "/assets/Marathon1.jpg",
      "/assets/Concert2.jpg",
      "/assets/Concert3.jpg",
      "/assets/Concert4.jpg",
      "/assets/Marathon3.jpg",
      "/assets/Concert1.jpg",
      "/assets/Concert5.jpg",
      "/assets/Marathon2.jpg",
    ],
    date: new Date(),
    venue: "Open Air Arena",
  },
  {
    name: "Educational Events",
    category: "Educational",
    description: "Seminars, Workshops, Career Fairs, conferences, and exhibitions focused on learning.",
    images: [
      "/assets/Education1.png",
      "/assets/Education2.jpg",
      "/assets/Education3.jpg",
      "/assets/Education4.jpg",
      "/assets/Education5.jpg",
      "/assets/Education6.jpg",
      "/assets/Education7.jpg",
      "/assets/Education8.jpg",
    ],
    date: new Date(),
    venue: "National Convention Center and Seminar Halls",
  },
];

const importData = async () => {
  try {
    await connectDB();
    await Event.deleteMany();
    await Event.insertMany(events);
    console.log("Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

await importData();

