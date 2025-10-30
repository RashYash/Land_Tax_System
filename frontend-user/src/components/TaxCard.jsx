import React from "react";
import "./TaxCard.css";

const TaxCard = ({ title, image, onClick }) => {
  return (
    <div
      className="tax-card"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default TaxCard;



