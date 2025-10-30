import React from 'react';
import './Navbar.css';
import flagImg from '../assets/flag.png';
import logoImg from '../assets/logo.jpg';
import deptBanner from '../assets/dept-banner.png';


const Navbar = () => {
  return (
    <>
      {/* Top Blue Bar */}
      <div className="top-bar">
        <img src={flagImg} alt="Sri Lanka Flag" className="flag-icon" />
        <span>ශ්‍රී ලංකාව</span>
      </div>

      {/* Middle Bar for Department Name */}
      <div className="middle-bar">
  <img src={deptBanner} alt="Department Banner" className="dept-banner-img" />
</div>


      {/* Main Navbar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="logo">
            <img src={logoImg} alt="LTCD Logo" className="logo-img" />
          </div>

          <div className="nav-links">
            <a href="/">මුල්පිටුව</a>
            <a href="/about">අප ගැන</a>
            <a href="/contact">අපව අමතන්න</a>
            <a href="/branches">ප්‍රාදේශීය ලේකම් කාර්යාල</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


