import React from "react";
import data from "../../public/assets/datos_precip.json";
console.log(data);
const colors = ["#6F957D", "#97B4A2", "#BBCDC3", "#2F5C41"];
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import Context from "./Context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const transformedData = data.map((item) => ({
  x: item.any,
  y: item.valor_lectura,
}));

console.log(transformedData);

const cfg = {
  type: "line",
  data: {
    datasets: [
      {
        data: transformedData,
        backgroundColor: colors[2], // Aquí se aplica el color rojo (#FF6384) al dataset
        borderColor: colors[0], // También puedes definir el borde del gráfico con el mismo color
        fill: true,
      },
    ],
  },
  options: {
    fill: true,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Año",
        },
        min: 2009, // Establecer el valor mínimo para el eje X
        max: 2022, // Establecer el valor máximo para el eje X
      },
      y: {
        title: {
          display: true,
          text: "Precipitación",
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

export default function LineChartCat() {
  return (
    <div className="app barchart">
      <Line data={cfg.data} options={cfg.options} />
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';

// const LineChartCat = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     // Leer el archivo JSON con Axios
//     axios.get('/assets/datos_precip.json')
//       .then((response) => {
//         const data = response.data.map((item) => ({
//           x: item.any,
//           y: item.valor_lectura,
//         }));

//         setChartData({
//           datasets: [
//             {
//               label: 'Valor de lectura',
//               data: data,
//               fill: false,
//               borderColor: 'rgba(75,192,192,1)',
//             },
//           ],
//         });
//       })
//       .catch((error) => {
//         console.error('Error al leer el archivo JSON:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Gráfico usando Chart.js en React</h2>
//       <Line
//         data={{
//           datasets: chartData.datasets,
//         }}
//         options={{
//           scales: {
//             x: {
//               type: 'linear',
//               position: 'bottom',
//               title: {
//                 display: true,
//                 text: 'Año',
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: 'Valor de lectura',
//               },
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default LineChartCat;
