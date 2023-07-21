// VERSION 3 AGREGADA FUNCION DE DESAPARECER TEXTO
import React, { Component } from "react";
import Map_DefaultPrediction from "./Map_DefaultPrediction";
import mapData from "../data/archivo_actualizado.json";
import Info_1 from "./Info_1";

const handlePredictionSubmit = (id, dias) => {

  // const selectedFile = 'src/public/assets/dh_' + comarca + '.json'
  // console.log(selectedFile)
    const url = 'http://localhost:5000/prediction/'+id+'/'+dias;
    fetch(url, {
      method: 'GET',
      // body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result); // Mensaje de respuesta del servidor
      })
      .catch((error) => {
        console.error('Error al enviar el archivo:', error);
      });
  };


const handleSPISubmit = (id,pre) => {
  const selectedFile = 'dh_' + id + '.json'
  console.log(selectedFile)
    const url = 'http://localhost:5000/calculate_SPI/'+selectedFile+'/'+pre;
    fetch(url, {
      method: 'GET',
      // body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result); // Mensaje de respuesta del servidor
      })
      .catch((error) => {
        console.error('Error al enviar el archivo:', error);
      });
  };



// const [prediction, setPrediction] = React.useState (0);
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
            // handlePredictionSubmit(selectedComarcaId,selectedYear);
            // handleSPISubmit( selectedComarcaId,'55.66');


      this.setState({ showError: false, showMap: true });
      this.props.setShowInfo(false); // Actualizamos el estado showInfo del componente DefaultPrediction
    } else {
      this.setState({ showError: true, showMap: false });
    }
  };

  // pythonConnect = (comarca, fecha) => {
  //   const pythonScriptPath = "../src/py/server.py";

  //   const COMARCA = Form_DefaultPrediction.state.selectedComarca;
  //   const fecha_prediction = Form_DefaultPrediction.state.selectedYear;

  //   console.log(pythonScriptPath);
  //   console.log(COMARCA);
  //   console.log(fecha_prediction);

  //   const pythonScript = spawn("python", [
  //     pythonScriptPath,
  //     COMARCA,
  //     fecha_prediction,
  //   ]);
  //   console.log(pythonScript);

  //   // Manejar la salida del script de Python
  //   pythonScript.stdout.on("data", (data) => {
  //     console.log(`Salida del script de Python: ${data}`);
  //     setPrediction(data);
  //     return data;
  //   });

  //   // Manejar los errores del script de Python
  //   pythonScript.stderr.on("data", (data) => {
  //     console.error(`Error en el script de Python: ${data}`);
  //   });

  // };

  // pythonSPI = (datosHist, prediccion) => {
  //   const { spawn } = require("child_process");
  //   const pythonScriptPath = "../src/py/SPI.py";

  //   datosHist = 'src/public/assets/dh_' + comarca + '.json'

  //   console.log(pythonScriptPath)
  //   console.log(datosHist)
  //   console.log({prediction})

  //   const pythonScript = spawn("python", [
  //     pythonScriptPath,
  //     datosHist,
  //     {prediction},
  //   ]);
  //   console.log(pythonScript);

  //   // Manejar la salida del script de Python
  //   pythonScript.stdout.on("data", (data) => {
  //     console.log(`Salida del script de Python: ${data}`);
  //     return data;
  //   });

  //   // Manejar los errores del script de Python
  //   pythonScript.stderr.on("data", (data) => {
  //     console.error(`Error en el script de Python: ${data}`);
  //   });

  // };

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
        {this.props.showInfo && <Info_1 />}
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
            className="text-lg font-Poppins font-bold text-text_green w-full hover:text-white justify-center"
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
