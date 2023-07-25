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
            handlePredictionSubmit(selectedComarcaId,selectedYear);
            // handleSPISubmit( selectedComarcaId,'55.66');


      this.setState({ showError: false, showMap: true });
      this.props.setShowInfo(false); // Actualizamos el estado showInfo del componente DefaultPrediction
    } else {
      this.setState({ showError: true, showMap: false });
    }
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
        {this.props.showInfo && <Info_1 />}
        <form className="bg-bg_charts p-6 rounded-lg">
          <div className="mb-6 items">
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

          <div >
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
        <div className="w-full lg:w-[30%] flex justify-center py-3 rounded-[35px] border border-text_green transition-colors items-center bg-white hover:bg-hover_btn hover:font-bold mt-[5%] mb-[5%] mx-auto">
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
