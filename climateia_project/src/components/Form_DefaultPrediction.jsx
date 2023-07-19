// import React, { Component } from "react";
// import Map_DefaultPrediction from "./Map_DefaultPrediction";
// import mapData from "../data/archivo_actualizado.json";

// class Form_DefaultPrediction extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedComarcaId: "",
//       selectedYear: "7",
//       showError: false,
//       showMap: false,
//     };
//   }

//   handleComarcaSelect = (event) => {
//     const selectedComarcaId = parseInt(event.target.value);
//     this.setState({ selectedComarcaId });
//   };

//   handleYearSelect = (event) => {
//     const selectedYear = event.target.value;
//     this.setState({ selectedYear });
//   };

//   handleButtonClick = () => {
//     const { selectedComarcaId, selectedYear } = this.state;
//     const selectedComarca = mapData.features.find(
//       (comarca) => comarca.properties.cartodb_id === selectedComarcaId
//     );

//     if (selectedComarca) {
//       console.log(
//         "Comarca seleccionada:",
//         selectedComarca.properties.nom_comar
//       );
//       console.log("Periodo seleccionado:", selectedYear);
//       this.setState({ showError: false, showMap: true });
//     } else {
//       this.setState({ showError: true, showMap: false });
//     }
//   };

//   render() {
//     const { selectedComarcaId, selectedYear, showError, showMap } = this.state;

//     const comarcaOptions = [
//       { value: "", label: "Comarcas..." },
//       ...mapData.features.map((comarca) => ({
//         value: comarca.properties.cartodb_id.toString(),
//         label: comarca.properties.nom_comar,
//       })),
//     ];

//     return (
//       <div>
//         <form className="bg-gray-100 p-6 rounded-lg">
//           <div className="mb-6">
//             <label
//               htmlFor="yearSelect"
//               className="block text-text_green font-bold mb-2"
//             >
//               Selecciona periodo:
//             </label>
//             <select
//               id="yearSelect"
//               value={selectedYear}
//               onChange={this.handleYearSelect}
//               className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
//             >
//               <option value="7">7 días</option>
//               <option value="15">15 días</option>
//               <option value="30">1 mes</option>
//               <option value="90">3 meses</option>
//               <option value="180">6 meses</option>
//               <option value="365">1 año</option>
//             </select>
//           </div>

//           <div>
//             <label
//               htmlFor="comarcaSelect"
//               className="block text-text_green font-bold mb-2"
//             >
//               Selecciona comarca:
//             </label>
//             <select
//               id="comarcaSelect"
//               value={selectedComarcaId}
//               onChange={this.handleComarcaSelect}
//               className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
//             >
//               {comarcaOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//             {showError && (
//               <p className="text-red-500 mt-2">
//                 Por favor, seleccione una comarca.
//               </p>
//             )}
//           </div>
//         </form>
//         <div className="w-full lg:w-[30%] flex justify-center py-3 rounded-[35px] border border-text_green transition-colors hover:bg-hover_btn hover:font-bold mt-[5%] mb-[5%]">
//           <button
//             type="button"
//             onClick={this.handleButtonClick}
//             className="text-lg font-Poppins font-bold text-text_green w-full hover:text-white justify-center "
//           >
//             Predecir
//           </button>
//         </div>
//         {showMap && (
//           <Map_DefaultPrediction
//             selectedComarca={selectedComarcaId}
//             selectedYear={selectedYear}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default Form_DefaultPrediction;


// VERSIÓN 2
import React, { Component } from "react";
import Map_DefaultPrediction from "./Map_DefaultPrediction";
import mapData from "../data/archivo_actualizado.json";

const [prediction, setPrediction] = React.useState (0);

class Form_DefaultPrediction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComarcaId: "",
      selectedYear: "7",
      showError: false,
      showMap: false,
    };
  }

  handleComarcaSelect = (event) => {
    const selectedComarcaId = parseInt(event.target.value);
    this.setState({ selectedComarcaId });
  };

  handleYearSelect = (event) => {
    const selectedYear = event.target.value;
    this.setState({ selectedYear });
  };

  handleButtonClick = () => {
    const { selectedComarcaId, selectedYear } = this.state;
    const selectedComarca = mapData.features.find(
      (comarca) => comarca.properties.cartodb_id === selectedComarcaId
    );

    if (selectedComarca) {
      console.log(
        "Comarca seleccionada:",
        selectedComarca.properties.nom_comar
      );
      console.log("Periodo seleccionado:", selectedYear);
      // this.pythonConnect(selectedComarcaId, selectedYear);
      this.setState({ showError: false, showMap: true });
    } else {
      this.setState({ showError: true, showMap: false });
    }
  };

  pythonConnect = (comarca, fecha) => {
    const { spawn } = require("child_process");
    const pythonScriptPath = "../src/py/server.py";

    const COMARCA = Form_DefaultPrediction.state.selectedComarca;
    const fecha_prediction = Form_DefaultPrediction.state.selectedYear;

    const pythonScript = spawn("python", [
      pythonScriptPath,
      COMARCA,
      fecha_prediction,
    ]);
    console.log(pythonScript);

    // Manejar la salida del script de Python
    pythonScript.stdout.on("data", (data) => {
      console.log(`Salida del script de Python: ${data}`);
      setPrediction(data);
      return data;
    });

    // Manejar los errores del script de Python
    pythonScript.stderr.on("data", (data) => {
      console.error(`Error en el script de Python: ${data}`);
    });

  };


  pythonSPI = (datosHist, prediccion) => {
    const { spawn } = require("child_process");
    const pythonScriptPath = "../src/py/SPI.py";

    // datosHist = leer el json y calcular la media 

    const pythonScript = spawn("python", [
      pythonScriptPath,
      datosHist,
      {prediction},
    ]);
    console.log(pythonScript);

    // Manejar la salida del script de Python
    pythonScript.stdout.on("data", (data) => {
      console.log(`Salida del script de Python: ${data}`);
      return data;
    });

    // Manejar los errores del script de Python
    pythonScript.stderr.on("data", (data) => {
      console.error(`Error en el script de Python: ${data}`);
    });

  };


  render() {
    const { selectedComarcaId, selectedYear, showError, showMap } = this.state;

    const comarcaOptions = [
      { value: "", label: "Comarcas..." },
      ...mapData.features.map((comarca) => ({
        value: comarca.properties.cartodb_id.toString(),
        label: comarca.properties.nom_comar,
      })),
    ];

    return (
      <div>
        <form className="bg-gray-100 p-6 rounded-lg">
          <div className="mb-6">
            <label
              htmlFor="yearSelect"
              className="block text-text_green font-bold mb-2"
            >
              Selecciona periodo:
            </label>
            <select
              id="yearSelect"
              value={selectedYear}
              onChange={this.handleYearSelect}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
            >
              <option value="7">7 días</option>
              <option value="15">15 días</option>
              <option value="30">1 mes</option>
              <option value="90">3 meses</option>
              <option value="180">6 meses</option>
              <option value="365">1 año</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="comarcaSelect"
              className="block text-text_green font-bold mb-2"
            >
              Selecciona comarca:
            </label>
            <select
              id="comarcaSelect"
              value={selectedComarcaId}
              onChange={this.handleComarcaSelect}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
            >
              {comarcaOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {showError && (
              <p className="text-red-500 mt-2">
                Por favor, seleccione una comarca.
              </p>
            )}
          </div>
        </form>
        <div className="w-full lg:w-[30%] flex justify-center py-3 rounded-[35px] border border-text_green transition-colors hover:bg-hover_btn hover:font-bold mt-[5%] mb-[5%]">
          <button
            type="button"
            onClick={this.handleButtonClick}
            className="text-lg font-Poppins font-bold text-text_green w-full hover:text-white justify-center "
          >
            Predecir
          </button>
        </div>
        {showMap && (
          <Map_DefaultPrediction
            selectedComarca={selectedComarcaId}
            selectedYear={selectedYear}
          />
        )}
      </div>
    );
  }
}

export default Form_DefaultPrediction;

