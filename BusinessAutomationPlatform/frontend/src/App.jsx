import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Auth/login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard/dashboard";
import Produk from "./Pages/Products/Produk";
import Customer from "./Pages/Customers/Customers";
import Gudang from "./Pages/Gudang/Gudang";
import Suppliers from "./Pages/Suppliers/Suppliers";
// import UserRolee from "./pages/User&Role/";

import NavigasiSamping from "./layouts/NavigasiSamping";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/Register" element={<Register/>}/>
            <Route element={<NavigasiSamping />}>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/Produk" element={<Produk />}/>
                <Route path="/customers" element={<Customer />}/>
                <Route path="/gudang" element={<Gudang />}/>
                <Route path="/suppliers" element={<Suppliers />}/>
                {/* <Route path="/User&role" element={<UserRolee />}/> */}
            </Route>
        </Routes>
    );
}

export default App;