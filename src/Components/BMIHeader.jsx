import { ChevronDown } from "lucide-react";

export default function BMICalculatorHeader() {
  return (
    <div className="w-full bg-white p-6">
      <div className="flex flex-col md:flex-row items-start justify-between mb-4">
        <h1 className="text-3xl font-semibold text-slate-900">BMI Calculator</h1>
        <button className="text-sky-700 underline text-sm mt-2 md:mt-0">
          Print
        </button>
      </div>

      <div className="w-full bg-[#5F86AB] text-white flex flex-col md:flex-row items-center h-auto md:h-12 px-4 py-2 md:py-0 shadow">

        <div className="flex items-center justify-center w-10 md:ml-96 mb-2 md:mb-0">
          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-blue-700" />
          </div>
        </div>

        <p className="text-md md:text-md font-medium text-center md:text-left">
          Modify the values and click the Calculate button to use
        </p>
      </div>
    </div>
  );
}