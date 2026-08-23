import {
    Chart as ChartJS,
    ArcElement,
    Tooltip
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip
);

function StockAccuracy() {

    const accuracy = 99.4;

    const data = {

        datasets: [
            {
                data: [
                    accuracy,
                    100 - accuracy
                ],

                backgroundColor: [
                    '#2f9563',
                    '#e8eeee'
                ],

                borderWidth: 0
            }
        ]

    };

    const options = {

        responsive: true,

        maintainAspectRatio: false,

        cutout: '75%',

        plugins: {
            legend: {
                display: false
            },

            tooltip: {
                enabled: false
            }
        }
    };

    return (

        <div className="card shadow-sm border-0">

            <div className="card-body">

                <h5 className="card-title">
                    Akurasi Stok (Opname Terakhir)
                </h5>

                <div className="d-flex align-items-center gap-3">

                    <div
                        style={{
                            width: '100px',
                            height: '100px'
                        }}
                    >
                        <Doughnut
                            data={data}
                            options={options}
                        />
                    </div>

                    <div>

                        <div className="fs-1 fw-bold">
                            {accuracy}
                            <span className="fs-6">%</span>
                        </div>

                        <small className="text-muted">
                            SO-2026-0731 · Gudang Pusat
                        </small>

                    </div>

                </div>

                <hr />

                <div className="d-flex justify-content-between">
                    <span>Item cocok</span>
                    <strong>312 / 320</strong>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                    <span>Selisih kurang (short)</span>
                    <span className="text-danger">
                        5 item
                    </span>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                    <span>Selisih lebih (over)</span>
                    <span className="text-success">
                        3 item
                    </span>
                </div>

            </div>

        </div>

    );
}

export default StockAccuracy;