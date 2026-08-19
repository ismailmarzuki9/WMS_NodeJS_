import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import StockMovementChart from '../Components/dashboard/StockMovementChart';
import StockAccuracy from '../Components/dashboard/StockAccuracy';

const Dashboard = () => ( /* cara menampilkan implicit return sehingga tidak perlu return di dalam function */
    <Container fluid className='dashboard-container'>

      <Row className="m-0 p-1 align-items-center">
        
        {/* Dropdown */}
        <Col xs="auto">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Search */}
        <Col className="d-flex justify-content-start">
          <InputGroup style={{ maxWidth: "400px" }}>
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />

            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </Col>

        {/* Nama + Role */}
        <Col xs="auto">
          <div className="d-flex flex-column align-items-end">
            <h5 className="m-0">Nama</h5>
            <h6 className="m-0">Role</h6>
          </div>
        </Col>

        {/* Logout */}
        <Col xs="auto">
          <Button className="p-2">
            Keluar
          </Button>
        </Col>
      </Row>

      <Row className=' bacg-smok'>

        <Col>
          <h5>Dashboard</h5>
          <p>Ringkasan operasional Gudang Pusat – Jakarta, 14 Agustus 2026</p>
        </Col>
        <Col className="d-flex justify-content-end my-3">
          <Button className="p-1 mx-1">Exsport Ringkasan</Button>
          <Button className="p-1"> + Transaksi Baru</Button>
        </Col>

        {/* total nilai stok */}
        <div class="d-flex justify-content-around">
          <div className="card">
            <p>Total Nilai Stok</p>
            <p>Rp 8.4M</p>
          </div>

          <div className="card">
            <p>Total Nilai Stok</p>
            <p>Rp 8.4M</p>
          </div>

          <div className="card">
            <p>Total Nilai Stok</p>
            <p>Rp 8.4M</p>
          </div>

          <div className="card">
            <p>Total Nilai Stok</p>
            <p>Rp 8.4M</p>
          </div>
        </div>

        {/* grafik */}
        <Row className="grafik"> 
            <Col lg={8}>
              <StockMovementChart/>
            </Col>
            <Col lg={4}>
              <StockAccuracy />
            </Col>
        </Row>
        
      </Row>

    </Container>
)
export default Dashboard