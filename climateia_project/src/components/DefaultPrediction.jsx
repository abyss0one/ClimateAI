import React from "react";
import Map_DefaultPrediction from "./Map_DefaultPrediction";

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
          <div className="w-full mt-[25%]">
            <Map_DefaultPrediction />
          </div>
          <div className="w-full lg:w-[30%] flex justify-center py-3 rounded-[35px] border border-text_green transition-colors hover:bg-hover_btn hover:font-bold mt-[25%]">
            <button className="text-lg font-Poppins font-bold text-text_green w-full hover:text-white">
              PREDICT
            </button>
          </div>
        </div>

        <div className="text-justify font-Poppins md:leading-[30px] text-xs md:text-[16px] text-text_color_body xs:w-100% w-full lg:w-1/2 ">
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
      </div>
    </div>
  );
};

export default DefaultPrediction;
