import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { districtZones } from "../data/districtZones";
import "./AgriculturalForm.css";

const AgriculturalForm = () => {
  const location = useLocation();
  const landType = location.state?.landType || "කෘෂිකාර්මික";

  const [agriLandSize, setAgriLandSize] = useState(50);
  const [agriLandCost, setAgriLandCost] = useState(1000000);

  const [agriDistrict, setAgriDistrict] = useState("");
  const [agriZone, setAgriZone] = useState("");

  const [agriSoilType, setAgriSoilType] = useState("");
  const [agriLandUsage, setAgriLandUsage] = useState("");
  const [agriIrrigation, setAgriIrrigation] = useState("");
  const [agriAccessibility, setAgriAccessibility] = useState("");

  const [agriProgress, setAgriProgress] = useState(0);
  const [predictionResult, setPredictionResult] = useState(null); // NEW

  const usageOptions = ["වී", "එළවළු", "පළතුරු", "වෙනත්"];
  const irrigationOptions = ["ඔව්", "නැහැ"];
  const accessibilityOptions = ["දුප්පත්", "මධ්‍යස්ථ", "හොඳ"];

  // Calculate progress dynamically
  useEffect(() => {
    let filled = 0;
    if (agriDistrict) filled++;
    if (agriZone) filled++;
    if (agriSoilType) filled++;
    if (agriLandUsage) filled++;
    if (agriIrrigation) filled++;
    if (agriAccessibility) filled++;
    if (agriLandSize) filled++;
    if (agriLandCost) filled++;
    const totalFields = 8;
    setAgriProgress((filled / totalFields) * 100);
  }, [
    agriDistrict,
    agriZone,
    agriSoilType,
    agriLandUsage,
    agriIrrigation,
    agriAccessibility,
    agriLandSize,
    agriLandCost
  ]);

  // Function to send data to backend
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
          message: "ඔබේ ඉඩම් බද්ද පුරෝකථනය කර ඇත! ✅"
        });
      } else {
        setPredictionResult({
          tax: null,
          message: "Prediction error: " + (json.message || "unknown")
        });
      }
    } catch (error) {
      console.error(error);
      setPredictionResult({
        tax: null,
        message: "Backend connection failed."
      });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputData = {
  land_type: "agricultural",
  land_size: Number(agriLandSize),
  property_value: Number(agriLandCost),
  district: agriDistrict || "missing",
  zone: agriZone || "missing",
  soil_type: agriSoilType || "missing",
  land_usage: agriLandUsage || "missing",
  irrigation: agriIrrigation || "missing",
  accessibility: agriAccessibility || "missing",
};
sendPrediction(inputData);

  };

  return (
    <div className="agri-container">
      <div className="agri-card">
        <h1>ඔබේ {landType} ඉඩම් බද්ද පුරෝකථනය කිරීමට ඔබට අවශ්‍යද? </h1>
        <p>
          විශ්වාසයෙන් යුතුව ඔබේ ගොවිතැන් අනාගතය සැලසුම් කිරීමට ඔබේ ඉඩම්
          විස්තර ඇතුළත් කරන්න.
        </p>

        {/* Progress Bar */}
        <div className="agri-progress-container">
          <div className="agri-progress-bar" style={{ width: `${agriProgress}%` }}></div>
        </div><br />

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="landType" value={landType} />

          {/* Land Size */}
          <label>ඉඩමේ ප්‍රමාණය: {agriLandSize} අක්කර</label>
          <input
            type="range"
            min="0"
            max="500"
            value={agriLandSize}
            onChange={(e) => setAgriLandSize(e.target.value)}
          />

          {/* Land Cost */}
          <label>ඉඩමේ වටිනාකම: රු. {agriLandCost.toLocaleString()}</label>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="100000"
            value={agriLandCost}
            onChange={(e) => setAgriLandCost(e.target.value)}
          />

          {/* District */}
          <label>ඉඩම පිහිටා ඇති දිස්ත්‍රික්කය</label>
          <select
            value={agriDistrict}
            onChange={(e) => {
              setAgriDistrict(e.target.value);
              setAgriZone("");
              setAgriSoilType("");
              setAgriLandUsage("");
              setAgriIrrigation("");
              setAgriAccessibility("");
            }}
          >
            <option value="">දිස්ත්‍රික්කය තෝරන්න</option>
            {Object.keys(districtZones).map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          {/* Zone */}
          {agriDistrict && (
            <>
              <label>ප්‍රාදේශීය ලේකම් කාර්යාලය</label>
              <select
                value={agriZone}
                onChange={(e) => {
                  setAgriZone(e.target.value);
                  setAgriSoilType("");
                  setAgriLandUsage("");
                  setAgriIrrigation("");
                  setAgriAccessibility("");
                }}
              >
                <option value="">ප්‍රාදේශීය ලේකම් කාර්යාලය තෝරන්න</option>
                {districtZones[agriDistrict].map((z) => (
                  <option key={z} value={z}>{z}</option>
                ))}
              </select>
            </>
          )}

          {/* Soil Type */}
          {agriZone && (
            <>
              <label>පාංශු වර්ගය (Optional)</label>
              <select
                value={agriSoilType}
                onChange={(e) => setAgriSoilType(e.target.value)}
              >
                <option value="">පාංශු වර්ගය තෝරන්න</option>
                <option value="clay">මැටි</option>
                <option value="sandy">වැලි සහිත</option>
                <option value="loamy">ලෝම</option>
                <option value="rocky">පාෂාණමය</option>
              </select>
            </>
          )}

          {/* Land Usage */}
          {agriSoilType && (
            <>
              <label>ඉඩම් භාවිතය (විකල්ප)</label>
              <div className="agri-usage-cards">
                {usageOptions.map((option) => (
                  <div
                    key={option}
                    className={`agri-usage-card ${agriLandUsage === option ? "selected" : ""}`}
                    onClick={() => setAgriLandUsage(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Irrigation */}
          {agriLandUsage && (
            <>
              <label>උපයෝගිතා/වාරිමාර්ග (විකල්ප)</label>
              <div className="agri-usage-cards">
                {irrigationOptions.map((option) => (
                  <div
                    key={option}
                    className={`agri-usage-card ${agriIrrigation === option ? "selected" : ""}`}
                    onClick={() => setAgriIrrigation(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Accessibility */}
          {agriIrrigation && (
            <>
              <label>ප්‍රවේශ්‍යතාව (විකල්ප)</label>
              <div className="agri-accessibility-cards">
                {accessibilityOptions.map((option) => (
                  <div
                    key={option}
                    className={`agri-accessibility-card ${agriAccessibility === option ? "selected" : ""}`}
                    onClick={() => setAgriAccessibility(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Submit */}
          {agriAccessibility && (
            <button className="agri-button" type="submit">
              පුරෝකථනය කරන්න
            </button>
          )}
        </form>

        {/* Prediction Result Card */}
        {predictionResult && (
          <div className="prediction-card">
            <h2>{predictionResult.message}</h2>
            {predictionResult.tax && (
              <p className="tax-amount">රු. {predictionResult.tax}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgriculturalForm;
