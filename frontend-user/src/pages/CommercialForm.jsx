import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { districtZones } from "../data/districtZones";
import "./CommercialForm.css";

const CommercialForm = () => {
  const location = useLocation();
  const landType = location.state?.landType || "වාණිජ";

  const [landSize, setLandSize] = useState(100);
  const [propertyValue, setPropertyValue] = useState(10000000);
  const [district, setDistrict] = useState("");
  const [zone, setZone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [buildingUsage, setBuildingUsage] = useState("");
  const [facilities, setFacilities] = useState("");
  const [accessibility, setAccessibility] = useState("");

  const [progress, setProgress] = useState(0);
  const [predictionResult, setPredictionResult] = useState(null);

  const businessOptions = ["සිල්ලර", "කාර්යාලය", "කර්මාන්ත ශාලාව", "ගබඩාව"];
  const buildingUsageOptions = ["තනි-කාර්ය", "බහු-කාර්ය"];
  const facilitiesOptions = ["ලබා ගත හැකිය", "ලබා ගත නොහැක"];
  const accessibilityOptions = ["දුප්පත්", "මධ්‍යස්ථ", "හොඳ"];

  // Calculate form progress
  useEffect(() => {
    let filled = 0;
    if (landSize) filled++;
    if (propertyValue) filled++;
    if (district) filled++;
    if (zone) filled++;
    if (businessType) filled++;
    if (buildingUsage) filled++;
    if (facilities) filled++;
    if (accessibility) filled++;
    setProgress((filled / 8) * 100);
  }, [landSize, propertyValue, district, zone, businessType, buildingUsage, facilities, accessibility]);

  // Check if all required fields are filled
  const isFormComplete = () => {
    return landSize && propertyValue && district && zone && businessType && buildingUsage && facilities && accessibility;
  };

  // Send prediction to backend
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
          message: "ඔබේ වාණිජ ඉඩම් බද්ද පුරෝකථනය කර ඇත! ✅",
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormComplete()) {
      alert("කරුණාකර සියලුම ක්ෂේත්‍ර පුරවා පසු පුරෝකථනය කරන්න!");
      return;
    }

    sendPrediction({
      land_type: "commercial",
      land_size: Number(landSize),
      property_value: Number(propertyValue),
      district,
      zone,
      business_type: businessType,
      building_usage: buildingUsage,
      facilities,
      accessibility,
    });
  };

  return (
    <div className="commercial-container">
      <div className="commercial-card">
        <h1>ඔබේ {landType} ඉඩම් බද්ද පුරෝකථනය කිරීමට ඔබ සූදානම්ද?</h1>
        <p>ඔබේ ව්‍යාපාර දේපළ අනාගතය සැලසුම් කිරීමට විස්තර සපයන්න.</p>

        <div className="commercial-progress-container">
          <div className="commercial-progress-bar" style={{ width: `${progress}%` }}></div>
        </div><br />

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="landType" value={landType} />

          <label>භූමි ප්‍රමාණය (වර්ග මීටර්): {landSize}</label>
          <input type="range" min="50" max="5000" value={landSize} onChange={(e) => setLandSize(e.target.value)} />

          <label>ඉඩම් වටිනාකම (රු.මි.): {propertyValue.toLocaleString()}</label>
          <input type="range" min="1000000" max="100000000" step="500000" value={propertyValue} onChange={(e) => setPropertyValue(e.target.value)} />

          <label>දිස්ත්‍රික්කය</label>
          <select value={district} onChange={(e) => { setDistrict(e.target.value); setZone(""); setBusinessType(""); setBuildingUsage(""); setFacilities(""); setAccessibility(""); }}>
            <option value="">දිස්ත්‍රික්කය තෝරන්න</option>
            {Object.keys(districtZones).map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          {district && (
            <>
              <label>ප්‍රාදේශීය ලේකම් කාර්යාලය</label>
              <select value={zone} onChange={(e) => { setZone(e.target.value); setBusinessType(""); setBuildingUsage(""); setFacilities(""); setAccessibility(""); }}>
                <option value="">ප්‍රාදේශීය ලේකම් කාර්යාලය තෝරන්න</option>
                {districtZones[district].map(z => <option key={z} value={z}>{z}</option>)}
              </select>
            </>
          )}

          {zone && (
            <>
              <label>ව්‍යාපාර වර්ගය</label>
              <div className="commercial-usage-cards">
                {businessOptions.map(opt => (
                  <div key={opt} className={`commercial-usage-card ${businessType === opt ? "selected" : ""}`} onClick={() => setBusinessType(opt)}>{opt}</div>
                ))}
              </div>
            </>
          )}

          {businessType && (
            <>
              <label>ගොඩනැගිලි භාවිතය</label>
              <div className="commercial-usage-cards">
                {buildingUsageOptions.map(opt => (
                  <div key={opt} className={`commercial-usage-card ${buildingUsage === opt ? "selected" : ""}`} onClick={() => setBuildingUsage(opt)}>{opt}</div>
                ))}
              </div>
            </>
          )}

          {buildingUsage && (
            <>
              <label>පහසුකම්</label>
              <div className="commercial-usage-cards">
                {facilitiesOptions.map(opt => (
                  <div key={opt} className={`commercial-usage-card ${facilities === opt ? "selected" : ""}`} onClick={() => setFacilities(opt)}>{opt}</div>
                ))}
              </div>
            </>
          )}

          {facilities && (
            <>
              <label>ප්‍රවේශ්‍යතාව</label>
              <div className="commercial-usage-cards">
                {accessibilityOptions.map(opt => (
                  <div key={opt} className={`commercial-usage-card ${accessibility === opt ? "selected" : ""}`} onClick={() => setAccessibility(opt)}>{opt}</div>
                ))}
              </div>
            </>
          )}

          {/* Button always visible but disabled if incomplete */}
          <button
            className="commercial-button"
            type="submit"
            disabled={!isFormComplete()}
          >
            පුරෝකථනය කරන්න
          </button>
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

export default CommercialForm;
