// import React, { Component } from "react";
// import mapData from "../data/archivo_actualizado.json";
// import { saveAs } from "file-saver";

// class Map_DefaultPrediction extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedComarca: null,
//       selectedYear: "7",
//     };
//   }

//   handleComarcaSelect = (event) => {
//     const selectedComarcaId = parseInt(event.target.value);
//     const selectedComarca = mapData.features.find(
//       (comarca) => comarca.properties.cartodb_id === selectedComarcaId
//     );
//     this.setState({ selectedComarca });
//   };

//   handleYearSelect = (event) => {
//     const selectedYear = event.target.value;
//     this.setState({ selectedYear });
//   };

//   exportDataToJSON = () => {
//     const { selectedComarca, selectedYear } = this.state;

//     // Crear un objeto con los datos seleccionados
//     const data = [
//       {
//         comarca: selectedComarca.properties.nom_comar,
//         data_predict_lectura: selectedYear,
//       },
//     ];

//     // Convertir los datos a formato JSON
//     const jsonData = JSON.stringify(data, null, 2);

//     // Crear un objeto Blob para el archivo JSON
//     const blob = new Blob([jsonData], { type: "application/json" });

//     // Guardar el archivo JSON en el directorio del proyecto
//     saveAs(blob, "../data/comarcas_selected.json");
//   };

//   render() {
//     const { selectedComarca, selectedYear } = this.state;

//     const currentYear = new Date().getFullYear();
//     const yearOptions = [
//       { value: "7", label: "7 días" },
//       { value: "15", label: "15 días" },
//       { value: "30", label: "1 mes" },
//       { value: "90", label: "3 meses" },
//       { value: "180", label: "6 meses" },
//       { value: "365", label: "1 año" },
//     ];

//     return (
//       <div>
//         <form className="bg-gray-100 p-6 rounded-lg">
//           {/* Formulario de selección de año */}
//           <div className="mb-6">
//             <label
//               htmlFor="yearSelect"
//               className="block text-text_green font-bold mb-2"
//             >
//               Select year:
//             </label>
//             <select
//               id="yearSelect"
//               value={selectedYear}
//               onChange={this.handleYearSelect}
//               className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
//             >
//               {yearOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Formulario de selección de comarca */}
//           <div>
//             <label
//               htmlFor="comarcaSelect"
//               className="block text-text_green font-bold mb-2"
//             >
//               Select comarca:
//             </label>
//             <select
//               id="comarcaSelect"
//               value={selectedComarca ? selectedComarca.properties.cartodb_id : ""}
//               onChange={this.handleComarcaSelect}
//               className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
//             >
//               <option value="">Comarcas...</option>
//               {mapData.features.map((comarca) => (
//                 <option
//                   key={comarca.properties.cartodb_id}
//                   value={comarca.properties.cartodb_id}
//                 >
//                   {comarca.properties.nom_comar}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </form>

//         <button
//           onClick={this.exportDataToJSON}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Exportar a JSON
//         </button>
//       </div>
//     );
//   }
// }

// export default Map_DefaultPrediction;
// import React, { Component } from "react";
// import mapData from "../data/archivo_actualizado.json";
// import { saveAs } from "file-saver";
// import fs from 'fs';

// class Form_DefaultPrediction extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedComarca: null,
//       selectedYear: "7",
//     };
//   }

//   handleComarcaSelect = (event) => {
//     const selectedComarcaId = parseInt(event.target.value);
//     const selectedComarca = mapData.features.find(
//       (comarca) => comarca.properties.cartodb_id === selectedComarcaId
//     );
//     this.setState({ selectedComarca });
//   };

//   handleYearSelect = (event) => {
//     const selectedYear = event.target.value;
//     this.setState({ selectedYear });
//   };

//   exportDataToJSON = () => {
//     const { selectedComarca, selectedYear } = this.state;

//     // Crear un objeto con los datos seleccionados
//     const data = [
//       {
//         comarca: selectedComarca.properties.nom_comar,
//         data_predict_lectura: selectedYear,
//       },
//     ];

//     // Convertir los datos a formato JSON
//     const jsonData = JSON.stringify(data, null, 2);

//     // Crear un objeto Blob para el archivo JSON
//     const blob = new Blob([jsonData], { type: "application/json" });

//     // Guardar el archivo JSON en el directorio del proyecto
//     fs.writeFile('../data/comarcas_selected.json', jsonData, (err) => {
//       if (err) {
//         console.error('Error al guardar el archivo JSON:', err);
//       } else {
//         console.log('Archivo JSON guardado correctamente.');
//       }
//     });
//   };

//   render() {
//     const { selectedComarca, selectedYear } = this.state;

//     const currentYear = new Date().getFullYear();
//     const yearOptions = [
//       { value: "7", label: "7 días" },
//       { value: "15", label: "15 días" },
//       { value: "30", label: "1 mes" },
//       { value: "90", label: "3 meses" },
//       { value: "180", label: "6 meses" },
//       { value: "365", label: "1 año" },
//     ];

//     return (
//       <div>
//         <form className="bg-gray-100 p-6 rounded-lg">
//           {/* Formulario de selección de año */}
//           <div className="mb-6">
//             <label
//               htmlFor="yearSelect"
//               className="block text-text_green font-bold mb-2"
//             >
//               Select year:
//             </label>
//             <select
//               id="yearSelect"
//               value={selectedYear}
//               onChange={this.handleYearSelect}
//               className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
//             >
//               {yearOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Formulario de selección de comarca */}
//           <div>
//             <label
//               htmlFor="comarcaSelect"
//               className="block text-text_green font-bold mb-2"
//             >
//               Select comarca:
//             </label>
//             <select
//               id="comarcaSelect"
//               value={selectedComarca ? selectedComarca.properties.cartodb_id : ""}
//               onChange={this.handleComarcaSelect}
//               className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
//             >
//               <option value="">Comarcas...</option>
//               {mapData.features.map((comarca) => (
//                 <option
//                   key={comarca.properties.cartodb_id}
//                   value={comarca.properties.cartodb_id}
//                 >
//                   {comarca.properties.nom_comar}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </form>

//         <button
//           onClick={this.exportDataToJSON}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Exportar a JSON
//         </button>
//       </div>
//     );
//   }
// }

// export default Form_DefaultPrediction;

import React, { Component } from "react";
import mapData from "../data/archivo_actualizado.json";

class Form_DefaultPrediction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComarca: "",
      selectedYear: "7",
      showError: false,
    };
  }

  handleComarcaSelect = (event) => {
    const selectedComarcaId = parseInt(event.target.value);
    const selectedComarca = mapData.features.find(
      (comarca) => comarca.properties.cartodb_id === selectedComarcaId
    );
    this.setState({
      selectedComarca: selectedComarca
        ? selectedComarca.properties.nom_comar
        : "",
    });
  };

  handleYearSelect = (event) => {
    const selectedYear = event.target.value;
    this.setState({ selectedYear });
  };

  handleButtonClick = () => {
    const { selectedComarca, selectedYear } = this.state;
    const comarcas = selectedComarca;
    const fecha_prediction = selectedYear;

    if (comarcas) {
      console.log("Comarcas seleccionadas:", comarcas);
      console.log("Fecha de predicción seleccionada:", fecha_prediction);
      this.setState({ showError: false });
    } else {
      this.setState({ showError: true });
    }
  };

  render() {
    const { selectedComarca, selectedYear, showError } = this.state;

    const currentYear = new Date().getFullYear();
    const yearOptions = [
      { value: "7", label: "7 días" },
      { value: "15", label: "15 días" },
      { value: "30", label: "1 mes" },
      { value: "90", label: "3 meses" },
      { value: "180", label: "6 meses" },
      { value: "365", label: "1 año" },
    ];

    const comarcaOptions = [
      { value: "", label: selectedComarca ? selectedComarca : "Comarcas..." },
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
              Select year:
            </label>
            <select
              id="yearSelect"
              value={selectedYear}
              onChange={this.handleYearSelect}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
            >
              {yearOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="comarcaSelect"
              className="block text-text_green font-bold mb-2"
            >
              Select comarca:
            </label>
            <select
              id="comarcaSelect"
              value={selectedComarca}
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
        <div className="w-full lg:w-[30%] flex justify-center py-3 rounded-[35px] border border-text_green transition-colors hover:bg-hover_btn hover:font-bold mt-[5%]">
          <button
            type="button"
            onClick={this.handleButtonClick}
            className="text-lg font-Poppins font-bold text-text_green w-full hover:text-white"
          >
            Predict
          </button>
        </div>
      </div>
    );
  }
}

export default Form_DefaultPrediction;
