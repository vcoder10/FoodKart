// React component (Carousel.jsx)

import React, { useState } from 'react';
import './Carousel.css'; // Import the CSS file

const Carousel = () => {
  const slides = [
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/o6ahtv5y0sdtdo1b7gqt',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bp8qh2iqrcct3timzy9a',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dqryaxhlba4okzyzcx5z',
    //'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/o6ahtv5y0sdtdo1b7gqt',
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f2f4cf1bb6e27157a2b240694ba95c9d',
    // Add more slide URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div id="myCarousel" className="carousel" data-ride="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${currentIndex === index ? 'active' : ''}`}>
              <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="carousel-control-next" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;


