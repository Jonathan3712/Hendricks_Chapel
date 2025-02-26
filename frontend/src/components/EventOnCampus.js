import React, { useState, useEffect } from "react";
import "./Style.css"; // Import the CSS file for styling
import slide1 from './images/Image3.jpg';
import slide2 from './images/Image1.jpg';
import slide3 from './images/Image2.jpg';

const images = [
  slide1, slide2, slide3
];
// const images = [
//     "./images/photo.png", 
//     "./images/photo1.jpg", 
//     "./images/photo.jpg"
//   ];

const EventOnCampus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
    </div>
  );
};

export default EventOnCampus;
