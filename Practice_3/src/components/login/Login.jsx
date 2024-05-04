import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState("");

  const changeUserName = (event) => {
    var useractualized = event.target.value;

    if (useractualized.includes("o") || useractualized.includes("O")) {
      alert("El nombre se usuario no puede contener la letra 'o'");
    } else {
      setUser(event.target.value);
    }
  };

  const submitBookHandler = () => {
    alert("El usuario fue registrado correctamente");
  };

  return (
    <div>
      <Form className="text-white" onSubmit={submitBookHandler}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="bookTitle">
              <Form.Label style={{ margin: "10px" }}>Usuario</Form.Label>
              <Form.Control
                type="text"
                required
                value={user}
                placeholder="Ingresar título"
                onChange={changeUserName}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col md={3} className="d-flex justify-content-end">
            <Button variant="primary" type="submit" style={{ margin: "10px" }}>
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>
      <p style={{ margin: "10px" }}>{user}</p>
    </div>
  );
};

export default Login;
