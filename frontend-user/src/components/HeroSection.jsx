import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './HeroSection.css';
import heroVideo from '../assets/herovideo1.mp4';

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          {/* Left side */}
          <div className="hero-left">
            <h1>
              <span>පළාත් ඉඩම් කොමසාරිස් </span><br />
              <span>දෙපාර්තමේන්තුව</span>
            </h1>
            <p>(බස්නාහිර පළාත) - ශ්‍රී ලංකාව</p>

            {/* ✅ Updated Button */}
            <button className="about-btn" onClick={() => navigate('/about')}>
              අප ගැන
            </button>
          </div>

          {/* Right side buttons */}
          <div className="hero-buttons">
            <button>ඉඩම් ලියාපදිංචි කිරීම</button>
            <button>ඉඩම් බදු ගණනය කිරීම</button>
            <button>ඉඩම් බදු ගණනය කිරීම</button>
            <button>ඉඩම් බදු ගණනය කිරීම</button>
            <button>ඉඩම් බදු ගණනය කිරීම</button>
          </div>

          {/* Bottom stats */}
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-header">
                <h2>+1000</h2>
                <h4>ඉඩම්</h4>
              </div>
              <p>Lorem ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div className="stat-box">
              <div className="stat-header">
                <h2>+40</h2>
                <h4>ප්‍රාදේශීය ලේකම් කාර්යාල</h4>
              </div>
              <p>Lorem ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div className="stat-box">
              <div className="stat-header">
                <h2>+40000</h2>
                <h4>බදු ගෙවන්නන්</h4>
              </div>
              <p>Lorem ipsum is simply dummy text of the printing industry.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;




