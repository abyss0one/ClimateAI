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
import { useTranslation } from 'react-i18next';

const DefaultPrediction = () => {
  const [showInfo, setShowInfo] = useState(true);
  const { t } = useTranslation();
  return (
    <div id="prediction" className="dark:bg-bkg_dark_mode bg-white_soft">
      <div className="text-center text-3xl font-Poppins text-text_green text-bold mb-14 mx-auto dark:text-txt_dark_mode">
      {t('defaultPrediction.title')}
      </div>
      <div className="flex flex-col lg:flex-row gap-8 pb-20 ml-4 mr-4 sm:ml-[148px] sm:mr-24 ">
        <div className="text-justify font-Poppins md:leading-[30px] text-sm md:text-base text-text_color_body  xs:w-100% w-full lg:w-1/2 leading-[30px] dark:text-txt_dark_mode">
          <div>
            <h2 className="text-text_green text-base">{t('defaultPrediction.subtitle1')}</h2>
            {t('defaultPrediction.text1')}
            <ul>
              <li>
              {t('defaultPrediction.li1')}
              </li>
              <li>
              {t('defaultPrediction.li2')}
              </li>
            </ul>
            <br />
            <h2 className="text-text_green text-base">{t('defaultPrediction.subtitle2')}</h2>
            <ul>
              <li>
              {t('defaultPrediction.li3')}
              </li>
              <li>
              {t('defaultPrediction.li4')}
              </li>
              <li>
              {t('defaultPrediction.li5')}
              </li>
            </ul>
            {t('defaultPrediction.text2')}
          </div>
          <div className={`w-[50%]  mt-10 ${showInfo ? "hidden" : "block" }` }>
            <Results_DefaultPrediction />
          </div>
        </div>
        <div
          className={`text-justify font-Poppins md:leading-[30px]  text-sm md:text-base text-text_color_body xs:w-100% w-full lg:w-1/2 leading-[30px]`}
        >
          <Form_DefaultPrediction
            showInfo={showInfo}
            setShowInfo={setShowInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultPrediction;
