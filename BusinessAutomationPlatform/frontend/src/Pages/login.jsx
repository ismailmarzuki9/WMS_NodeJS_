import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const login = () => {
    return (
    <Container fluid>
      <Row>
        <Col className='mx-0 px-0' >
            <div className="login-brand mx-0 min-vh-100 ">
                <div>
                <span className="tag">WMS · Warehouse Management System</span>
                <h1>Satu sumber kebenaran untuk stok di semua gudang Anda.</h1>
                <p>Kelola pembelian, barang masuk/keluar, transfer antar gudang, stock opname, hingga laporan keuangan — dalam satu sistem yang saling terhubung.</p>
                </div>
                <div className="brand-stats">
                <div><b>18</b><span>Gudang aktif</span></div>
                <div><b>4.216</b><span>SKU terdaftar</span></div>
                <div><b>99.4%</b><span>Akurasi stok terakhir</span></div>
                </div>
            </div>
        </Col> 
        <Col >
            <Form  className="login-form-wrap m-0 px-0" >
                <div className="login-form">
                <Form.Group className="mb-3 login-form" controlId="formBasicEmail">
                    <div className="logo"><div className="logo-mark">W</div><div><b className="display">Gudangku WMS</b></div></div>
                    <h2>Masuk ke akun Anda</h2>
                    <Form.Label className="field" >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="field">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn btn-primary btn-block">
                    Masuk →
                </Button>
                <div className="hint-row"><span>Lupa kata sandi?</span><a href="#">Hubungi admin</a></div>
                </div>
            </Form>
        </Col> 
      </Row>
    </Container>
  );
}

export default login; 