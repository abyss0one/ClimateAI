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

        {/* <div className="flex flex-row  gap-5 ">
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
          </div>
        </div> */}

        {/* <div className="flex flex-row mr-px gap-5 items-center">
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-1/2 h-[329px] items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-['Corbel'] text-[#415c2e] bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Pluviometría CAT          </div>
            <div className="min-h-0 min-w-0">
              <LineChartCat />
            </div>
          </div>
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-1/2 h-[329px] items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-['Corbel'] text-[#415c2e] bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Temperatura CAT
            </div>
            <div className="min-h-0 min-w-0">
              <BarChartCat />
            </div>
          </div>
        </div> */}

        <div className="flex flex-col gap-5 w-full">
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-full items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-['Corbel'] text-[#415c2e] bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Pluviometría CAT
            </div>
            <div className="min-h-0 min-w-0 w-full flex-1">
              <LineChartCat />
            </div>
          </div>
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-full items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-['Corbel'] text-[#415c2e] bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Temperatura CAT
            </div>
            <div className="min-h-0 min-w-0 w-full flex-1">
              <BarChartCat />
            </div>
          </div>
        </div>


        <div className="text-justify text-m font-['Corbel'] leading-[30px] text-[#757575]">
          La sequera pluviomètrica es pot avaluar utilitzant diversos índexs. Un dels més àmpliament utilitzats és l’índex SPI (de l’anglès Standardized Precipitation Index), també conegut com a Índex de Precipitació Estàndard (IPE), que permet fer una avaluació del dèficit o excés de precipitació al territori i per a una varietat d’escales temporals. Els intervals més llargs (superiors a 12 mesos) aporten informació sobre l’estat de les aigües subterrànies, dels cursos d’aigua i de l’emmagatzematge d’aigua als embassaments. Per contra, els intervals més curts (inferiors a 9 mesos) són útils per a estimar la humitat del sòl, aspecte molt important per a l’agricultura i els boscos, i responen de manera immediata a la presència o absència de precipitacions.        </div>

        <div className='flex gap-4'>
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white  rounded-[30px] p-4">
            <img
              src="../../public/assets/IPE9_1km_20230630_w.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white  rounded-[30px] p-4">
            <img
              src="../../public/assets/IPE36_1km_20230630_w.png"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="text-justify text-m font-['Corbel'] leading-[30px] text-[#757575]">
          <p>
            &gt; 2,5, condicions d’humitat excepcional <br />
            2,0 a 2,5 condicions d’humitat extrema <br />
            1,5 a 2,0 condicions d’humitat forta <br />
            1,0 a 1,5, condicions d’humitat moderada <br />
            1,0 a -1,0, condicions de normalitat <br />
            -1,0 a -1,5, condicions de sequera moderada <br />
            -1,5 a -2,0, condicions de sequera forta <br />
            -2,0 a -2,5, condicions de sequera extrema <br />
            &lt;-2,5, condicions de sequera excepcional <br />
            Fuente:         https://www.meteo.cat/wpweb/climatologia/evolucio-observada-del-clima/estat-de-la-sequera/

          </p>

        </div>


      </div>

    </div>





  )
}

export default Context