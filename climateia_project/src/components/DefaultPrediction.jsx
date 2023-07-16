import React from "react";
import Map_DefaultPrediction from "./Map_DefaultPrediction";

const DefaultPrediction = () => {
  return (
    <div>
      <div className="text-center text-4xl font-Poppins text-text_green text-bold mb-20 mx-auto">
        Prediction
      </div>
      <div className="flex flex-row gap-10  mb-12 mx-32 items-stretch">
        <div className="flex flex-col gap-6 w-1/2">
          <div className="text-justify font-Poppins leading-[25.6px] text-text_color_body">
            Then you can make your prediction of temperature, rainfall and
            drought index estimated for the date you want.
            <br />
            Enter the required data in the following fields:
          </div>
          <Map_DefaultPrediction />
          <div className="shadow-[0px_16px_30px_0px_rgba(50,_175,_100,_0.15)] bg-white self-start flex flex-col justify-center ml-32 h-16 shrink-0 items-center rounded-[35px]">
            <div className="text-center text-lg font-Poppins font-bold text-text_green w-2/5 mx-12">
              PREDICT
            </div>
          </div>
        </div>
        <div className="text-justify font-Poppins leading-[25.6px] text-text_color_body self-start w-1/2">
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
          the amount and distribution of rainfall in Barcelona. Translated with
          www.DeepL.com/Translator (free version)
        </div>
      </div>
    </div>
  );
};

export default DefaultPrediction;
