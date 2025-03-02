import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css"; // Make sure this path is correct

const events = [
  { id: 1, title: "Friendship Luncheon", description: "Every Thursday from 12:00pm to 01:00pm (Indian Food)" },
  { id: 2, title: "Worship and Bible Study", description: "Every Wednesday from 07:00pm to 08:30pm (Snacks - Pizza)" },
  { id: 3, title: "Sunday Church Service", description: "International Friendship Evangelical" }
];

const EventSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  return (
    <div className="event-slider-container">
      <Button className="slider-btn left-btn" onClick={prevSlide}>❮</Button>
      <div className="event-content">
        <h3>{events[currentIndex].title}</h3>
        <p>{events[currentIndex].description}</p>
      </div>
      <Button className="slider-btn right-btn" onClick={nextSlide}>❯</Button>
    </div>
  );
};

export default EventSlider;
