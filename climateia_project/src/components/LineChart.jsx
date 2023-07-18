//Usememo sirve para que no tenga que volver a cargar el chart si los datos no cambian

import { useMemo } from "react";
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

const scores = [12.3,1.9,89.5,38.9,20.0,9.5,2.7,67.9, 13.1, 11.3 ,7.6, 33];
const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const options = {
  fill: true,
  scales: {
    y: {
      min: 0,
    },
  },

  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
const colors = ["#FF6384", "#36A2EB", "#4BC0C0"];

export default function BarChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          tension: 0.3,
          data: scores,
          backgroundColor: colors,
        },
      ],
      labels,
    };
  }, []);

  return (
    <div className='app barchart'>
      <Line data={data} options={options} />
    </div>
  );
}
