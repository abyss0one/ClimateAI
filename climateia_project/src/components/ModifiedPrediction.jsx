import React from "react";

const ModifiedPrediction = () => {
  return (
    <div>
      <div className="text-center text-4xl font-['Corbel'] text-[#658e47] bg-[linear-gradient(180deg,_#658e47_0%,_#658e47_100%)] mb-16 ml-[148px] mr-24">
        Interact
      </div>
      <div className="flex flex-row gap-8 items-center mb-16 mx-32">
        <div className="self-start relative flex flex-col w-1/2">
          <img
            src="https://file.rendit.io/n/9vpGaUz3HhiIEOz5yATz.png"
            className="w-3 h-4 min-h-0 min-w-0 absolute top-[299px] left-[281px]"
          />
          <div className="text-justify font-['Corbel'] leading-[25.6px] text-[#565656]">
            La interacción entre la temperatura y la cantidad de lluvia es
            fundamental para determinar el índice de sequía. Un aumento de la
            temperatura puede acelerar la evaporación y reducir la
            disponibilidad de agua, agravando la sequía. Por otro lado, una
            disminución en la cantidad de lluvia puede llevar a un déficit
            hídrico.
            <br />
            <br />
            Para predecir la temperatura y la lluvia en Barcelona, se tienen en
            cuenta varios factores. Para la temperatura, se consideran datos
            históricos, tendencias climáticas, patrones estacionales, así como
            la influencia de fenómenos como El Niño y La Niña. Además, se
            utilizan modelos numéricos y algoritmos de predicción basados en
            variables atmosféricas, como la presión, la humedad y la radiación
            solar.
            <br />
            <br />
            En cuanto a la lluvia, se analizan datos históricos de
            precipitaciones, modelos climáticos, oscilaciones atmosféricas y
            patrones de circulación atmosférica. Estos factores se combinan con
            técnicas de modelado y análisis estadístico para generar pronósticos
            de lluvia que ayuden a comprender los patrones de precipitación y
            estimar la cantidad y la distribución de las lluvias en Barcelona.
          </div>
        </div>
        <div className="flex flex-col gap-6 w-1/2 h-[461px]">
          <div className="text-justify font-['Corbel'] leading-[25.6px] text-[#565656] h-[22.78%]">
            A continuación podrás realizar
            {"  "}
            tu prediccion de temperatura ,lluvia e índice de squía estimada para
            la fecha que desees.
            <br />
            Introduce los datos requeridos en los siguientes campos:
          </div>
          <div className="border-solid border-[#134e1c] overflow-hidden bg-[#f9fcff] relative flex flex-col items-end mb-6 ml-[173px] mr-0 px-12 border-2 rounded">
            <div className="w-[425px] text-2xl font-['SF_Pro_Text'] font-medium tracking-[0.26961862564086914] text-[#648f4d] absolute top-5 left-16 h-5">
              New York, United States
            </div>
            <img
              src="https://file.rendit.io/n/jhSEEqBabpF4BFvARWqC.svg"
              className="min-h-0 min-w-0 w-16"
            />
          </div>
          <div className="border-solid border-[#134e1c] overflow-hidden bg-[#f9fcff] relative flex flex-col items-end mb-12 ml-[173px] mr-0 px-12 border-2 rounded">
            <div className="w-[425px] text-2xl font-['SF_Pro_Text'] font-medium tracking-[0.26961862564086914] text-[#648f4d] absolute top-5 left-16 h-5">
              New York, United States
            </div>
            <img
              src="https://file.rendit.io/n/jhSEEqBabpF4BFvARWqC.svg"
              className="min-h-0 min-w-0 w-16"
            />
          </div>
          <div className="shadow-[0px_16px_30px_0px_rgba(50,_175,_100,_0.15)] bg-white self-end flex flex-col justify-center h-16 shrink-0 items-center rounded-[35px]">
            <div className="text-center text-lg font-['Poppins'] font-bold text-[#6cb981] w-2/5 mx-12">
              PREDICT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifiedPrediction;
