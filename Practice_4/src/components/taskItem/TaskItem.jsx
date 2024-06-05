import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

const TaskItem = ({
  id,
  task,
  hour,
  day,
  complete,
  deleteTask,
  completeTask,
}) => {
  const eliminateTask = () => {
    const confirmed = confirm(
      "¿Estás seguro de que deseas eliminar esta tarea?"
    );
    if (confirmed) {
      deleteTask(id);
    }
  };

  const taskCompletada = () => {
    completeTask(id);
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
          textDecoration: complete ? "line-through" : "none",
        }}
      >
        {task} - {hour} - {day}
      </Col>
      <button
        style={{ margin: "auto", marginRight: "10px" }}
        onClick={taskCompletada}
      >
        {complete ? "No completa" : "Completa"}
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
