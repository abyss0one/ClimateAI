//Usememo sirve para que no tenga que volver a cargar el chart si los datos no cambian
import { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Context from "./Context";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const scores = [10.2, 11.8, 10.8, 14.1, 20.07, 24.07, 26.7, 27.2, 22.5, 20.7, 15.2, 12.6];
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
const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#FFCD56",
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
];

export default function BarChart() {
    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: "Temperatura media mensual",
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
            <Bar data={data} options={options} />
        </div>
    );
}
