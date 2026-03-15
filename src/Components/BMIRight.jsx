import React from "react";
import saveIcon from "../assets/save.png";

export default function BMIRight({ bmi }) {
    let category = "";

    if (bmi) {
      const value = Number(bmi);
    
      if (value < 18.5) {
        category = "Underweight";
      } 
      else if (value < 25) {
        category = "Normal";
      } 
      else if (value < 30) {
        category = "Overweight";
      } 
      else {
        category = "Obesity";
      }
    }
    
    // Calculate needle rotation based on BMI value
    const calculateNeedleRotation = () => {
        if (!bmi) return -90; // Default position (far left)
        
        const bmiValue = Number(bmi);
        // BMI range: 16 to 40 (typical gauge range)
        // Map to 0-180 degrees (from left to right)
        const minBMI = 16;
        const maxBMI = 40;
        
        // Clamp BMI value to range
        const clampedBMI = Math.min(Math.max(bmiValue, minBMI), maxBMI);
        
        // Map BMI to degrees (0 to 180)
        // 0 degrees = far left (16), 180 degrees = far right (40)
        const degrees = ((clampedBMI - minBMI) / (maxBMI - minBMI)) * 180;
        
        return degrees - 90; // Subtract 90 because 0 degrees points right
    };

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
  ({bmi ? category : "--"})
</span>
      </div>

      {/* Gauge */}
      <div className="flex justify-center mt-8">

        <div className="relative w-[260px] h-[130px] md:w-[320px] md:h-[160px] overflow-hidden">

          {/* Segmented Colors - Corrected angles for half circle */}
          <div
            className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full"
            style={{
              background: `conic-gradient(
                from 0deg at 50% 50%,
                #8b0000 0deg 22.5deg,    /* 16-17 (0-22.5°) - Severe underweight */
                #ff8fa3 22.5deg 45deg,    /* 17-18.5 (22.5-45°) - Underweight */
                #ffd60a 45deg 67.5deg,    /* 18.5-20 (45-67.5°) - Lower normal */
                #2ecc71 67.5deg 112.5deg, /* 20-30 (67.5-112.5°) - Normal to overweight start */
                #ffd60a 112.5deg 135deg,  /* 30-35 (112.5-135°) - Overweight */
                #ff8fa3 135deg 157.5deg,  /* 35-40 (135-157.5°) - Obesity */
                #8b0000 157.5deg 180deg   /* 40+ (157.5-180°) - Severe obesity */
              )`
            }}
          />

          {/* Inner White Circle - creates gauge effect */}
          <div className="absolute top-[40px] md:top-[50px] left-1/2 -translate-x-1/2 w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-white rounded-full"></div>

          {/* Needle - rotation based on BMI */}
          <div 
            className="absolute bottom-2 left-1/2 w-[3px] h-[80px] md:h-[100px] bg-black origin-bottom transition-transform duration-300"
            style={{
              transform: `translateX(-50%) rotate(${calculateNeedleRotation()}deg)`
            }}
          ></div>

          {/* Center Dot */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-gray-500 rounded-full"></div>

          {/* Center Text */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-lg md:text-2xl font-bold">
            BMI = {bmi ? bmi : "--"}
          </div>

          {/* Numbers - positioned around the gauge */}
          <span className="absolute left-[18px] md:left-[25px] bottom-[40px] md:bottom-[50px] text-[10px] md:text-xs">16</span>
          <span className="absolute left-[35px] md:left-[45px] bottom-[65px] md:bottom-[80px] text-[10px] md:text-xs">17</span>
          <span className="absolute left-[55px] md:left-[70px] bottom-[82px] md:bottom-[100px] text-[10px] md:text-xs">18.5</span>
          <span className="absolute left-[95px] md:left-[115px] bottom-[98px] md:bottom-[120px] text-[10px] md:text-xs">25</span>
          <span className="absolute left-[140px] md:left-[170px] bottom-[105px] md:bottom-[130px] text-[10px] md:text-xs">30</span>
          <span className="absolute right-[55px] md:right-[70px] bottom-[72px] md:bottom-[90px] text-[10px] md:text-xs">35</span>
          <span className="absolute right-[25px] md:right-[35px] bottom-[48px] md:bottom-[60px] text-[10px] md:text-xs">40</span>

          {/* Labels */}
          {/* <span className="absolute left-[-10px] md:left-[-18px] bottom-[65px] md:bottom-[80px] text-[9px] md:text-xs rotate-[-60deg]">
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
          </span> */}

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