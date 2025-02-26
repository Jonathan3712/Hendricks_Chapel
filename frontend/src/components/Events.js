
import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))
      ) : (
        <p>No events found</p>
      )}
    </div>
  );
}

export default Events;
