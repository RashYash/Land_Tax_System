// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Homepage Sections
import HeroSection from './components/HeroSection';
import VisionMission from './components/VisionMission';
import NewsSection from './components/NewsSection';
import TaxSection from './components/TaxSection';
import ServicesSection from './components/ServicesSection';
import TaxPredictionCTA from './components/TaxPredictionCTA';
import TaxPredictionDetails from './components/TaxPredictionDetails';




// Pages
import About from './pages/about';
import Contact from './pages/Contact';
import Branches from './pages/Branches';
import Login from './pages/Login';

import TaxAmount from './pages/TaxAmount';

import TaxCategoryPage from "./pages/TaxCategoryPage";
import AgriculturalForm from "./pages/AgriculturalForm";
import ResidentialForm from "./pages/ResidentialForm";
import CommercialForm from "./pages/CommercialForm";





// Combined Homepage Component
function Home() {
  return (
    <>
      <HeroSection />
      <VisionMission />
      <NewsSection />
      <TaxSection />
      <ServicesSection />
      <TaxPredictionCTA />
      <TaxPredictionDetails />
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/login" element={<Login />} />
        <Route path="/taxamount" element={<TaxAmount />} />
        <Route path="/" element={<TaxPredictionCTA />} />
        
        <Route path="/taxprediction" element={<TaxCategoryPage />} />


        <Route path="/" element={<TaxCategoryPage />} />
        <Route path="/agricultural-form" element={<AgriculturalForm />} />
        <Route path="/residential-form" element={<ResidentialForm />} />
        <Route path="/commercial-form" element={<CommercialForm />} />
       

       
      </Routes>

      <Footer />
    </div>
  );
}

export default App;





