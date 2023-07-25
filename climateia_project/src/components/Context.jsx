import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import LineChartCat from "./LineChartCat";
import BarChartCat from "./BarChartCat";
import { useTranslation } from "react-i18next";
const Context = () => {
  const { t } = useTranslation();
  return (
    <div
      id="context"
      className="flex flex-col items-center dark:bg-bkg_dark_mode "
    >
      <div className=" flex flex-col justify-between mt-6 gap-3  ml-4 mr-4 sm:ml-[148px] sm:mr-24 ">
        <div className="text-center justify-center items-center  text-3xl font-Poppins text-text_green text-bold mx-8 md:mx-24 dark:text-txt_dark_mode">
          {t("context.title")}
        </div>
        <div className="my-8 text-justify font-Poppins leading-[30px] text-text_color_body text-sm md:text-base dark:text-txt_dark_mode">
          {t("context.text1")}
        </div>
        <div className="flex flex-col gap-5 lg:flex-row pb-10">
          {/* TODO al haber comentado la sección del SPI se a añadido arriba un pb-10 si se vuelve a poner,quitarlo. */}
          <div className=" shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-full lg:w-1/2 items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-Poppins text-text_green bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              {t("context.titleMap1")}
            </div>
            <div className="aspect-w-2 aspect-h-1 w-full items-center justify-center">
              <LineChartCat />
            </div>
          </div>
          <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-col gap-3 w-full lg:w-1/2 items-center px-5 py-4 rounded-[30px]">
            <div className="text-center text-2xl font-Poppins text-text_green bg-[transparent] mb-5 w-2/3 h-[16.99%]">
              {t("context.titleMap2")}
            </div>
            <div className="aspect-w-2 aspect-h-1 w-full items-center justify-center">
              <BarChartCat />
            </div>
          </div>
        </div>
        <div className="my-8 text-justify text-sm md:text-base font-Poppins leading-[30px] text-text_color_body dark:text-txt_dark_mode">
          <p>
          {t("context.text2")}
          </p>
        </div>
        {/* <div className="my-8 text-justify text-sm md:text-base font-Poppins leading-[30px] text-text_color_body dark:text-txt_dark_mode">
          <p>
          Nuestra misión va más allá de brindar simplemente datos meteorológicos. Aprovecharemos esta plataforma para sensibilizar y concienciar a todos sobre la problemática del cambio climático que se está manifestando en nuestra propia región. Nuestro chatbot estará disponible para brindar consejos sobre cómo ser más sostenibles en el día a día, porque cada pequeña acción cuenta y puede marcar la diferencia.
Invitamos a todos a reflexionar sobre nuestras acciones cotidianas y cómo pueden impactar en el medio ambiente. Juntos, podemos tomar decisiones más conscientes, adoptar prácticas sostenibles y promover cambios positivos para preservar el entorno natural, no solo para nosotros, sino también para las generaciones futuras.
En esta travesía hacia la concienciación y la acción climática, esperamos que nuestra plataforma sea una fuente de conocimiento, inspiración y colaboración. Únete a nosotros en esta importante misión de proteger y conservar nuestro planeta, haciendo frente al cambio climático y construyendo un futuro más sostenible para Cataluña y el mundo entero. ¡Juntos podemos marcar la diferencia!
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

        <div className="text-justify text-sm md:text-base font-Popins leading-[30px] text-text_color_body mb-20 dark:text-txt_dark_mode">
          <ul>
            <li className="flex items-center">     <div className="w-2 h-2 bg-text_green rounded-full mr-2"></div>&gt; 2.5 Condiciones de humedad excepcional</li>
            <li className="flex items-center">     <div className="w-2 h-2 bg-text_green rounded-full mr-2"></div>2.0 a 2.5 Condiciones de humedad extrema</li>
            <li className="flex items-center">     <div className="w-2 h-2 bg-text_green rounded-full mr-2"></div>1.5 a 2.0 Condiciones de humedad fuerte</li>
            <li className="flex items-center">     <div className="w-2 h-2 bg-text_green rounded-full mr-2"></div>1.0 a 1.5 Condiciones de humedad moderada</li>
            <li className="flex items-center">     <div className="w-2 h-2 bg-text_green rounded-full mr-2"></div>1.0 a -1.0 Condiciones de normalidad</li>
            <li className="flex items-center">     <div className="w-2 h-2 bg-text_green rounded-full mr-2"></div>-1.0 a -1.5 Condiciones de sequía moderada</li>
            <li className="flex items-center">     <div className="w-2 h-2 bg-text_green rounded-full mr-2"></div>-1.5 a -2.0 Condiciones de sequía fuerte</li>
            <li className="flex items-center">     <div className="w-2 h-2 bg-text_green rounded-full mr-2"></div>-2.0 a -2.5 Condiciones de sequía extrema</li>
            <li className="flex items-center">     <div className="w-2 h-2 bg-text_green rounded-full mr-2"></div>&lt;-2.5 Condiciones de sequía excepcional</li>
          </ul>
          <p>Fuente:
            https://www.meteo.cat/wpweb/climatologia/evolucio-observada-del-clima/estat-de-la-sequera/</p>
        </div> */}
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
