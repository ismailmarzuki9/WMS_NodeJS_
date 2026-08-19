import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarComponents({ onToggleSidebar }) {
  return (
    // <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    //         <Container>
    //             <Navbar.Brand as={Link} to="/">
    //                 WMS
    //             </Navbar.Brand>
    //             <Navbar.Toggle aria-controls="main-navbar" />
    //             <Navbar.Collapse id="main-navbar">
    //                 <Nav className="ms-auto">
    //                     <Nav.Link as={Link} to="/">
    //                         Dashboard
    //                     </Nav.Link>
    //                     <Nav.Link as={Link} to="/products">
    //                         Products
    //                     </Nav.Link>
    //                     <Nav.Link as={Link} to="/suppliers">
    //                         Suppliers
    //                     </Nav.Link>
    //                     <Nav.Link as={Link} to="/customers">
    //                         Customers
    //                     </Nav.Link>
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Container>
    // </Navbar>

    <Navbar bg="dark" variant="dark" className="top-navbar">
            <Container fluid>
                <Button variant="dark" onClick={onToggleSidebar} className="sidebar-toggle">
                    ☰
                </Button>

                <Navbar.Brand>
                    WMS
                </Navbar.Brand>

                <div className="ms-auto text-white">
                    Admin
                </div>

            </Container>

        </Navbar>


  );
}

export default NavbarComponents;