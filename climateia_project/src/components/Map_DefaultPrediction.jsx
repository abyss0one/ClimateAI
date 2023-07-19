// //  MAPA ANTERIOR + BTN  AÑO
// import React, { Component } from "react";
// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import mapData from "../data/archivo_actualizado.json";
// import "leaflet/dist/leaflet.css";

// class Map_DefaultPrediction extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedComarca: null,
//       mapVisible: false,
//       selectedYear: new Date().getFullYear(),
//     };
//   }
// // prueba
//   componentDidMount() {
//     console.log(mapData);
//   }

//   handleComarcaSelect = (comarca) => {
//     const { selectedComarca } = this.state;
//     if (selectedComarca === comarca) {
//       this.setState({ selectedComarca: null });
//     } else {
//       this.setState({ selectedComarca: comarca, mapVisible: true });
//     }
//   };

//   handleYearSelect = (event) => {
//     const selectedYear = parseInt(event.target.value);
//     this.setState({ selectedYear });
//   };

//   render() {
//     const { selectedComarca, mapVisible, selectedYear } = this.state;

//     const filteredMapData = {
//       type: "FeatureCollection",
//       features: mapData.features,
//     };

//     const currentYear = new Date().getFullYear();
//     const maxYear = 2030;

//     const yearOptions = [];
//     for (let year = currentYear; year <= maxYear; year++) {
//       yearOptions.push(
//         <option key={year} value={year}>
//           {year}
//         </option>
//       );
//     }

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
//               {yearOptions}
//             </select>
//           </div>
//         </form>

//         {mapVisible && (
//           <MapContainer
//             style={{ height: "85vh", width: "100%" }}
//             zoom={7.5}
//             center={[41.92038080757445, 1.5259606707365279]}
//           >
//             <TileLayer
//               attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <GeoJSON
//               data={filteredMapData.features}
//               style={(feature) => ({
//                 fillColor: feature === selectedComarca ? "#ff0000" : "#3388ff",
//                 weight: 1,
//                 color: "#ffffff",
//                 fillOpacity: feature === selectedComarca ? 1 : 0.2,
//               })}
//               onEachFeature={(feature, layer) => {
//                 const properties = feature.properties;
//                 layer.bindPopup(`
//                   <div>
//                     <h2>${properties.nom_comar}</h2>
//                     <p>Superficie: ${properties.sup_comar} km²</p>
//                     <p>Temperatura: ${properties.temperatura_media}°C</p>
//                     <p>Precipitación: ${properties.precipitacion_media} mm</p>
//                     <p>Humedad: ${properties.humedad_media}%</p>
//                   </div>
//                 `);
//                 layer.on({
//                   mouseover: () => {
//                     layer.openPopup();
//                     layer.setStyle({ fillColor: "#ff0000" });
//                   },
//                   mouseout: () => {
//                     layer.closePopup();
//                     layer.setStyle({
//                       fillColor:
//                         feature === selectedComarca ? "#ff0000" : "#3388ff",
//                     });
//                   },
//                 });
//               }}
//             />
//           </MapContainer>
//         )}
//         <ComarcaSelector
//           mapData={mapData.features}
//           selectedComarca={selectedComarca}
//           onComarcaSelect={this.handleComarcaSelect}
//         />
//       </div>
//     );
//   }
// }

// class ComarcaSelector extends Component {
//   handleSelectChange = (event) => {
//     const { mapData, onComarcaSelect } = this.props;
//     const selectedComarcaId = parseInt(event.target.value);
//     const selectedComarca = mapData.find(
//       (comarca) => comarca.properties.cartodb_id === selectedComarcaId
//     );
//     onComarcaSelect(selectedComarca);
//   };

//   render() {
//     const { mapData, selectedComarca } = this.props;

//     return (
//       <form className="bg-gray-100 p-6 rounded-lg mt-5">
//         <div>
//           <label
//             htmlFor="yearSelect"
//             className="block text-text_green font-bold mb-2"
//           >
//             Select comarca:
//           </label>
//           <select
//             value={selectedComarca ? selectedComarca.properties.cartodb_id : ""}
//             onChange={this.handleSelectChange}
//             className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-text_green"
//           >
//             <option value="">Comarcas...</option>
//             {mapData.map((comarca) => (
//               <option
//                 key={comarca.properties.cartodb_id}
//                 value={comarca.properties.cartodb_id}
//               >
//                 {comarca.properties.nom_comar}
//               </option>
//             ))}
//           </select>
//         </div>
//       </form>
//     );
//   }
// }

// export default Map_DefaultPrediction;

import React, { Component } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import mapData from "../data/archivo_actualizado.json";
import "leaflet/dist/leaflet.css";

class Map_DefaultPrediction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComarca: null,
      mapVisible: false,
    };
  }

  componentDidMount() {
    const { selectedComarca } = this.props;
    if (selectedComarca) {
      this.setState({ selectedComarca, mapVisible: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedComarca !== this.props.selectedComarca) {
      const { selectedComarca } = this.props;
      this.setState({ selectedComarca, mapVisible: true });
    }
  }

  render() {
    const { selectedComarca, mapVisible } = this.state;

    const filteredMapData = {
      type: "FeatureCollection",
      features: mapData.features,
    };

    return (
      <div>
        {mapVisible && (
          <div>
            <MapContainer
              style={{ height: "50vh", width: "100%" }}
              zoom={7.2}
              center={[41.92038080757445, 1.5259606707365279]}
            >
              <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON
                data={filteredMapData.features}
                style={(feature) => ({
                  fillColor:
                    feature.properties.cartodb_id === selectedComarca
                      ? "#ff0000"
                      : "#3388ff",
                  weight: 1,
                  color: "#ffffff",
                  fillOpacity:
                    feature.properties.cartodb_id === selectedComarca ? 1 : 0.2,
                })}
                onEachFeature={(feature, layer) => {
                  const properties = feature.properties;
                  layer.bindPopup(`
                  <div>
  <h2 style="color: #48924f; font-weight: bold; text-transform: uppercase;">${properties.nom_comar}</h2>
  <p>Superficie: ${properties.sup_comar} km²</p>
  <p>Temperatura: ${properties.temperatura_media}°C</p>
  <p>Precipitación: ${properties.precipitacion_media} mm</p>
  <p>Humedad: ${properties.humedad_media}%</p>
</div>

                  `);
                  layer.on({
                    mouseover: () => {
                      layer.openPopup();
                      layer.setStyle({ fillColor: "#ff0000" });
                    },
                    mouseout: () => {
                      layer.closePopup();
                      layer.setStyle({
                        fillColor:
                          feature.properties.cartodb_id === selectedComarca
                            ? "#ff0000"
                            : "#3388ff",
                      });
                    },
                  });
                }}
              />
            </MapContainer>
          </div>
        )}
      </div>
    );
  }
}

export default Map_DefaultPrediction;
