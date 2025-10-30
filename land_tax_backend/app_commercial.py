from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
import pandas as pd
from catboost import CatBoostRegressor, Pool

app = Flask(__name__)
CORS(app)


client = pymongo.MongoClient("mongodb+srv://landtax_user:tax2025land@cluster1.vrjwme9.mongodb.net/land_tax_db?retryWrites=true&w=majority&appName=Cluster1")
db = client["land_tax_db"]
collection = db["historical_commercial_taxes"]

# 🔹 Train model on server start
def train_model():
    data = pd.DataFrame(list(collection.find()))
    if data.empty:
        return None, None, None

    y = data["tax"]
    X = data.drop(columns=["_id", "tax"])

    
    cat_features = [
        "district",
        "zone",
        "business_type",
        "building_usage",
        "facilities",
        "accessibility"
    ]
    cat_features = [i for i, col in enumerate(X.columns) if col in cat_features]

    model = CatBoostRegressor(iterations=500, learning_rate=0.1, depth=6, verbose=0)
    model.fit(X, y, cat_features=cat_features)

    return model, X.columns.tolist(), cat_features

model, feature_columns, cat_features = train_model()

# 🔹 Prediction route
@app.route("/predict", methods=["POST"])
def predict():
    if model is None:
        return jsonify({"status": "error", "message": "No training data available"})

    input_data = request.json
    df = pd.DataFrame([input_data])

    # fill missing cols
    for col in feature_columns:
        if col not in df.columns:
            df[col] = "" if col in [
                "district", "zone", "business_type", 
                "building_usage", "facilities", "accessibility"
            ] else 0

    df = df[feature_columns]  # correct order
    pool = Pool(df, cat_features=cat_features)

    prediction = model.predict(pool)[0]
    return jsonify({"status": "ok", "prediction": round(prediction, 0)})

if __name__ == "__main__":
    app.run(debug=True, port=5001)  # 👈 runs on port 5001 for commercial
