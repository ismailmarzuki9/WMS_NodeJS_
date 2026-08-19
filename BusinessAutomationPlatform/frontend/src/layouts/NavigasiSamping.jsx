import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/SidebarComponent";

function NavigasiSamping() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    };
    return (
        <div className="dashboard-layout">
                <SidebarComponent
                    collapsed={collapsed}
                    onToggle={toggleSidebar}
                />

                <main 
                    className={`main-content ${
                    collapsed ? "expanden" : ""
                    }`}
                >
                <Outlet/>
                </main>

        </div>

    );
}

export default NavigasiSamping;