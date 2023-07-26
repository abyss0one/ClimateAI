// import React, { Component } from "react";
// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import mapData from "../data/comarcas.json";
// import "leaflet/dist/leaflet.css";
// import dataDefaultGenerated from "../data/datadefaultgenerated.json"; // Import the data file

// class Map_DefaultPrediction extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedComarca: null,
//       mapVisible: false,
//     };
//   }

//   componentDidMount() {
//     const { selectedComarca } = this.props;
//     if (selectedComarca) {
//       this.setState({ selectedComarca, mapVisible: true });
//     }
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.selectedComarca !== this.props.selectedComarca) {
//       const { selectedComarca } = this.props;
//       this.setState({ selectedComarca, mapVisible: true });
//     }
//   }

//   render() {
//     const { selectedComarca, mapVisible } = this.state;

//     const filteredMapData = {
//       type: "FeatureCollection",
//       features: mapData.features,
//     };

//     return (
//       <div>
//         {mapVisible && (
//           <div>
//             <MapContainer className="md:w-[100vh]"
//               style={{ height: "80vh", width: "100%" }}
//               zoom={7.2}
//               center={[41.92038080757445, 1.5259606707365279]}
//             >
//               <TileLayer
//                 attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <GeoJSON
//                 data={filteredMapData.features}
//                 style={(feature) => ({
//                   fillColor:
//                     feature.properties.cartodb_id === selectedComarca
//                       ? "#ff0000"
//                       : "#3388ff",
//                   weight: 1,
//                   color: "#ffffff",
//                   fillOpacity:
//                     feature.properties.cartodb_id === selectedComarca ? 1 : 0.2,
//                 })}
//                 onEachFeature={(feature, layer) => {
//                   const properties = feature.properties;
//                   layer.bindPopup(`
//                   <div>
//   <h2 style="color: #48924f; font-weight: bold; text-transform: uppercase;">${properties.nom_comar}</h2>
//   <p>Superficie: ${properties.sup_comar} km²</p>
//   <p>Temperatura: ${properties.temperatura_media}°C</p>
//   <p>Precipitación: ${properties.precipitacion_media} mm</p>
//   <p>Humedad: ${properties.humedad_media}%</p>
// </div>

//                   `);
//                   layer.on({
//                     mouseover: () => {
//                       layer.openPopup();
//                       layer.setStyle({ fillColor: "#ff0000" });
//                     },
//                     mouseout: () => {
//                       layer.closePopup();
//                       layer.setStyle({
//                         fillColor:
//                           feature.properties.cartodb_id === selectedComarca
//                             ? "#ff0000"
//                             : "#3388ff",
//                       });
//                     },
//                   });
//                 }}
//               />
//             </MapContainer>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Map_DefaultPrediction;

import React, { Component } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import mapData from "../data/comarcas.json";
import "leaflet/dist/leaflet.css";
import dataDefaultGenerated from "../data/datagenerated_defaultprediction.json"; // Import the data file
// TODO  el error del mapa se causa debido al sobreescribir el json de dataDefaultGenerated,se debe corregir el código de modo que al generarse el código se vuelva a renderizar el mapa con la nueva información.
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

    // Obtén las propiedades de datadefaultgenerated.json
    const { temperatura, precipitacion, humedad } = dataDefaultGenerated;

    return (
      <div>
        {mapVisible && (
          <div>
            <MapContainer
              className="md:w-[100vh]"
              style={{ height: "80vh", width: "100%" }}
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
                    <p>Temperatura: ${temperatura.toFixed(2)}°C</p>
                    <p>Precipitación: ${precipitacion} mm</p>
                    <p>Humedad: ${humedad.toFixed(2)}%</p>
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
