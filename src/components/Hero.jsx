import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/hero.css';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <img src="/spo.jpg" alt="Stadium" className="hero-image" />
      <div className="quote">
        <b>“The game isn’t just on the field; it’s in the hearts of fans and the spirit of players.”</b>
      </div>
      <div className="button-container">
        <button className="book-ticket-btn" onClick={() => navigate('/book')}>
          Book a Ticket
        </button>
      </div>
    </div>
  );
}

export default Hero;
