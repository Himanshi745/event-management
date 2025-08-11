import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminAddEvent.css";
import { useNavigate } from "react-router-dom";


const AdminAddEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    date: "",
    venue: "",
    images: "",
  });

  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const { data } = await axios.get("https://event-management-miu9.onrender.com/api/events");
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const imagesArray = formData.images.split(",").map((img) => img.trim());
    
     if (formData._id) {
      await axios.put(`https://event-management-miu9.onrender.com/api/events/${formData._id}`, {
        ...formData,
        images: imagesArray,
      });
      alert("Event updated successfully!");
    }
    else{
      await axios.post("https://event-management-miu9.onrender.com/api/events", {
      ...formData,
      images: imagesArray,
      
    });
    alert("Event added successfully!");
    }
    
    
    // Reset form
    setFormData({
      name: "",
      category: "",
      description: "",
      date: "",
      venue: "",
      images: "",
      _id: undefined
    });

    // Redirect to /events page
    navigate("/events");
  } catch (error) {
    console.error("Error adding event:", error);
    alert("Failed to add event.");
  }
};


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await axios.delete(`https://event-management-miu9.onrender.com/api/events/${id}`);
      alert("Event deleted successfully!");
      fetchEvents(); // refresh list
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event.");
    }
  };

  return (
    <div className="admin-container">
      <h1>Add New Event</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category (Corporate/Social/Education/Cultural)"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
          onChange={handleChange}
        />
        <textarea
          name="images"
          placeholder="Enter image URLs separated by commas"
          rows="3"
          value={formData.images}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Event</button>
      </form>

      <h2 style={{ marginTop: "40px" }}>Existing Events</h2>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event._id} className="event-item">
            <span>{event.name}</span>
            <div className="delete">
              <button
                className="delete-btn"
                onClick={() => handleDelete(event._id)}
              >
                Delete
              </button>
            </div>
            
            <button
              className="edit-btn"
              onClick={() => setFormData({
                ...event,
                images: event.images.join(", ")
              })}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAddEvent;
