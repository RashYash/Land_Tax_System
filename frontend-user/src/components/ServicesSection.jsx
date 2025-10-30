import React from 'react';
import './ServicesSection.css';
import { motion } from 'framer-motion';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';

const services = [
  { image: img1, title: 'රජයේ ඉඩම් බැහැර කිරීම සදහා කච්චේරි පැවැත්වීමට අනුමැතිය ලබා දීම', link: '#' },
  { image: img2, title: 'රජයේ ඉඩම්වල පාංශු සංරක්ෂණ/ජල පෝෂක ප්‍රදේශ සංරක්ෂණ ක්‍රමවේද ස්ථාපනය', link: '#' },
  { image: img3, title: 'රජයේ ඉඩම් සංවර්ධනය', link: '#' },
  { image: img4, title: 'රජයේ ඉඩම්වල පදිංචි ජනපදවාසීන්ගේ යටිතල පහසුකම් සංවර්ධනය හා ජීවන තත්ත්වය ඉහල නැංවීමේ සංවර්ධන ව්‍යාපෘති ක්‍රියාත්මක කිරීම', link: '#' },
  { image: img5, title: 'රජයේ ඉඩම් අධීක්ෂණය හා පසු කටයුතු', link: '#' },
  { image: img6, title: 'මානව සම්පත් සංවර්ධනය', link: '#' },
  { image: img7, title: 'බදු ආදායම් ලබාගැනීම හා ප්‍රවර්ධනය කිරීම', link: '#' },
];

const ServicesSection = () => {
  return (
    <motion.div
      className="services-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <a href={service.link} className="service-link">
              <motion.img
                src={service.image}
                alt="Service"
                className="service-image"
                whileHover={{ rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <h3 className="service-heading">{service.title}</h3>
            </a>
            <a href={service.link} className="see-more-button">See More</a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesSection;

