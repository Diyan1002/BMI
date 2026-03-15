import React from "react";
import saveIcon from "../assets/save.png";

export default function BMIRight({ bmi }) {
  return (
    <div className="p-4 md:p-6 w-full md:w-[420px]">

      {/* Header */}
      <div className="bg-[#5b8a2b] text-white px-4 py-2 flex justify-between items-center">
        <span className="text-base md:text-lg font-semibold">Result</span>
        <div className="flex flex-col items-center">
          <img
            src={saveIcon}
            alt="save"
            className="w-4 h-4 object-contain"
          />
          <span className="text-xs opacity-80">save</span>
        </div>
      </div>

      {/* BMI Text */}
      <div className="mt-3 text-[#222] text-center md:text-left">
        <span className="font-bold font-playfair text-xl md:text-2xl">
          BMI = {bmi ? `${bmi} kg/m²` : "--"}
        </span>
        <span className="text-green-700 font-semibold ml-2 block md:inline">
          (Normal)
        </span>
      </div>

      {/* Gauge */}
      <div className="flex justify-center mt-8">

        <div className="relative w-[260px] h-[130px] md:w-[320px] md:h-[160px] overflow-hidden">

          {/* Segmented Colors */}
          <div
            className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full"
            style={{
              background: `conic-gradient(
                #8b0000 0deg 7.5deg,
                #ff8fa3 7.5deg 10.75deg,
                #ffd60a 18.75deg 30deg,
                #2ecc71 30deg 67.5deg,
                #ffd60a 67.5deg 105deg,
                #ff8fa3 105deg 142.5deg,
                #ff6b6b 142.5deg 165deg,
                #8b0000 165deg 180deg
              )`
            }}
          />

          {/* Inner White Circle */}
          <div className="absolute top-[40px] md:top-[50px] left-1/2 -translate-x-1/2 w-[180px] h-[200px] md:w-[220px] md:h-[240px] bg-white rounded-full"></div>

          {/* Needle */}
          <div className="absolute bottom-2 left-1/2 w-[3px] h-[80px] md:h-[100px] bg-black origin-bottom rotate-[45deg]"></div>

          {/* Center Dot */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-gray-500 rounded-full"></div>

          {/* Center Text */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-lg md:text-2xl font-bold">
            BMI = {bmi ? bmi : "--"}
          </div>

          {/* Numbers */}
          <span className="absolute left-[18px] md:left-[25px] bottom-[40px] md:bottom-[50px] text-[10px] md:text-xs">16</span>
          <span className="absolute left-[35px] md:left-[45px] bottom-[65px] md:bottom-[80px] text-[10px] md:text-xs">17</span>
          <span className="absolute left-[55px] md:left-[70px] bottom-[82px] md:bottom-[100px] text-[10px] md:text-xs">18.5</span>
          <span className="absolute left-[95px] md:left-[115px] bottom-[98px] md:bottom-[120px] text-[10px] md:text-xs">25</span>
          <span className="absolute left-[140px] md:left-[170px] bottom-[105px] md:bottom-[130px] text-[10px] md:text-xs">30</span>
          <span className="absolute right-[55px] md:right-[70px] bottom-[72px] md:bottom-[90px] text-[10px] md:text-xs">35</span>
          <span className="absolute right-[25px] md:right-[35px] bottom-[48px] md:bottom-[60px] text-[10px] md:text-xs">40</span>

          {/* Labels */}
          <span className="absolute left-[-10px] md:left-[-18px] bottom-[65px] md:bottom-[80px] text-[9px] md:text-xs rotate-[-60deg]">
            Underweight
          </span>

          <span className="absolute left-[38px] md:left-[50px] bottom-[115px] md:bottom-[140px] text-[9px] md:text-xs rotate-[-25deg]">
            Normal
          </span>

          <span className="absolute left-[120px] md:left-[155px] bottom-[125px] md:bottom-[155px] text-[9px] md:text-xs">
            Overweight
          </span>

          <span className="absolute right-[-5px] md:right-[-10px] bottom-[65px] md:bottom-[80px] text-[9px] md:text-xs rotate-[35deg]">
            Obesity
          </span>

        </div>
      </div>

      {/* Details */}
      <ul className="mt-5 list-disc pl-5 text-[#222] font-medium space-y-1 text-xs md:text-sm">
        <li>Healthy BMI range: 18.5 kg/m² - 25 kg/m²</li>
        <li>Healthy weight for the height: 128.9 lbs - 174.2 lbs</li>
        <li>BMI Prime: 0.92</li>
        <li>Ponderal Index: 12.9 kg/m³</li>
      </ul>

    </div>
  );
}