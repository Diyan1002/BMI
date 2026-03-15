import { Play } from "lucide-react";

export default function BMICalculatorLayout() {
  return (
    <div className="w-full min-h-screen flex justify-center p-4 md:p-10">
      <div className="w-full md:w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT SIDE - BMI FORM */}
        <div className="bg-grey border p-4 shadow-sm">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row mb-4">
            <button className="px-4 py-2 border bg-gray-200 font-medium font-playfair w-full md:w-auto">
              US Units
            </button>
            <button className="px-4 py-2 border bg-[#5F86AB] text-white font-medium font-playfair w-full md:w-auto">
              Metric Units
            </button>
            <button className="px-4 py-2 border bg-[#5F86AB] text-white font-medium font-playfair w-full md:w-auto">
              Other Units
            </button>
          </div>

          {/* Age */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] items-start md:items-center gap-3 mb-3">
            <label className="font-medium">Age</label>
            <input
              defaultValue="25"
              className="border px-2 py-1 w-full shadow-inner"
            />
            <span className="text-sm text-gray-600">ages: 2 - 120</span>
          </div>

          {/* Gender */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-start md:items-center gap-3 mb-3">
            <label className="font-medium">Gender</label>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" defaultChecked /> Male
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" /> Female
              </label>
            </div>
          </div>

          {/* Height */}
          <div className="grid grid-cols-2 md:grid-cols-[120px_80px_auto_80px_auto] items-center gap-2 mb-3">
            <label className="font-medium col-span-2 md:col-span-1">Height</label>
            <input defaultValue="5" className="border px-2 py-1" />
            <span className="text-gray-600">feet</span>
            <input defaultValue="10" className="border px-2 py-1" />
            <span className="text-gray-600">inches</span>
          </div>

          {/* Weight */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] items-start md:items-center gap-3 mb-6">
            <label className="font-medium">Weight</label>
            <input defaultValue="160" className="border px-2 py-1 w-full" />
            <span className="text-gray-600">pounds</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3">
            <button className="flex items-center justify-center gap-2 bg-[#4f7f1f] text-white px-6 py-2 font-semibold w-full md:w-auto">
              Calculate
              <span className="bg-[#7fb23a] p-1 rounded-full">
                <Play size={16} fill="white" />
              </span>
            </button>

            <button className="bg-gray-300 px-6 py-2 font-medium w-full md:w-auto">
              Clear
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}