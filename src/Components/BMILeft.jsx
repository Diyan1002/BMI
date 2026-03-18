// BMICalculatorLayout.jsx
import { useState } from "react";
import { Play } from "lucide-react";

export default function BMICalculatorLayout({ setBmi }) {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");

  // US Units
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInch, setHeightInch] = useState(10);
  const [usWeight, setUsWeight] = useState(160);
  const [usWeightUnit, setUsWeightUnit] = useState("lbs");

  // Metric Units
  const [metricHeight, setMetricHeight] = useState(170); // cm
  const [metricWeight, setMetricWeight] = useState(70); // kg

  // Matrix Units
  const [matrixHeight, setMatrixHeight] = useState(1.7); // meters
  const [matrixWeight, setMatrixWeight] = useState(70); // kg

  const [activeTab, setActiveTab] = useState("us"); // us / metric / matrix

  const calculateBMI = () => {
    let bmiValue = 0;

    if (activeTab === "us") {
      const heightInches = heightFeet * 12 + Number(heightInch);
      let weightInPounds = Number(usWeight);
      if (usWeightUnit === "kg") weightInPounds *= 2.20462;
      bmiValue = (weightInPounds / (heightInches * heightInches)) * 703;
    } else if (activeTab === "metric") {
      const heightMeters = metricHeight / 100;
      bmiValue = metricWeight / (heightMeters * heightMeters);
    } else if (activeTab === "matrix") {
      bmiValue = matrixWeight / Math.pow(matrixHeight, 1.5);
    }

    setBmi(bmiValue.toFixed(1));
  };

  const clearForm = () => {
    setAge("");
    setHeightFeet("");
    setHeightInch("");
    setUsWeight("");
    setUsWeightUnit("lbs");
    setMetricHeight("");
    setMetricWeight("");
    setMatrixHeight("");
    setMatrixWeight("");
    setBmi(null);
  };

  const tabButton = (tab, label) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 border font-medium w-full md:w-auto ${
        activeTab === tab ? "bg-[#6DB549] text-white" : "bg-gray-200"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-grey border p-4 shadow-sm">
      {/* Tabs */}
      <div className="flex flex-col md:flex-row mb-4 gap-2">
        {tabButton("us", "US Units")}
        {tabButton("metric", "Metric Units")}
        {tabButton("matrix", "Matrix Units")}
      </div>

      {/* Age */}
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-3 mb-3">
        <label className="font-medium">Age</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border px-2 py-1 w-full shadow-inner"
        />
        <span className="text-sm text-gray-600">ages: 2 - 120</span>
      </div>

      {/* Gender */}
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 mb-3">
        <label className="font-medium">Gender</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            Female
          </label>
        </div>
      </div>

      {/* US Units Form */}
      {activeTab === "us" && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-[120px_80px_auto_80px_auto] gap-2 mb-3">
            <label className="font-medium col-span-2 md:col-span-1">Height</label>
            <input
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
              className="border px-2 py-1"
            />
            <span>feet</span>
            <input
              value={heightInch}
              onChange={(e) => setHeightInch(e.target.value)}
              className="border px-2 py-1"
            />
            <span>inches</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-3 mb-6">
            <label className="font-medium">Weight</label>
            <input
              value={usWeight}
              onChange={(e) => setUsWeight(e.target.value)}
              className="border px-2 py-1 w-full"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setUsWeightUnit("lbs")}
                className={`px-2 py-1 border ${usWeightUnit === "lbs" ? "bg-[#6DB549] text-white" : ""}`}
              >
                Pounds
              </button>
              <button
                onClick={() => setUsWeightUnit("kg")}
                className={`px-2 py-1 border ${usWeightUnit === "kg" ? "bg-[#6DB549] text-white" : ""}`}
              >
                Kilograms
              </button>
            </div>
          </div>
        </>
      )}

      {/* Metric Units Form */}
      {activeTab === "metric" && (
        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 mb-6">
          <label className="font-medium">Height (cm)</label>
          <input
            value={metricHeight}
            onChange={(e) => setMetricHeight(e.target.value)}
            className="border px-2 py-1 w-full"
          />
          <label className="font-medium">Weight (kg)</label>
          <input
            value={metricWeight}
            onChange={(e) => setMetricWeight(e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </div>
      )}

      {/* Matrix Units Form */}
      {activeTab === "matrix" && (
        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 mb-6">
          <label className="font-medium">Matrix Height (m)</label>
          <input
            value={matrixHeight}
            onChange={(e) => setMatrixHeight(e.target.value)}
            className="border px-2 py-1 w-full"
          />
          <label className="font-medium">Matrix Weight (kg)</label>
          <input
            value={matrixWeight}
            onChange={(e) => setMatrixWeight(e.target.value)}
            className="border px-2 py-1 w-full"
          />
          <span className="text-sm text-gray-600 mt-1">
            BMI Matrix = weight / height^1.5
          </span>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-3">
        <button
          onClick={calculateBMI}
          className="flex items-center justify-center gap-2 bg-[#4f7f1f] text-white px-6 py-2 font-semibold w-full md:w-auto"
        >
          Calculate
          <span className="bg-[#7fb23a] p-1 rounded-full">
            <Play size={16} fill="white" />
          </span>
        </button>
        <button
          onClick={clearForm}
          className="bg-gray-300 px-6 py-2 font-medium w-full md:w-auto"
        >
          Clear
        </button>
      </div>
    </div>
  );
}