import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEvents } from '../api/api';
import '../App.css';
import './Events.css';

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const { data } = await fetchEvents();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    getEvents();
  }, []);

  return (
    <div className="event-grid">
      <div className="glimpse">
        <h2>Glimpse of Events Organized</h2>
      </div>
      {events.map(event => (
        <div key={event._id} className="event-category">
          <h2 
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => navigate(`/events/${event._id}`)}
          >
            {event.name}
          </h2>
          <div className="image-row">
            {event.images && event.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${event.name} ${index + 1}`} 
                loading="lazy"
                onClick={() => navigate(`/events/${event._id}`)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
