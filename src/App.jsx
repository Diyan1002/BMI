import React from 'react'
import BMICalculatorHeader from './Components/BMIHeader'
import BMILeft from './Components/BMILeft'
import BMIRight from './Components/BMIRight'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-6">
      
      <BMICalculatorHeader />

      {/* Responsive Layout */}
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row gap-6 items-start">

        {/* Result - Left on Desktop */}
        <div className="w-full md:w-[420px]">
          <BMIRight />
        </div>

        {/* Form - Right on Desktop */}
        <div className="w-full md:flex-1">
          <BMILeft />
        </div>

      </div>

    </div>
  )
}

export default App;