import React from "react";

const Info_1 = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-text_green">¿Cómo se realiza la predicción?</h2>
        Para predecir la temperatura y las precipitaciones en Barcelona, se
        tienen en cuenta varios factores. Para la temperatura, se consideran los
        datos históricos, las tendencias climáticas, los patrones estacionales,
        así como la influencia de fenómenos como El Niño y La Niña. Además,
        también se utilizan modelos numéricos y algoritmos de predicción basados
        en variables atmosféricas como la presión, la humedad y la radiación
        solar. <br />
        En cuanto a las precipitaciones, se analizan los datos históricos de
        precipitaciones, los modelos climáticos, las oscilaciones atmosféricas y
        los patrones de circulación atmosférica. atmosférica. Estos factores se
        combinan con técnicas de modelización y análisis estadístico para
        generar previsiones de precipitaciones que ayuden a comprender los
        patrones de precipitación y estimar la cantidad y distribución de las
        precipitaciones en Barcelona.
      </div>
    </div>
  );
};

export default Info_1;

// // ESTA VERSIÓN ESTÁ POR MEJORAR
// import React from "react";

// const Info_1 = () => {
//   return (
//     <div>
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="text-justify font-Poppins md:leading-[30px] text-xs md:text-[16px] text-text_color_body  xs:w-100% w-full lg:w-1/2 leading-[30px]">
//           <p>
//             A continuación podrá realizar su predicción de temperatura,
//             precipitaciones e índice de sequía estimados para la fecha que
//             desee.
//             <br />
//             Introduzca los datos necesarios en los siguientes campos:
//           </p>
//         </div>
//         <div className="text-justify font-Poppins md:leading-[30px]  text-xs md:text-[16px] text-text_color_body xs:w-100% w-full lg:w-1/2 leading-[30px]">
//           La interacción entre temperatura y precipitaciones es fundamental para
//           determinar el índice de sequía. Un aumento de la temperatura puede
//           acelerar la evaporación y reducir la disponibilidad de agua, agravando
//           la sequía. Por otro lado, una disminución de las precipitaciones puede
//           provocar un déficit hídrico. <br />
//           <br />
//           Para predecir la temperatura y las precipitaciones en Barcelona, se
//           tienen en cuenta varios factores. Para la temperatura, se consideran
//           los datos históricos, las tendencias climáticas, los patrones
//           estacionales, así como la influencia de fenómenos como El Niño y La
//           Niña. Además, también se utilizan modelos numéricos y algoritmos de
//           predicción basados en variables atmosféricas como la presión, la
//           humedad y la radiación solar. <br />
//           <br />
//           En cuanto a las precipitaciones, se analizan los datos históricos de
//           precipitaciones, los modelos climáticos, las oscilaciones atmosféricas
//           y los patrones de circulación atmosférica. atmosférica. Estos factores
//           se combinan con técnicas de modelización y análisis estadístico para
//           generar previsiones de precipitaciones que ayuden a comprender los
//           patrones de precipitación y estimar la cantidad y distribución de las
//           precipitaciones en Barcelona.
//           <br />
//           <br />A continuación podrá realizar su predicción de temperatura,
//           precipitaciones e índice de sequía estimados para la fecha que desee.
//           <br />
//           Introduzca los datos necesarios en los siguientes campos:
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info_1;
