import React, { useState, useEffect } from 'react';
import clientData from '../Clients_Data';
// import './ClientSlider.css';



const ClientSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(clientData)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const startAutoPlay = () => {
    return setInterval(() => {
      nextSlide();
    }, 8000); // Adjust the interval duration as needed (e.g., 3000 milliseconds for 3 seconds)
  };

  useEffect(() => {
    const intervalId = startAutoPlay();
    setTestimonials(clientData)

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="client-slider-container bg-ligh container d-flex justify-content-center flex-column gap-2 align-items-center p-3">
      <div className="client-slider-content bg-succes p-2 col-11 col-md-9 text-center d-flex flex-column justify-content-around align-items-center">
      
        <p className="client-quote">{testimonials[currentIndex].quote}</p>

        <section>
          <p className="client-author text-uppercase m-1">~ {testimonials[currentIndex].author}</p>
          <p className="client-role text-uppercase m-0 p-0 bg-dange">{testimonials[currentIndex].role}</p>

        </section>

        <div className="controls container p-0 m-0">
        <button className="arrow-button p-0" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7e7e7eea" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        </button>
        <button className="arrow-button p-0" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7e7e7eea" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </button>
      </div>
      </div>
      
      <br />
      <div className="dot-navigation">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
    </div>
  );
};

export default ClientSlider;
