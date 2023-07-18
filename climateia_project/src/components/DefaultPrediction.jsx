import React from "react";
import Map_DefaultPrediction from "./Map_DefaultPrediction";
import Form_DefaultPrediction from "./Form_DefaultPrediction";

const DefaultPrediction = () => {
  return (
    <div>
      <div className="text-center text-4xl font-Poppins text-text_green text-bold mb-14 mx-auto">
        Prediction
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mb-12 lg:mx-[200px] mx-6">
        <div className="text-justify font-Poppins md:leading-[30px] text-xs md:text-[16px] text-text_color_body  xs:w-100% w-full lg:w-1/2">
          <p>
            Then you can make your prediction of temperature, rainfall and
            drought index estimated for the date you want. <br />
            Enter the required data in the following fields:
          </p>
          <div className="w-full mt-[5%]">
            <Form_DefaultPrediction />
          </div>
        </div>

        <div className="Texto_Visible text-justify font-Poppins md:leading-[30px] text-xs md:text-[16px] text-text_color_body xs:w-100% w-full lg:w-1/2 ">
          The interaction between temperature and rainfall is critical in
          determining the drought index. An increase in temperature can
          accelerate evaporation and reduce water availability, aggravating
          drought. On the other hand, a decrease in the amount of rainfall can
          lead to a water deficit.
          <br />
          <br />
          To predict temperature and rainfall in Barcelona, several factors are
          taken into account. For temperature, historical data, climate trends,
          seasonal patterns, as well as the influence of phenomena such as El
          Niño and La Niña are considered. In addition, numerical models and
          numerical models and prediction algorithms based on atmospheric
          variables such as pressure, humidity and solar radiation are also
          used.
          <br />
          <br />
          For rainfall, historical precipitation data, climate models,
          atmospheric oscillations and atmospheric circulation patterns are
          analyzed. atmospheric circulation patterns. These factors are combined
          with modeling and statistical analysis techniques to generate rainfall
          forecasts that help to understand precipitation patterns and estimate
          the amount and distribution of rainfall in Barcelona.
        </div>
        <div className="Mapa_Oculto">
          <Map_DefaultPrediction />
        </div>
      </div>
    </div>
  );
};

export default DefaultPrediction;
