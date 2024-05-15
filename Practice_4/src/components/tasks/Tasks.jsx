import { Container } from "react-bootstrap";
import TaskItem from "../taskItem/TaskItem";
import PropTypes from "prop-types";

const Tasks = ({ tasks }) => {
  const tasksMapped = tasks.map((task) => (
    <TaskItem
      key={Math.random()}
      task={task.task}
      hour={task.hour}
      day={task.day}
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
