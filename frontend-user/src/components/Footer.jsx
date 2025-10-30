import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope } from "react-icons/fa";


import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Quote */}
        <div className="footer-section logo-section">
          <div className="logos">
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
          </div>
          <p className="quote">
            
          </p>
        </div>

        {/* Links */}
        <div className="footer-section link-section">
          <h4>සබැඳිය</h4>
          <ul>
            <li><a href="/">මුල්පිටුව</a></li>
            <li><a href="about">අප ගැන</a></li>
            <li><a href="contact">අපව අමතන්න</a></li>
            <li><a href="branches">ප්‍රාදේශීය ලේකම් කාර්යාල</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact-section">
  <h4>අපව අමතන්න</h4>
  <p><FaMapMarkerAlt className="icon" /> 
    01 වන මහල, බස්නාහිර පළාත් සභාව,<br />
    අංක 204,<br />
    ඩෙන්සිල් කොබ්බෑකඩුව මාවත, බත්තරමුල්ල.
  </p>
  <p><FaPhone className="icon" /> +94 11 2 092722</p>
  <p><FaFax className="icon" /> +94 11 2 092725</p>
  <p><FaEnvelope className="icon" /> info@wpland.gov.lk</p>
</div>


        {/* Map */}
        <div className="footer-section map-section">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31687.256163468493!2d79.89152133464809!3d6.901722284589309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25905b89e847d%3A0xfaca70c53e253065!2z4La04LeF4LeP4Lat4LeKIOC2ieC2qeC2uOC3iiDgtprgt5zgtrjgt4Pgt4_gtrvgt5Lgt4Pgt4og4Lav4LeZ4La04LeP4La74LeK4Lat4La44Lea4Lax4LeK4Lat4LeU4LeAICjgtrbgt4Pgt4rgtrHgt4_gt4Tgt5Lgtrsg4La04LeF4LeP4LatKSAtIFByb3ZpbmNpYWwgTGFuZCBDb21taXNzaW9uZXIncyBEZXBhcnRtZW50IChXRVNURVJOIFBST1ZJTkNFKQ!5e0!3m2!1sen!2slk!4v1750279540485!5m2!1sen!2slk"
    width="100%"
    height="180"
    style={{ border: 0, borderRadius: '6px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>
    </footer>
  );
};

export default Footer;
