import { Container } from "react-bootstrap";
import TaskItem from "../taskItem/TaskItem";
import PropTypes from "prop-types";

const Tasks = ({ tasks, onDeleteTask }) => {
  const tasksMapped = tasks.map((task) => (
    <TaskItem
      key={task.id != null ? task.id : Math.random()}
      id={task.id != null ? task.id : Math.random()}
      task={task.task}
      hour={task.hour}
      day={task.day}
      deleteTask={onDeleteTask}
    />
  ));

  return (
    <>
      <Container
        style={{
          border: "1px solid white",
          borderRadius: "5px",
          marginLeft: "300px",
          width: "1300px",
        }}
      >
        {tasksMapped}
      </Container>
    </>
  );
};

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.array,
};
