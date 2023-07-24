import React from "react";
import jsonData from "../data/datagenerated_defaultprediction.json"; // Importa el archivo JSON

const Results_DefaultPrediction = () => {
  let data = {}; // Inicializa los datos vacíos

  try {
    data = jsonData; // Intenta importar el archivo JSON
  } catch (error) {
    console.error("Error al cargar los datos:", error); // Muestra el mensaje de error en la consola
  }
  // Función para obtener el mensaje según el valor de SPI
  const getSPIMessage = (spi) => {
    if (spi >= 2.0 && spi <= 2.5) {
      return "Condiciones de humedad extrema";
    } else if (spi >= 1.5 && spi < 2.0) {
      return "Condiciones de humedad fuerte";
    } else if (spi >= 1.0 && spi < 1.5) {
      return "Condiciones de humedad moderada";
    } else if (spi >= -1.0 && spi < 1.0) {
      return "Condiciones de normalidad";
    } else if (spi >= -1.5 && spi < -1.0) {
      return "Condiciones de sequía moderada";
    } else if (spi >= -2.0 && spi < -1.5) {
      return "Condiciones de sequía fuerte";
    } else if (spi >= -2.5 && spi < -2.0) {
      return "Condiciones de sequía extrema";
    } else {
      return "Valor de SPI no definido";
    }
  };
  // Función para obtener el mensaje según el valor de SPI
  const getRainMessage = (precipitacion) => {
    if (precipitacion / 24 < 2.0) {
      return "Lluvias débiles";
    } else if (precipitacion / 24 >= 2.0 && precipitacion / 24 <= 15) {
      return "Lluvias moderadas";
    } else if (precipitacion / 24 > 15 && precipitacion / 24 <= 30) {
      return "Lluvias fuertes";
    } else if (precipitacion / 24 > 30 && precipitacion / 24 <= 60) {
      return "Lluvias muy fuertes";
    } else if (precipitacion / 24 > 60) {
      return "Torrenciales";
    } else {
      return "Intensidad de lluvia no definida";
    }
  };
  return (
    <>
      {/* Condición para mostrar los datos solo si el archivo JSON existe */}
      {Object.keys(data).length > 0 && (
        <>
          <div className="flex flex-row gap-5 sm:flex-col md:flex-row">
            {/* Temperatura */}
            <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white text-black flex flex-row justify-center  sm:h-20 h-[80px]  items-center rounded-[30px] gap-3 md:text-base text-sm">
              <img
                src="https://file.rendit.io/n/YEd8w5sfU8i9gyOuN5qM.svg"
                className="min-h-0 min-w-0 w-5"
              />
              <div className="relative flex flex-col pb-5 w-[180px]">
                <div className="text-center w-[180px] h-[42.03%] font-bold leading-[22.4px] text-text_green absolute top-10 left-0">
                  {data.temperatura} º C
                </div>
                <div className="text-center font-Poppins text-text_color_green bg-[transparent] h-full text-xl font-bold">
                  Temperatura
                </div>
              </div>
            </div>

            {/* Precipitación */}
            <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white text-blackflex flex-row justify-center sm:h-20 h-[80px] items-center rounded-[30px] gap-3 md:text-base text-sm">
              <img
                src="https://file.rendit.io/n/sOBspRzRkGrffSNZxAIj.svg"
                className="min-h-0 min-w-0 w-7 "
              />
              <div className="relative flex flex-col pb-5 w-[180px]">
                <div className="text-center w-[180px] h-[42.03%] font-bold leading-[22.4px] text-text_green absolute top-10 left-0">
                  {data.precipitacion} mm/h {getRainMessage(data.precipitacion)}
                </div>
                <div className="text-center font-Poppins text-text_color_green bg-[transparent] h-full text-xl font-bold">
                  Precipitación
                </div>
              </div>
            </div>

            {/* Sequía IPS */}
            <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white text-black flex flex-row justify-center sm:h-20 h-[80px]  items-center rounded-[30px] gap-3 md:text-base text-sm">
              <img
                src="https://file.rendit.io/n/BFDKisltuTtE978bOMpq.svg"
                className="min-h-0 min-w-0 self-start mt-4 w-5 ml-1"
              />
              <div className="relative flex flex-col pb-5 w-48">
                <div className="text-center w-48 h-[42.03%] font-bold leading-[22.4px] text-text_green absolute top-10 left-0">
                  {data.SPI} % {getSPIMessage(data.SPI)}
                </div>
                <div className="text-center font-Poppins text-text_color_green bg-[transparent] h-full text-xl font-bold">
                  Sequía IPS
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Si no se pueden cargar los datos o el archivo JSON no existe */}
      {Object.keys(data).length === 0 && <div>Error: Datos no encontrados</div>}
    </>
  );
};

export default Results_DefaultPrediction;
