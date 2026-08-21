import { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const Register = () => {
    const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password dan Confirm Password tidak sama");
      return;
    }

    console.log("Data Registrasi:", formData);
  };

  return (
    <div className="container mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body className="p-4">

              <h3 className="text-center mb-4">
                Registrasi User
              </h3>

              <Form onSubmit={handleSubmit}>

                {/* Username */}
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>

                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Masukkan username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Masukkan email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Masukkan password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Confirm Password */}
                <Form.Group className="mb-3">
                  <Form.Label>
                    Confirm Password
                  </Form.Label>

                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Masukkan ulang password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Role */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">
                    Role User
                  </Form.Label>

                  <div>
                    {/* <Form.Check
                      inline
                      type="radio"
                      label="Admin"
                      name="role"
                      value="admin"
                      checked={formData.role === "admin"}
                      onChange={handleChange}
                    /> */}

                    <Form.Check
                      inline
                      type="radio"
                      label="Kasir"
                      name="role"
                      value="kasir"
                      checked={formData.role === "kasir"}
                      onChange={handleChange}
                    />

                    <Form.Check
                      inline
                      type="radio"
                      label="Petugas Gudang"
                      name="role"
                      value="gudang"
                      checked={formData.role === "gudang"}
                      onChange={handleChange}
                    />

                    <Form.Check
                      inline
                      type="radio"
                      label="Manager"
                      name="role"
                      value="manager"
                      checked={formData.role === "manager"}
                      onChange={handleChange}
                    />

                    <Form.Check
                      inline
                      type="radio"
                      label="User"
                      name="role"
                      value="user"
                      checked={formData.role === "user"}
                      onChange={handleChange}
                    />
                  </div>
                </Form.Group>

                {/* Button */}
                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                  >
                    Registrasi
                  </Button>
                </div>

              </Form>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    );
}

export default Register;
