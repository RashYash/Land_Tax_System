import React from "react";
import { useNavigate } from "react-router-dom";
import TaxCard from "../components/TaxCard";
import agriImage from "../assets/agri.jpg";
import residentialImage from "../assets/residential.jpg";
import commercialImage from "../assets/commercial.jpg";

import "./TaxCategoryPage.css";

const TaxCategoryPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (type, path) => {
    // Pass the selected land type via state
    navigate(path, { state: { landType: type } });
  };

  return (
    <div className="tax-category-page">
      <div className="tax-header">
        <h1>
          ඔබේ අනාගතය සැලසුම් කර ගැනීම <br />අදම ආරම්භ කරන්න.
        </h1>
        <p>
          අපගේ බදු පුරෝකථන සේවාව ඔස්සේ, ඔබට ඔබේ දේපළ සම්බන්ධ අනාගත වගකීම් 
          පිළිබඳ පැහැදිලි දෘශ්‍යකරණයක් ලබා ගත හැක. මෙය ඔබට මූල්‍ය තීරණයන් 
          සිදු කිරීමට, ආරක්ෂිත සැලසුම් සකස් කිරීමට, සහ අනාගත අවස්ථාවන්ට සූදානම් වීමට 
          උපකාරී වේ. කෘෂිකාර්මික, නේවාසික, හෝ වාණිජ දේපළ වුවද, ඔබට පැහැදිලිව සහ 
          විශ්වාසයෙන් ක්‍රියා කිරීමට අවශ්‍ය තොරතුරු ලබාදෙන මෙම සේවාව ඔබේ මූල්‍ය ආරක්ෂාව 
          සහ සුවපහසුභාවය තහවුරු කරයි.
        </p>
      </div>

      <div className="tax-cards-container">
        <TaxCard
          title="කෘෂිකාර්මික භූමි"
          image={agriImage}
          onClick={() => handleCardClick("කෘෂිකාර්මික", "/agricultural-form")}
        />
        <TaxCard
          title="නේවාසික භූමි"
          image={residentialImage}
          onClick={() => handleCardClick("නේවාසික", "/residential-form")}
        />
        <TaxCard
          title="වාණිජ භූමි"
          image={commercialImage}
          onClick={() => handleCardClick("වාණිජ", "/commercial-form")}
        />
      </div>
    </div>
  );
};

export default TaxCategoryPage;




