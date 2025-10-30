import React from "react";
import "./TaxPredictionDetails.css";
import team1 from "../assets/team.jpeg";
import team2 from "../assets/team.jpeg";
import team3 from "../assets/team.jpeg";
import building1 from "../assets/building1.jpg";
import building2 from "../assets/building2.jpg";
import building3 from "../assets/building3.jpg";
import building4 from "../assets/building4.jpg";

const TaxPredictionDetails = () => {
  return (
    <div className="tax-detail-section">
      <div className="tax-detail-left">
        <h2>"බදු පුරෝකථනය"</h2>
        <p>
          අපගේ බදු පුරෝකථන පද්ධතිය හරහා, ඔබට ඔබේ අනාගත බදු වගකීම් පිළිබඳ පැහැදිලි පුරෝකථනයක් ලබා ගැනීම හැකි වේ. ඔබගේ වත්මන් තොරතුරු ඇතුළත් කිරීමෙන් පසු, පද්ධතිය ඔබට ගෙවිය යුතු බදු මුදල පිළිබඳ ගණනයක් ඉතා ඉක්මනින් සහ නිවැරදිව ලබා දේ. මෙය ඔබගේ මූල්‍ය සැලසුම් සරල කිරීම සඳහා නිර්මාණය කර ඇති අතර, බදු ගෙවීම් සම්බන්ධයෙන් සිදුවිය හැකි අපහසුතා වලක්වා ගැනීමටත් උපකාරී වේ. දැන්ම ඔබේ තොරතුරු ඇතුළත් කර, විශ්වාසය සහ ආරක්ෂාව සමඟ ඔබේ අනාගතය සැලසුම් කරන්න!
        </p>
        
        <div className="team-members">
          <img src={team1} alt="Team Member 1" />
          <img src={team2} alt="Team Member 2" />
          <img src={team3} alt="Team Member 3" />
        </div>
      </div>
      <div className="tax-detail-right">
        <div className="image-grid">
          <img src={building1} alt="Building 1" />
          <img src={building2} alt="Building 2" />
          <img src={building3} alt="Building 3" />
          <img src={building4} alt="Building 4" />
        </div>
      </div>
    </div>
  );
};

export default TaxPredictionDetails;
