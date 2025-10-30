import React from "react";
import { Link } from "react-router-dom"; 
import "./TaxPredictionCTA.css";
import taxImage from "../assets/tax-image.png";

const TaxPredictionCTA = () => {
  return (
    <div className="tax-cta-section">
      <div className="tax-cta-content">
        <img src={taxImage} alt="Tax Planning" className="tax-image" />
        <div className="tax-text">
          <h2 className="tax-title">"බදු පුරෝකථනය"</h2>
          <p>
            <span>විශ්වාසයෙන් යුතුව ඉදිරියට සැලසුම් කරන්න!</span><br/><br/>
            අපගේ බදු පුරෝකථන පද්ධතිය හරහා, ඔබට ඔබේ අනාගත බදු වගකීම් පිළිබඳ පැහැදිලි පුරෝකථනයක් ලබා ගැනීම හැකි වේ. 
            ඔබගේ වත්මන් තොරතුරු ඇතුළත් කිරීමෙන් පසු, පද්ධතිය ඔබට ගෙවිය යුතු බදු මුදල පිළිබඳ ගණනයක් ඉතා ඉක්මනින් සහ නිවැරදිව ලබා දේ. 
            මෙය ඔබගේ මූල්‍ය සැලසුම් සරල කිරීම සඳහා නිර්මාණය කර ඇති අතර, බදු ගෙවීම් සම්බන්ධයෙන් සිදුවිය හැකි අපහසුතා වලක්වා ගැනීමටත් උපකාරී වේ. 
            දැන්ම ඔබේ තොරතුරු ඇතුළත් කර, විශ්වාසය සහ ආරක්ෂාව සමඟ ඔබේ අනාගතය සැලසුම් කරන්න!
          </p>

          {/* Redirects user to TaxCategoryPage */}
          <Link to="/taxprediction" className="predict-btn">
            පුරෝකථනය කරන්න
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaxPredictionCTA;


