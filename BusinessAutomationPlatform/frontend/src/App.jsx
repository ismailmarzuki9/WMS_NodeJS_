import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Produk from "./pages/Produk";

import NavigasiSamping from "./layouts/NavigasiSamping";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route element={<NavigasiSamping />}>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/Produk" element={<Produk />}/>
            </Route>
        </Routes>
    );
}

export default App;