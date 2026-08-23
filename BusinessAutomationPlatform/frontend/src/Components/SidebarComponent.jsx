import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function SidebarComponent({ collapsed, onToggle }) {

    return (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

            {/* HEADER SIDEBAR */}
            <div className="sidebar-header">

                <Button
                    variant="dark"
                    className="toggle-button"
                    onClick={onToggle}
                >
                    ☰
                </Button>

                {!collapsed && (
                    <span className="brand">
                        WMS
                    </span>
                )}

                {!collapsed && (
                    <span className="admin">
                        Admin
                    </span>
                )}

            </div>


            {/* MENU */}
            <Nav className="flex-column sidebar-menu">

                <Nav.Link
                    as={Link}
                    to="/dashboard"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        📊
                    </span>

                    {!collapsed && (
                        <span>
                            Dashboard
                        </span>
                    )}
                </Nav.Link>


                <Nav.Link
                    as={Link}
                    to="/Produk"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        📦
                    </span>

                    {!collapsed && (
                        <span>
                            Products
                        </span>
                    )}
                </Nav.Link>


                <Nav.Link
                    as={Link}
                    to="/suppliers"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        🏢
                    </span>

                    {!collapsed && (
                        <span>
                            Suppliers
                        </span>
                    )}
                </Nav.Link>


                <Nav.Link
                    as={Link}
                    to="/customers"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        👥
                    </span>

                    {!collapsed && (
                        <span>
                            Customers
                        </span>
                    )}
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to="/gudang"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        ⌂
                    </span>

                    {!collapsed && (
                        <span>
                            Gudang
                        </span>
                    )}
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to="/goods-in"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        📥
                    </span>

                    {!collapsed && (
                        <span>
                            Goods In
                        </span>
                    )}
                </Nav.Link>


                <Nav.Link
                    as={Link}
                    to="/goods-out"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        📤
                    </span>

                    {!collapsed && (
                        <span>
                            Goods Out
                        </span>
                    )}
                </Nav.Link>


                <Nav.Link
                    as={Link}
                    to="/transfer"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        🔄
                    </span>

                    {!collapsed && (
                        <span>
                            Transfer
                        </span>
                    )}
                </Nav.Link>


                <Nav.Link
                    as={Link}
                    to="/stock"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        📋
                    </span>

                    {!collapsed && (
                        <span>
                            Stock
                        </span>
                    )}
                </Nav.Link>


                <Nav.Link
                    as={Link}
                    to="/settings"
                    className="sidebar-link"
                >
                    <span className="sidebar-icon">
                        ⚙️
                    </span>

                    {!collapsed && (
                        <span>
                            Settings
                        </span>
                    )}
                </Nav.Link>

            </Nav>

        </aside>
    );
}

export default SidebarComponent;