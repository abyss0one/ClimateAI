import React from 'react'
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import LineChartCat from './LineChartCat';
import BarChartCat from './BarChartCat';


const Context = () => {
  return (
    <div className="flex flex-row gap-1 items-center mb-20 ml-[148px] mr-24">
      <div className="flex flex-col justify-between mt-6 gap-3 w-full">
        <h1 className=''>What's happening</h1>
        <div className="text-justify text-m font-['Corbel'] leading-[30px] text-[#757575]">
          Drought, low rainfall and high temperatures are a concern in Catalonia. There is a drastic decrease in rainfall, reducing water resources. High temperatures aggravated by climate change increase evaporation. Bar graphs will show the decline in rainfall and its impact on water supply. It is urgent to address the situation with efficient water management, water use awareness and sustainable alternatives to face drought and climate change in Catalonia.
        </div>
        <div className="flex flex-row  gap-5 ">
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-1/2 h-[329px] items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-['Corbel'] text-[#415c2e] bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Temperatura media mensual - Barcelona </div>
            <div className="min-h-0 min-w-0 flex-grow">
              <BarChart className="w-full h-full" />
            </div>

          </div>
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-1/2 h-[329px] items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-['Corbel'] text-[#415c2e] bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Pluviometría media mensual - Barcenona </div>
            <div className="min-h-0 min-w-0">
              <LineChart />
            </div>
            <div className="text-center font-['Corbel'] leading-[22.4px] text-[#658e47] self-stretch mr-3 h-[12.9%]">
              {/* We present you a proposal and discuss niffty-gritty like */}
            </div>
          </div>
        </div>
        <div className="flex flex-row mr-px gap-5 items-center">
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-1/2 h-[329px] items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-['Corbel'] text-[#415c2e] bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Pluviometría CAT          </div>
            <div className="min-h-0 min-w-0">
              <LineChartCat />
            </div>
            <div className="text-center font-['Corbel'] leading-[22.4px] text-[#658e47] self-stretch mr-3 h-[12.9%]">
              We present you a proposal and discuss niffty-gritty like
            </div>
          </div>
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-1/2 h-[329px] items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-['Corbel'] text-[#415c2e] bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Business Idea Planning
            </div>
            <div className="min-h-0 min-w-0">
              <BarChartCat />
            </div>
            <div className="text-center font-['Corbel'] leading-[22.4px] text-[#658e47] self-stretch mr-3 h-[12.9%]">
              We present you a proposal and discuss niffty-gritty like
            </div>

          </div>
        </div>
        <div className='grid grid-cols-1 w-full'><img
          src="https://file.rendit.io/n/vgowFxEpwLSfBDecrhYT.png"
          className=" min-h-0 min-w-0"
        /></div>
      </div>

    </div>





  )
}

export default Context