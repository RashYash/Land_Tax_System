import React from 'react';
import './Contact.css';  // Import the separate CSS file

export default function Contact() {
  return (
    <div className="contact-page bg-white min-h-screen">
      <main className="contact-main">
        <h2 className="contact-title">ඔබගේ පණිවිඩය යොමු කරන්න
</h2>
        <p className="contact-subtitle">
          Land ownership verification and document issuance
        </p>

        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form">
            <input
              type="email"
              placeholder="Your Email"
              className="contact-input"
            />
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
            />
            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
            />
            <textarea
              placeholder="Message"
              className="contact-textarea"
            />
            <button type="submit" className="contact-button">
              SEND
            </button>
          </form>

          {/* Contact Info & Map */}
          <div className="contact-info">
            <div className="info-item">
              <span className="icon-wrapper">
                {/* Location icon SVG */}
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <span className="info-text">
                පළාත් ඉඩම් කොමසාරිස් දෙපාර්තමේන්තුව (බස්නාහිර පළාත)<br></br>

                01 වන මහල, බස්නාහිර පළාත් සභාව,<br></br>

                අංක 204,<br></br>

                ඩෙන්සිල් කොබ්බෑකඩුව මාවත, බත්තරමුල්ල.<br></br>

              </span>
            </div>

            <div className="info-item">
              <span className="icon-wrapper">
                {/* Phone icon SVG */}
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92V19a2 2 0 0 1-2 2A18 18 0 0 1 4 5a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13.81.26 1.61.41 2.41a2 2 0 0 1-1.11 2.18l-.27.13a16 16 0 0 0 6.29 6.29l.13-.27a2 2 0 0 1 2.18-1.11c.8.15 1.6.28 2.41.41A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="info-text">+94 11 2 092722</span>

              <span className="icon-wrapper">
                {/* Fax icon SVG */}
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 2H8a2 2 0 0 0-2 2v4h12V4a2 2 0 0 0-2-2z" />
                  <path d="M20 8H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v-4h8v4h4a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z" />
                  <path d="M16 13h.01" />
                </svg>
              </span>
              <span className="info-text">+94 11 2 092846</span>

              <span className="icon-wrapper">
                {/* Email icon SVG */}
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span className="info-text">plcwesternprovince@gmail.com</span>
</div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31687.256163468493!2d79.89152133464809!3d6.901722284589309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25905b89e847d%3A0xfaca70c53e253065!2z4La04LeF4LeP4Lat4LeKIOC2ieC2qeC2uOC3iiDgtprgt5zgtrjgt4Pgt4_gtrvgt5Lgt4Pgt4og4Lav4LeZ4La04LeP4La74LeK4Lat4La44Lea4Lax4LeK4Lat4LeU4LeAICjgtrbgt4Pgt4rgtrHgt4_gt4Tgt5Lgtrsg4La04LeF4LeP4LatKSAtIFByb3ZpbmNpYWwgTGFuZCBDb21taXNzaW9uZXIncyBEZXBhcnRtZW50IChXRVNURVJOIFBST1ZJTkNFKQ!5e0!3m2!1sen!2slk!4v1750279540485!5m2!1sen!2slk"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/ZydX61nrdCqTkfjR8"
                target="_blank"
                rel="noopener noreferrer"
                className="google-map-link"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
