import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

const TaskItem = ({ id, task, hour, day, deleteTask }) => {
  const [completada, setCompletada] = useState(false);

  const taskCompletada = () => {
    setCompletada(!completada);
  };

  const eliminateTask = () => {
    deleteTask(id);
  };

  return (
    <Row
      style={{
        border: "1px solid white",
        margin: "10px",
        display: "flex",
      }}
    >
      <Col
        style={{
          padding: "10px",
          textDecoration: completada ? "line-through" : "none",
        }}
      >
        {task} - {hour} - {day}
      </Col>
      <button
        style={{ margin: "auto", marginRight: "10px" }}
        onClick={taskCompletada}
      >
        {completada ? "No completa" : "Completa"}
      </button>
      <button onClick={eliminateTask}>Eliminar</button>
    </Row>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
  hour: PropTypes.string,
  day: PropTypes.string,
};
