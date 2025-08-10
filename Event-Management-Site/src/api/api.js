import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // backend base URL
});

// Example API calls:
export const fetchEvents = () => API.get("/api/events");
export const registerForEvent = (formData) => API.post("/api/registrations", formData);

export default API;
