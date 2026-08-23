
const Aktifitasterbaru = () => {

    const activities = [
        {
            type: "in",
            title: "Barang Masuk GR-2026-0512",
            description:
                "dari PO-2026-0301 (Supplier: CV Sumber Jaya) telah diposting",
            time: "10 menit lalu",
            user: "Budi H."
        },

        {
            type: "opname",
            title: "Stock Opname SO-2026-0812",
            description:
                "Gudang Bekasi memasuki tahap review",
            time: "42 menit lalu",
            user: "Rina W."
        },

        {
            type: "transfer",
            title: "Transfer TR-2026-0144",
            description:
                "Gudang Pusat → Gudang Surabaya berangkat",
            time: "1 jam lalu",
            user: "sistem"
        },

        {
            type: "adjustment",
            title: "Penyesuaian ADJ-2026-0067",
            description:
                "ditolak: alasan tidak lengkap",
            time: "2 jam lalu",
            user: "Siti A."
        }
    ];

    const icons = {
        in: "↓",
        opname: "☑",
        transfer: "⇄",
        adjustment: "±"
    };

    return (
        <div className="card dashboard-card activity-card">
            <div className="dashboard-card-header">
                <h5>Aktivitas Terbaru</h5>
            </div>
            <div>
                {activities.map((activity, index) => (
                    <div
                        className="activity-item"
                        key={index}
                    >
                        <div
                            className={`activity-icon ${activity.type}`}
                        >
                            {icons[activity.type]}
                        </div>
                        <div className="activity-content">
                            <div>
                                <strong>
                                    {activity.title}
                                </strong>{" "}

                                <span>
                                    {activity.description}
                                </span>
                            </div>
                            <small>
                                {activity.time} · oleh {activity.user}
                            </small>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Aktifitasterbaru;