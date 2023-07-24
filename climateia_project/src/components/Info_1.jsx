import React from "react";

const Info_1 = () => {
  return (
    <div>
      <div className="mb-10 text-sm md:text-base dark:text-txt_dark_mode">
        <h2 className="text-text_green text-base">¿Cómo se realiza la predicción?</h2>
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
