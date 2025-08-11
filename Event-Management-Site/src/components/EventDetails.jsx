import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`https://event-management-miu9.onrender.com/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((err) => console.error("Failed to load event", err));
  }, [id]);

  if (!event) return <h2 style={{ paddingTop: "100px" }}>Loading...</h2>;

  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>{event.name}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Address:</strong> {event.address}</p>
      <p>{event.description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {event.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={event.name}
            style={{ width: "250px", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
