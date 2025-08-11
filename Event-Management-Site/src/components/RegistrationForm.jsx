import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    venue: "",
    place: "",
    date: "",
    peopleCount: "",
    name: "",
    email: "",
    phone: "",
    additionalInfo: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://event-management-miu9.onrender.com/api/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div style={{ padding: "100px" }}>
      <h1>Register for Event</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="eventName" placeholder="Event Name" onChange={handleChange} required />
        <input type="text" name="venue" placeholder="Venue" onChange={handleChange} required />
        <input type="text" name="place" placeholder="Place" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="number" name="peopleCount" placeholder="No. of People" onChange={handleChange} required />
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <textarea name="additionalInfo" placeholder="Additional Info" onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
