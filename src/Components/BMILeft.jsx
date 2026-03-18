import { useState } from "react";
import { Play } from "lucide-react";

export default function BMICalculatorLayout({ setBmi }) {

  const [age,setAge] = useState(25)
  const [gender,setGender] = useState("male")
  const [feet,setFeet] = useState(5)
  const [inch,setInch] = useState(10)
  const [weight,setWeight] = useState(160)

  const [weightUnit, setWeightUnit] = useState("lbs") // lbs / kg

  const calculateBMI = () => {

    const heightInches = (feet * 12) + Number(inch)

    let weightInPounds = Number(weight)

    // Convert KG → Pounds
    if (weightUnit === "kg") {
      weightInPounds = weightInPounds * 2.20462
    }

    const bmiValue = (weightInPounds / (heightInches * heightInches)) * 703

    setBmi(bmiValue.toFixed(1))
  }

  const clearForm = () => {
    setAge("")
    setFeet("")
    setInch("")
    setWeight("")
    setWeightUnit("lbs")
    setBmi(null)
  }

  return (
    <div className="bg-grey border p-4 shadow-sm">

      {/* Tabs */}
      <div className="flex flex-col md:flex-row mb-4">
        <button className="px-4 py-2 border bg-gray-200 font-medium w-full md:w-auto">
          US Units
        </button>
        <button className="px-4 py-2 border bg-[#5F86AB] text-white font-medium w-full md:w-auto">
          Metric Units
        </button>
        <button className="px-4 py-2 border bg-[#5F86AB] text-white font-medium w-full md:w-auto">
          Other Units
        </button>
      </div>

      {/* Age */}
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-3 mb-3">
        <label className="font-medium">Age</label>
        <input
          value={age}
          onChange={(e)=>setAge(e.target.value)}
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
              checked={gender==="male"}
              onChange={()=>setGender("male")}
            />
            Male
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={gender==="female"}
              onChange={()=>setGender("female")}
            />
            Female
          </label>
        </div>
      </div>

      {/* Height */}
      <div className="grid grid-cols-2 md:grid-cols-[120px_80px_auto_80px_auto] gap-2 mb-3">
        <label className="font-medium col-span-2 md:col-span-1">Height</label>

        <input
          value={feet}
          onChange={(e)=>setFeet(e.target.value)}
          className="border px-2 py-1"
        />
        <span>feet</span>

        <input
          value={inch}
          onChange={(e)=>setInch(e.target.value)}
          className="border px-2 py-1"
        />
        <span>inches</span>
      </div>

      {/* Weight */}
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-3 mb-6">
        <label className="font-medium">Weight</label>

        <input
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
          className="border px-2 py-1 w-full"
        />

        {/* Units */}
        <div className="flex gap-2">
          <button
            onClick={() => setWeightUnit("lbs")}
            className={`px-2 py-1 border ${weightUnit === "lbs" ? "bg-green-600 text-white" : ""}`}
          >
            Pounds
          </button>

          <button
            onClick={() => setWeightUnit("kg")}
            className={`px-2 py-1 border ${weightUnit === "kg" ? "bg-green-600 text-white" : ""}`}
          >
            Kilograms
          </button>
        </div>
      </div>

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