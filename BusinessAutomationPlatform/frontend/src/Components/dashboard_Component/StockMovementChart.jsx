import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

function StockMovementChart() {

    const data = {
        labels: [
            '05 Aug',
            '06 Aug',
            '07 Aug',
            '08 Aug',
            '09 Aug',
            '10 Aug',
            '11 Aug',
            '12 Aug',
            '13 Aug',
            '14 Aug',
            '15 Aug',
            '16 Aug',
            '17 Aug',
            '18 Aug'
        ],

        datasets: [
            {
                type: 'bar',
                label: 'Barang Masuk',

                data: [
                    120,
                    150,
                    100,
                    170,
                    130,
                    190,
                    145,
                    165,
                    155,
                    195,
                    140,
                    175,
                    130,
                    185
                ],

                backgroundColor: 'rgba(60, 140, 130, 0.25)',

                borderWidth: 0,

                borderRadius: 3
            },

            {
                type: 'line',
                label: 'Tren Saldo Stok',

                data: [
                    100,
                    120,
                    95,
                    130,
                    115,
                    140,
                    120,
                    135,
                    125,
                    145,
                    120,
                    135,
                    110,
                    140
                ],

                borderColor: '#075e59',

                backgroundColor: '#075e59',

                borderWidth: 3,

                tension: 0.3,

                pointRadius: 0,

                pointHoverRadius: 5
            }
        ]
    };

    const options = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                position: 'bottom'
            },

            tooltip: {
                mode: 'index',
                intersect: false
            }
        },

        scales: {

            x: {
                grid: {
                    display: false
                }
            },

            y: {
                beginAtZero: true,

                grid: {
                    display: false
                },

                ticks: {
                    display: false
                }
            }
        }
    };

    return (
        <div className="card shadow-sm border-0">

            <div className="card-body">

                <h5 className="card-title">
                    Pergerakan Stok — 14 Hari Terakhir
                </h5>

                <div
                    style={{
                        height: '260px'
                    }}
                >
                    <Chart
                        type="bar"
                        data={data}
                        options={options}
                    />
                </div>

            </div>

        </div>
    );
}

export default StockMovementChart;