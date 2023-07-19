// // VERSION INICIAL
// import React from "react";
// import Map_DefaultPrediction from "./Map_DefaultPrediction";
// import Form_DefaultPrediction from "./Form_DefaultPrediction";

// const DefaultPrediction = () => {
//   return (
//     <div>
//       <div className="text-center text-4xl font-Poppins text-text_green text-bold mb-14 mx-auto">
//         Prediction
//       </div>
//       <div className="flex flex-col lg:flex-row gap-8 mb-12 lg:mx-[200px] mx-6">
//         <div className="text-justify font-Poppins md:leading-[30px] text-xs md:text-[16px] text-text_color_body  xs:w-100% w-full lg:w-1/2">
//           <p>
//             A continuación podrá realizar su predicción de temperatura,
//             precipitaciones e índice de sequía estimados para la fecha que
//             desee.
//             <br />
//             Introduzca los datos necesarios en los siguientes campos:
//           </p>
//           <div className="w-full mt-[5%]">
//             <Form_DefaultPrediction />
//           </div>
//         </div>

//         <div className="Texto_Visible text-justify font-Poppins md:leading-[30px] text-xs md:text-[16px] text-text_color_body xs:w-100% w-full lg:w-1/2 ">
//           <div className="">
//             La interacción entre temperatura y precipitaciones es fundamental
//             para determinar el índice de sequía. Un aumento de la temperatura
//             puede acelerar la evaporación y reducir la disponibilidad de agua,
//             agravando la sequía. Por otro lado, una disminución de las
//             precipitaciones puede provocar un déficit hídrico. <br />
//             <br />
//             Para predecir la temperatura y las precipitaciones en Barcelona, se
//             tienen en cuenta varios factores. Para la temperatura, se consideran
//             los datos históricos, las tendencias climáticas, los patrones
//             estacionales, así como la influencia de fenómenos como El Niño y La
//             Niña. Además, también se utilizan modelos numéricos y algoritmos de
//             predicción basados en variables atmosféricas como la presión, la
//             humedad y la radiación solar. <br />
//             <br />
//             En cuanto a las precipitaciones, se analizan los datos históricos de
//             precipitaciones, los modelos climáticos, las oscilaciones
//             atmosféricas y los patrones de circulación atmosférica. atmosférica.
//             Estos factores se combinan con técnicas de modelización y análisis
//             estadístico para generar previsiones de precipitaciones que ayuden a
//             comprender los patrones de precipitación y estimar la cantidad y
//             distribución de las precipitaciones en Barcelona.
//           </div>
//         </div>
//         <div className="Mapa_Oculto">
//           <Map_DefaultPrediction />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DefaultPrediction;

// //  EN CASO DE CUALQUIER ERROR REGRESA A AQUI
// import React from "react";
// import Map_DefaultPrediction from "./Map_DefaultPrediction";
// import Form_DefaultPrediction from "./Form_DefaultPrediction";
// import Info_1 from "./Info_1";

// const DefaultPrediction = () => {
//   return (
//     <div id="prediction">
//       <div className="text-center text-3xl font-Poppins text-text_green text-bold mb-14 mx-auto">
//         Predicción
//       </div>
//       <div className="flex flex-col lg:flex-row gap-8 mb-20 ml-4 mr-4 sm:ml-[148px] sm:mr-24">
//         <div className="text-justify font-Poppins md:leading-[30px] text-xs md:text-[16px] text-text_color_body  xs:w-100% w-full lg:w-1/2 leading-[30px]">
//           <p>
//             A continuación podrá realizar su predicción de temperatura,
//             precipitaciones e índice de sequía estimados para la fecha que
//             desee.
//             <br />
//             Introduzca los datos necesarios en los siguientes campos:
//           </p>
//           <div className="w-full mt-[5%]">
//             <Form_DefaultPrediction />
//           </div>
//         </div>

//         <div className="Texto_Visible text-justify font-Poppins md:leading-[30px]  text-xs md:text-[16px] text-text_color_body xs:w-100% w-full lg:w-1/2 leading-[30px]">
//         <Info_1/>
//         </div>
//         <div className="Mapa_Oculto my-8">
//           <Map_DefaultPrediction />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DefaultPrediction;

// // SOLO PARRAFO DE INFO+ MAP
// import React, { useState } from "react";
// import Map_DefaultPrediction from "./Map_DefaultPrediction";
// import Form_DefaultPrediction from "./Form_DefaultPrediction";

// const DefaultPrediction = () => {
//   const [showInfo, setShowInfo] = useState(true);

//   return (
//     <div id="prediction">
//       <div className="text-center text-3xl font-Poppins text-text_green text-bold mb-14 mx-auto">
//         Predicción
//       </div>
//       <div className="flex flex-col lg:flex-row gap-8 mb-20 ml-4 mr-4 sm:ml-[148px] sm:mr-24">
//         <div className={`Text_${showInfo ? "Visible" : "Oculto"} text-justify font-Poppins md:leading-[30px]  text-xs md:text-[16px] text-text_color_body xs:w-100% w-full lg:w-1/2 leading-[30px]`}>
//           <Form_DefaultPrediction showInfo={showInfo} setShowInfo={setShowInfo} />
//         </div>
//       </div>
//         <div className=" my-8">
//           <Map_DefaultPrediction />
//         </div>
//     </div>
//   );
// };

// export default DefaultPrediction;

// // VERSION RARA
// import React, { useState } from "react";
// import Map_DefaultPrediction from "./Map_DefaultPrediction";
// import Form_DefaultPrediction from "./Form_DefaultPrediction";

// const DefaultPrediction = () => {
//   const [showInfo, setShowInfo] = useState(true);

//   return (
//     <div id="prediction">
//       <div className="text-center text-3xl font-Poppins text-text_green text-bold mb-14 mx-auto">
//         Predicción
//       </div>
//       <div className="flex flex-col lg:flex-row gap-8 mb-20 ml-4 mr-4 sm:ml-[148px] sm:mr-24">
//       <div className="text-justify font-Poppins md:leading-[30px] text-xs md:text-[16px] text-text_color_body  xs:w-100% w-full lg:w-1/2 leading-[30px]">
//       <p>
//             A continuación podrá realizar su predicción de temperatura,
//             precipitaciones e índice de sequía estimados para la fecha que
//             desee.
//             <br />
//             Introduzca los datos necesarios en los siguientes campos:
//           </p>
//       </div>
//         <div className={`Text_${showInfo ? "Visible" : "Oculto"} text-justify font-Poppins md:leading-[30px]  text-xs md:text-[16px] text-text_color_body xs:w-100% w-full lg:w-1/2 leading-[30px]`}>

//           <Form_DefaultPrediction showInfo={showInfo} setShowInfo={setShowInfo} />
//         </div>
//         <div className=" my-8">
//           <Map_DefaultPrediction />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DefaultPrediction;

import React, { useState } from "react";
import Map_DefaultPrediction from "./Map_DefaultPrediction";
import Form_DefaultPrediction from "./Form_DefaultPrediction";
import Results_DefaultPrediction from "./Results_DefaultPrediction";
import { WiNightStormShowers, WiThermometer,WiRaindrop } from "react-icons/wi";
import { BsDropletHalf } from "react-icons/bs";
const DefaultPrediction = () => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div id="prediction">
      <div className="text-center text-3xl font-Poppins text-text_green text-bold mb-14 mx-auto">
        Predicción
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mb-20 ml-4 mr-4 sm:ml-[148px] sm:mr-24">
        <div className="text-justify font-Poppins md:leading-[30px] text-xs md:text-[16px] text-text_color_body  xs:w-100% w-full lg:w-1/2 leading-[30px]">
          <div>
            <h2 className="text-text_green">¿Qué datos se necesitan?</h2>A
            continuación podrás realizar una predicción climática detallada para
            ello, necesitamos algunos datos importantes:
            <ul>
              <li>
                Periodo de interés:Por favor, ingresa la fecha para la cual
                deseas conocer la predicción del clima.
              </li>
              <li>
                Comarca: Indícanos la ubicación para la cual deseas obtener la
                predicción meteorológica.En este caso,se proporciona la comarca.
              </li>
            </ul>
            <br />
            <h2 className="text-text_green">¿Qué resultados se obtendrán?</h2>
            <ul>
              <li>
                Temperatura: La predicción indica la temperatura promedio
                esperada para la fecha seleccionada en la ubicación indicada.
              </li>
              <li>
                Precipitaciones: Esta sección muestra la cantidad de lluvia
                estimada para el día seleccionado.
              </li>
              <li>
                Índice de sequía: Indica la posible intensidad de la sequía para
                el periodo seleccionado. Un índice de sequía alto indica
                condiciones más secas y puede tener impactos en la agricultura,
                el suministro de agua y la vegetación. Si se prevé una sequía
                significativa, es importante estar preparado para tomar medidas
                adecuadas de conservación de agua y recursos naturales.
              </li>
            </ul>
            Una vez que completes los campos anteriores, nuestro sistema
            procesará la información y te proporcionará una predicción
            meteorológica para la fecha seleccionada en la ubicación
            indicada.Recuerda que los datos meteorológicos están sujetos a
            cambios, y siempre es recomendable verificar la predicción más
            cercana a la fecha de interés para obtener información actualizada.
          </div>
          <div>
            {/* <h2 className="text-text_green text-bold">RESULTADOS</h2>
            <ul>
              <li>
                <WiThermometer className="icons_results"/>Temperatura:
              </li>
              <li>
                <WiNightStormShowers className="icons_results"/>
                Lluvia:
              </li>
              <li>
              Indice de sequía SPI:
                <WiRaindrop className="icons_results" />
                <BsDropletHalf className="icons_results"/>
              </li>
            </ul> */}
            <div className="w-[40%]">

            <Results_DefaultPrediction/>
            </div>
          </div>
        </div>
        <div
          className={`text-justify font-Poppins md:leading-[30px]  text-xs md:text-[16px] text-text_color_body xs:w-100% w-full lg:w-1/2 leading-[30px]`}
        >
          <Form_DefaultPrediction
            showInfo={showInfo}
            setShowInfo={setShowInfo}
          />
        </div>
        <div className=" my-8">
          <Map_DefaultPrediction />
        </div>
      </div>
    </div>
  );
};

export default DefaultPrediction;
