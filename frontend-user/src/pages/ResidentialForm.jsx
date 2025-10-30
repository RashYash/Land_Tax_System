import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { districtZones } from "../data/districtZones";
import "./ResidentialForm.css";

const ResidentialForm = () => {
  const location = useLocation();
  const landType = location.state?.landType || "නේවාසික";

  const [landSize, setLandSize] = useState(50);
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [district, setDistrict] = useState("");
  const [zone, setZone] = useState("");
  const [houseType, setHouseType] = useState("");
  const [landUsage, setLandUsage] = useState("");
  const [utilities, setUtilities] = useState("");
  const [accessibility, setAccessibility] = useState("");

  const [progress, setProgress] = useState(0);
  const [predictionResult, setPredictionResult] = useState(null);

  const houseOptions = ["නිවස", "මහල් නිවාසය", "විලා"];
  const landUsageOptions = ["නේවාසික", "මිශ්‍ර"];
  const utilitiesOptions = ["ඔව්", "නැහැ"];
  const accessibilityOptions = ["දුප්පත්", "මධ්‍යස්ථ", "හොඳ"];

  useEffect(() => {
    let filled = 0;
    if (landSize) filled++;
    if (propertyValue) filled++;
    if (district) filled++;
    if (zone) filled++;
    if (houseType) filled++;
    if (landUsage) filled++;
    if (utilities) filled++;
    if (accessibility) filled++;
    setProgress((filled / 8) * 100);
  }, [landSize, propertyValue, district, zone, houseType, landUsage, utilities, accessibility]);

  const sendPrediction = async (inputData) => {
    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });
      const json = await res.json();
      if (json.status === "ok") {
        setPredictionResult({
          tax: Number(json.prediction).toFixed(0),
          message: "ඔබේ නේවාසික ඉඩම් බද්ද පුරෝකථනය කර ඇත! ✅",
        });
      } else {
        setPredictionResult({
          tax: null,
          message: "Prediction error: " + (json.message || "unknown"),
        });
      }
    } catch (error) {
      setPredictionResult({
        tax: null,
        message: "Backend connection failed.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPrediction({
      land_type: "residential",
      land_size: Number(landSize),
      property_value: Number(propertyValue),
      district: district || "missing",
      zone: zone || "missing",
      house_type: houseType || "missing",
      land_usage: landUsage || "missing",
      utilities: utilities || "missing",
      accessibility: accessibility || "missing",
    });
  };

  return (
    <div className="residential-container">
      <div className="residential-card">
        <h1>ඔබේ {landType} දේපල බද්ද පුරෝකථනය කිරීමට ඔබ කැමතිද?</h1>
        <p>ඔබේ අනාගතය සඳහා දැනුවත් තීරණ ගැනීමට විස්තර සපයන්න.</p>

        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div><br />

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="landType" value={landType} />

          <label>භූමි ප්‍රමාණය (වර්ග මීටර්): {landSize}</label>
          <input type="range" min="10" max="1000" value={landSize} onChange={(e) => setLandSize(e.target.value)} />

          <label>ඉඩම් වටිනාකම (රු.): {propertyValue.toLocaleString()}</label>
          <input type="range" min="100000" max="50000000" step="100000" value={propertyValue} onChange={(e) => setPropertyValue(e.target.value)} />

          <label>දිස්ත්‍රික්කය</label>
          <select value={district} onChange={(e) => { setDistrict(e.target.value); setZone(""); setHouseType(""); setLandUsage(""); setUtilities(""); setAccessibility(""); }}>
            <option value="">දිස්ත්‍රික්කය තෝරන්න</option>
            {Object.keys(districtZones).map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          {district && (
            <>
              <label>ප්‍රාදේශීය ලේකම් කාර්යාලය</label>
              <select value={zone} onChange={(e) => { setZone(e.target.value); setHouseType(""); setLandUsage(""); setUtilities(""); setAccessibility(""); }}>
                <option value="">ප්‍රාදේශීය ලේකම් කාර්යාලය තෝරන්න</option>
                {districtZones[district].map(z => <option key={z} value={z}>{z}</option>)}
              </select>
            </>
          )}

          {zone && (
            <>
              <label>නිවාස වර්ගය</label>
              <div className="usage-cards">
                {houseOptions.map(opt => (
                  <div key={opt} className={`usage-card ${houseType === opt ? "selected" : ""}`} onClick={() => setHouseType(opt)}>{opt}</div>
                ))}
              </div>
            </>
          )}

          {houseType && (
            <>
              <label>ඉඩම් භාවිතය</label>
              <div className="usage-cards">
                {landUsageOptions.map(opt => (
                  <div key={opt} className={`usage-card ${landUsage === opt ? "selected" : ""}`} onClick={() => setLandUsage(opt)}>{opt}</div>
                ))}
              </div>
            </>
          )}

          {landUsage && (
            <>
              <label>උපයෝගිතා</label>
              <div className="usage-cards">
                {utilitiesOptions.map(opt => (
                  <div key={opt} className={`usage-card ${utilities === opt ? "selected" : ""}`} onClick={() => setUtilities(opt)}>{opt}</div>
                ))}
              </div>
            </>
          )}

          {utilities && (
            <>
              <label>ප්‍රවේශ්‍යතාව</label>
              <div className="usage-cards">
                {accessibilityOptions.map(opt => (
                  <div key={opt} className={`usage-card ${accessibility === opt ? "selected" : ""}`} onClick={() => setAccessibility(opt)}>{opt}</div>
                ))}
              </div>
            </>
          )}

          {accessibility && <button className="residential-button" type="submit">පුරෝකථනය කරන්න</button>}
        </form>

        {predictionResult && (
          <div className="prediction-card">
            <h2>{predictionResult.message}</h2>
            {predictionResult.tax && <p className="tax-amount">රු. {predictionResult.tax}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResidentialForm;
