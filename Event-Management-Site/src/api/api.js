import axios from "axios";

const API = axios.create({
  baseURL: "https://event-management-miu9.onrender.com/api", // backend base URL
});

// Example API calls:
export const fetchEvents = () => API.get("/api/events");
export const registerForEvent = (formData) => API.post("/api/registrations", formData);

export default API;
