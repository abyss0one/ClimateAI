import React from "react";
import data from '../../public/assets/datos_temp.json'
console.log(data)

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
    type: "line", // Cambiar el tipo de gráfico a "line"
    data: {
        datasets: [
            {
                data: transformedData
            }
        ]
    },
    options: {
        fill: true,
        scales: {
            x: {
                type: "linear", // Cambiar el tipo de escala del eje X a "linear"
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
                    text: "Temperatura",
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

const colors = ["#FF6384", "#36A2EB", "#4BC0C0"];

export default function LineChartCat() {
    return (
        <div className="app barchart">
            <Line data={cfg.data} options={cfg.options} />
        </div>
    );
}