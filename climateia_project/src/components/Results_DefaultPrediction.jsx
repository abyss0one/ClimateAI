// import React from "react";
// import jsonData from "../data/datagenerated_defaultprediction.json"; // Importa el archivo JSON
// import { useTranslation } from "react-i18next";
// const Results_DefaultPrediction = () => {
//   const { t } = useTranslation();
//   let data = {}; // Inicializa los datos vacíos

//   try {
//     data = jsonData; // Intenta importar el archivo JSON
//   } catch (error) {
//     console.error("Error al cargar los datos:", error); // Muestra el mensaje de error en la consola
//   }
//   // Función para obtener el mensaje según el valor de SPI
//   const getSPIMessage = (spi) => {
//     if (spi >= 2.0 && spi <= 2.5) {
//       return "Condiciones de humedad extrema";
//     } else if (spi >= 1.5 && spi < 2.0) {
//       return "Condiciones de humedad fuerte";
//     } else if (spi >= 1.0 && spi < 1.5) {
//       return "Condiciones de humedad moderada";
//     } else if (spi >= -1.0 && spi < 1.0) {
//       return "Condiciones de normalidad";
//     } else if (spi >= -1.5 && spi < -1.0) {
//       return "Condiciones de sequía moderada";
//     } else if (spi >= -2.0 && spi < -1.5) {
//       return "Condiciones de sequía fuerte";
//     } else if (spi >= -2.5 && spi < -2.0) {
//       return "Condiciones de sequía extrema";
//     } else {
//       return "Valor de SPI no definido";
//     }
//   };
  // // Función para clasificar tipo de lluvia según clasificación
  // const getRainMessage = (precipitacion) => {
  //   if (precipitacion == 1) {
  //     return t("results.rainG1");
  //   } else if (precipitacion == 2) {
  //     return t("results.rainG2");
  //   } else if (precipitacion == 3) {
  //     return t("results.rainG3");
  //   } else if (precipitacion == 4) {
  //     return t("results.rainG4");
  //   } else if (precipitacion == 5) {
  //     return t("results.rainG5");
  //   } else if (precipitacion == 0) {
  //     return t("results.rainG6");
  //   } else {
  //     return t("results.rainG6");
  //   }
  // };
//   return (
//     <>
//       {/* Condición para mostrar los datos solo si el archivo JSON existe */}
//       {Object.keys(data).length > 0 && (
//         <>
//           <div className="flex flex-nowrap md:flex-row flex-col justify-evenly md:items-center items-start w-[650px] gap-3  ">
//             {/* T2 */}
// <div className="flex flex-row justify-evenly items-center bg-bg_charts shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] rounded-[20px] w-[30%] h-16">
// <div className="w-[40%}">
//   <img
//     src="https://file.rendit.io/n/YEd8w5sfU8i9gyOuN5qM.svg"
//     className="w-5"
//   />
// </div>
// <div className="w-[40%} flex flex-col justify-around align-middle">
//   <div className="font-bold text-lg text-center font-Poppins text-text_color_body">
//     {t("results.title1")}
//   </div>
//   <div className="text-text_green font-bold text-center font-Poppins ">
//     {" "}
//     {data.temperatura.toFixed(2)} º C
//   </div>
//   </div>
//             </div>
//             {/* P2 */}
//             <div className="flex flex-row justify-evenly items-center bg-bg_charts shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] rounded-[20px] w-[30%] h-16">
              // <div className="w-[40%}">
              //   <img
              //     src="https://file.rendit.io/n/sOBspRzRkGrffSNZxAIj.svg"
              //     className="w-5"
              //   />
              // </div>
              // <div className="w-[40%} flex flex-col justify-around align-middle">
              //   <div className="font-bold text-lg text-center font-Poppins text-text_color_body">
              //   {t("results.title2")}
              //   </div>
              //   <div className="text-text_green font-bold text-center font-Poppins ">
              //     {getRainMessage(data.precipitacion)}
              //   </div>
              // </div>
//             </div>
//             {/* H2 */}
//             <div className="flex flex-row justify-evenly items-center bg-bg_charts shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] rounded-[20px] w-[30%] h-16">
              // <div className="w-[40%}">
              //   <img
              //     src="https://file.rendit.io/n/BFDKisltuTtE978bOMpq.svg"
              //     className="w-5"
              //   />
              // </div>
              // <div className="w-[40%} flex flex-col justify-around align-middle">
              //   <div className="font-bold text-lg text-center font-Poppins text-text_color_body">
              //   {t("results.title3")}
              //   </div>
              //   <div className="text-text_green font-bold text-center font-Poppins ">
              //   {data.humedad.toFixed(2)} %
              //   </div>
              // </div>
//             </div>
//           </div>

//         </>
//       )}

//       {/* Si no se pueden cargar los datos o el archivo JSON no existe */}
//       {Object.keys(data).length === 0 && <div> {t("results.error")}</div>}
//     </>
//   );
// };

// export default Results_DefaultPrediction;


// TODO ESTA VERSIÓN NO ESTÁ BIEN,SIN EMBARGO SERVIRÁ PARA LA PRESENTACIÓN
import React, { useState, useEffect } from "react";
import jsonData from "../data/datagenerated_defaultprediction.json";
import { useTranslation } from "react-i18next";

const Results_DefaultPrediction = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
// Función para clasificar tipo de lluvia según clasificación
    const getRainMessage = (precipitacion) => {
      if (precipitacion == 1) {
        return t("results.rainG1");
      } else if (precipitacion == 2) {
        return t("results.rainG2");
      } else if (precipitacion == 3) {
        return t("results.rainG3");
      } else if (precipitacion == 4) {
        return t("results.rainG4");
      } else if (precipitacion == 5) {
        return t("results.rainG5");
      } else if (precipitacion == 0) {
        return t("results.rainG6");
      } else {
        return t("results.rainG6");
      }
    };

  useEffect(() => {
    try {
      setData(jsonData);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }, []);

  useEffect(() => {
    // Mostrar el popup siempre que se actualice el estado 'data'
    if (Object.keys(data).length > 0) {
      const { temperatura, humedad } = data;
      // Aquí puedes realizar cualquier lógica de comparación según tus necesidades
      // Por ejemplo, si temperatura o humedad cumplen ciertas condiciones, mostrar el popup
      if (jsonData !=data) {
        setShowPopup(true);
      }
    }
  }, [data]);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {/* Condición para mostrar los datos solo si el archivo JSON existe */}
      {Object.keys(data).length > 0 && (
        <>
          <div className="flex flex-nowrap md:flex-row flex-col justify-evenly md:items-center items-start w-[650px] gap-3  ">
            {/* T2 */}
            <div className="flex flex-row justify-evenly items-center bg-bg_charts shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] rounded-[20px] w-[30%] h-16">
              <div className="w-[40%}">
                <img
                  src="https://file.rendit.io/n/YEd8w5sfU8i9gyOuN5qM.svg"
                  className="w-5"
                />
              </div>
              <div className="w-[40%} flex flex-col justify-around align-middle">
                <div className="font-bold text-lg text-center font-Poppins text-text_color_body">
                  {t("results.title1")}
                </div>
                <div className="text-text_green font-bold text-center font-Poppins ">
                  {" "}
                  {data.temperatura.toFixed(2)} º C
                </div>
              </div>
            </div>
            {/* P2 */}
            <div className="flex flex-row justify-evenly items-center bg-bg_charts shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] rounded-[20px] w-[30%] h-16">
            <div className="w-[40%}">
                <img
                  src="https://file.rendit.io/n/sOBspRzRkGrffSNZxAIj.svg"
                  className="w-5"
                />
              </div>
              <div className="w-[40%} flex flex-col justify-around align-middle">
                <div className="font-bold text-lg text-center font-Poppins text-text_color_body">
                {t("results.title2")}
                </div>
                <div className="text-text_green font-bold text-center font-Poppins ">
                  {getRainMessage(data.precipitacion)}
                </div>
              </div>
            </div>
            {/* H2 */}
            <div className="flex flex-row justify-evenly items-center bg-bg_charts shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] rounded-[20px] w-[30%] h-16">
            <div className="w-[40%}">
                <img
                  src="https://file.rendit.io/n/BFDKisltuTtE978bOMpq.svg"
                  className="w-5"
                />
              </div>
              <div className="w-[40%} flex flex-col justify-around align-middle">
                <div className="font-bold text-lg text-center font-Poppins text-text_color_body">
                {t("results.title3")}
                </div>
                <div className="text-text_green font-bold text-center font-Poppins ">
                {data.humedad.toFixed(2)} %
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Si no se pueden cargar los datos o el archivo JSON no existe */}
      {Object.keys(data).length === 0 && <div> {t("results.error")}</div>}
            {/* Popup */}
            {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <span className="popup-close" onClick={handleClosePopup}>
              X
            </span>
            <div className="popup-content">
              <p>Predicción realizada</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Results_DefaultPrediction;
