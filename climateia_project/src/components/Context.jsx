import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import LineChartCat from "./LineChartCat";
import BarChartCat from "./BarChartCat";

const Context = () => {
  return (
    <div
      id="context"
      className="flex flex-col items-center mb-20 ml-4 mr-4 sm:ml-[148px] sm:mr-24"
    >
      <div className="flex flex-col justify-between mt-6 gap-3 w-full">
        <div className="text-center justify-center items-center  text-3xl font-Poppins text-text_green text-bold mx-8 md:mx-24">
          Contexto
        </div>
        <div className="my-8 text-justify font-Poppins leading-[30px] text-text_color_body text-sm md:text-base">
          La sequía, las escasas precipitaciones y las altas temperaturas
          preocupan a Cataluña. Hay una disminución drástica de las
          precipitaciones, reduciendo los recursos hídricos. Las altas
          temperaturas agravadas por el cambio climático aumentan la
          evaporación. Los gráficos de barras mostrarán la disminución de las
          precipitaciones y su impacto en el suministro de agua. Es urgente
          abordar la situación con una gestión eficiente del agua,
          concienciación sobre el uso del agua y alternativas sostenibles para
          hacer frente a la sequía y el cambio climático en Cataluña.
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className=" shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-full lg:w-1/2 items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-Poppins text-text_green bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Pluviometría media mensual - Cataluña
            </div>
            <div className="aspect-w-2 aspect-h-1 w-full items-center justify-center">
              <LineChartCat />
            </div>
          </div>
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-full lg:w-1/2 items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-Poppins text-text_green bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              Temperatura media mensual - Cataluña
            </div>
            <div className="aspect-w-2 aspect-h-1 w-full items-center justify-center">
              <BarChartCat />
            </div>
          </div>
        </div>

        <div className="my-8 text-justify text-sm md:text-base font-Poppins leading-[30px] text-text_color_body">
          <p>
            La sequía pluviométrica se puede evaluar utilizando varios índices.
            Uno de los más ampliamente utilizados es el índice SPI (del inglés
            Standardized Precipitation Index), también conocido como Índice de
            Precipitación Estándar (IPE), que permite realizar una evaluación
            del déficit o exceso de precipitación en el territorio y para una
            variedad de escaleras temporales. Los intervalos más largos
            (superiores a 12 meses) aportan información sobre el estado de las
            aguas subterráneas, los cursos de agua y el almacenamiento de agua
            en los embalses. Por el contrario, los intervalos más cortos
            (inferiores a 9 meses) son útiles para estimar la humedad del suelo,
            aspecto muy importante para la agricultura y los bosques, y
            responden de forma inmediata a la presencia o ausencia de
            precipitaciones.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-3">
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white rounded-[30px] p-4">
            <img
              src="/assets/IPE9_1km_20230630_w.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white rounded-[30px] p-4">
            <img
              src="/assets/IPE36_1km_20230630_w.png"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="text-justify text-sm md:text-base font-Popins leading-[30px] text-text_color_body">
          <ul>
            <li> &gt; 2.5 Condiciones de humedad excepcional</li>
            <li>2.0 a 2.5 Condiciones de humedad extrema</li>
            <li>1.5 a 2.0 Condiciones de humedad fuerte</li>
            <li>1.0 a 1.5 Condiciones de humedad moderada</li>
            <li>1.0 a -1.0 Condiciones de normalidad</li>
            <li>-1.0 a -1.5 Condiciones de sequía moderada</li>
            <li>-1.5 a -2.0 Condiciones de sequía fuerte</li>
            <li>-2.0 a -2.5 Condiciones de sequía extrema</li>
            <li>&lt;-2.5 Condiciones de sequía excepcional</li>
          </ul>
          <p>Fuente:
            https://www.meteo.cat/wpweb/climatologia/evolucio-observada-del-clima/estat-de-la-sequera/</p>
        </div>
      </div>
    </div>
  );
};

export default Context;



// // EDITANDO RESPONSIVE 
// import React from "react";
// import LineChart from "./LineChart";
// import BarChart from "./BarChart";
// import LineChartCat from "./LineChartCat";
// import BarChartCat from "./BarChartCat";

// const Context = () => {
//   return (
//     <div
//       id="context"
//       className="flex flex-col items-center mb-20"
//     >
//       <div className="flex flex-col justify-between mt-6  mx-auto w-full">
//         <div className="text-center text-3xl font-Poppins text-text_green text-bold">
//           Contexto
//         </div>
//         <div className="my-8 text-justify text-xs md:text-[16px] mx-8 font-Poppins leading-[30px] text-text_color_body">
//           La sequía, las escasas precipitaciones y las altas temperaturas
//           preocupan a Cataluña. Hay una disminución drástica de las
//           precipitaciones, reduciendo los recursos hídricos. Las altas
//           temperaturas agravadas por el cambio climático aumentan la
//           evaporación. Los gráficos de barras mostrarán la disminución de las
//           precipitaciones y su impacto en el suministro de agua. Es urgente
//           abordar la situación con una gestión eficiente del agua,
//           concienciación sobre el uso del agua y alternativas sostenibles para
//           hacer frente a la sequía y el cambio climático en Cataluña.
//         </div>
//         <div className="flex flex-col gap-5 lg:flex-row">
//           <div className=" shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-full lg:w-1/2 items-center px-5 py-4 rounded-[30px]">
//             <div className="text-center text-2xl font-Poppins text-text_green bg-[transparent] mb-5 w-2/3 h-[16.99%]">
//               Pluviometría media mensual - Barcelona
//             </div>
//             <div className="aspect-w-2 aspect-h-1 w-full items-center justify-center">
//               <LineChartCat />
//             </div>
//           </div>
//           <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-full lg:w-1/2 items-center px-5 py-4 rounded-[30px]">
//             <div className="text-center text-2xl font-Poppins text-text_green bg-[transparent] mb-5 w-2/3 h-[16.99%]">
//               Temperatura media mensual - Barcelona
//             </div>
//             <div className="aspect-w-2 aspect-h-1 w-full items-center justify-center">
//               <BarChartCat />
//             </div>
//           </div>
//         </div>

//         <div className="my-8 text-justify text-xs md:text-[16px] font-Poppins leading-[30px] text-text_color_body">
//           <p>
//             La sequía pluviométrica se puede evaluar utilizando varios índices.
//             Uno de los más ampliamente utilizados es el índice SPI (del inglés
//             Standardized Precipitation Index), también conocido como Índice de
//             Precipitación Estándar (IPE), que permite realizar una evaluación
//             del déficit o exceso de precipitación en el territorio y para una
//             variedad de escaleras temporales. Los intervalos más largos
//             (superiores a 12 meses) aportan información sobre el estado de las
//             aguas subterráneas, los cursos de agua y el almacenamiento de agua
//             en los embalses. Por el contrario, los intervalos más cortos
//             (inferiores a 9 meses) son útiles para estimar la humedad del suelo,
//             aspecto muy importante para la agricultura y los bosques, y
//             responden de forma inmediata a la presencia o ausencia de
//             precipitaciones.
//           </p>
//         </div>

//         <div className="flex flex-col gap-3 lg:flex-row lg:gap-3">
//           <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white rounded-[30px] p-4">
//             <img
//               src="/assets/IPE9_1km_20230630_w.png"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white rounded-[30px] p-4">
//             <img
//               src="/assets/IPE36_1km_20230630_w.png"
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>

//         <div className="text-justify text-xs md:text-[16px] font-Popins leading-[30px] text-text_color_body">
//           <ul>
//             <li> &gt; 2.5 Condiciones de humedad excepcional</li>
//             <li>2.0 a 2.5 Condiciones de humedad extrema</li>
//             <li>1.5 a 2.0 Condiciones de humedad fuerte</li>
//             <li>1.0 a 1.5 Condiciones de humedad moderada</li>
//             <li>1.0 a -1.0 Condiciones de normalidad</li>
//             <li>-1.0 a -1.5 Condiciones de sequía moderada</li>
//             <li>-1.5 a -2.0 Condiciones de sequía fuerte</li>
//             <li>-2.0 a -2.5 Condiciones de sequía extrema</li>
//             <li>&lt;-2.5 Condiciones de sequía excepcional</li>
//           </ul>
//           <p>Fuente:
//             https://www.meteo.cat/wpweb/climatologia/evolucio-observada-del-clima/estat-de-la-sequera/</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Context;
