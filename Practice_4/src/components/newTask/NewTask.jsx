import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [hour, setHour] = useState("");
  const [day, setDay] = useState("");

  const changeTaskHandler = (event) => {
    setTask(event.target.value);
  };
  const changeHourHandler = (event) => {
    setHour(event.target.value);
  };
  const changeDayHandler = (event) => {
    setDay(event.target.value);
  };

  const submitTaskHandler = (event) => {
    event.preventDefault();
    const newTask = {
      task: task,
      hour: hour,
      day: day,
      eliminated: false,
    };

    setTask("");
    setHour("");
    setDay("");
    onAddTask(newTask);
  };

  return (
    <Card
      style={{
        border: "1px solid white",
        borderRadius: "5px",
        marginLeft: "300px",
        width: "1300px",
      }}
    >
      <Card.Body>
        <Form className="text-white" onSubmit={submitTaskHandler}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ margin: "10px" }}>Tarea</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Ingresar tarea"
                  value={task}
                  onChange={changeTaskHandler}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ margin: "10px" }}>Hora</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese hora"
                  value={hour}
                  onChange={changeHourHandler}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ margin: "10px" }}>Fecha</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar fecha dd/mm"
                  value={day}
                  onChange={changeDayHandler}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Agregar tarea
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewTask;
