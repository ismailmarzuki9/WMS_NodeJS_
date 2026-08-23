import ProgressBar from "react-bootstrap/ProgressBar";

const StockMenipis = () => {

    const products = [
        {
            name: "Kabel NYM 2x1.5mm (100m)",
            sku: "SKU-EL-0231",
            minimum: 40,
            stock: 7,
            unit: "unit"
        },
        {
            name: "Semen Portland 50kg",
            sku: "SKU-BM-0110",
            minimum: 200,
            stock: 44,
            unit: "sak"
        },
        {
            name: 'Pipa PVC 3" AW',
            sku: "SKU-PL-0087",
            minimum: 150,
            stock: 46,
            unit: "btg"
        }
    ];

    return (
        <div className="card dashboard-card">

            <div className="dashboard-card-header">
                <h5>
                    Stok Menipis — perlu perhatian
                </h5>
            </div>

            <div>

                {products.map((product, index) => {

                    const percentage =
                        Math.min(
                            (product.stock / product.minimum) * 100,
                            100
                        );

                    return (
                        <div
                            className="stock-item"
                            key={index}
                        >

                            <div className="stock-info">

                                <div>
                                    <h6>
                                        {product.name}
                                    </h6>

                                    <span>
                                        {product.sku} · Min. stok {product.minimum}
                                    </span>
                                </div>

                                <div className="stock-value">
                                    {product.stock} {product.unit}
                                </div>

                            </div>

                            <ProgressBar
                                now={percentage}
                                className="stock-progress"
                            />

                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default StockMenipis;