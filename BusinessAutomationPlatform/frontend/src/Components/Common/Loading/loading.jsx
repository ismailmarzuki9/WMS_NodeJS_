// Digunakan ketika data sedang diproses.
// Frontend
//    ↓
// Request API
//    ↓
// Loading
//    ↓
// Data diterima
//    ↓
// Tampilkan tabel

import Spinner from "react-bootstrap/Spinner";

const Loading = ({
    text = " Loading Sabar Yaa ..."
}) => {

    return (
        <div className="text-center py-5">
            <Spinner
                animation="border"
            >
                <div className="mt-2">
                    {text}
                </div>
            </Spinner>
        </div>
    );
};

export default Loading;