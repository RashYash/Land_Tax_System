// src/components/TaxAmount.jsx
import React from "react";
import { useLocation } from "react-router-dom"; // ✅ To access passed data
import './TaxAmount.css';

export default function TaxAmount() {
  const location = useLocation();
  const { landId, info } = location.state || {};

  return (
    <div className="tax-page">
      <h1 className="tax-title">
        PROVINCIAL LAND COMMISSIONAL DEPARTMENT
        <br />
        <span className="tax-subtitle">(WESTERN PROVINCE) SRI LANKA</span>
      </h1>

      <h2 className="tax-heading">Your Tax Amount</h2>

      <div className="tax-box">
        {landId ? (
          <p className="tax-info">You selected <strong>Land {landId}</strong>: {info}</p>
        ) : (
          <p className="tax-info">No land selected.</p>
        )}
      </div>
    </div>
  );
}
