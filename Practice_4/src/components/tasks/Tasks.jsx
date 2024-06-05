import { Container } from "react-bootstrap";
import TaskItem from "../taskItem/TaskItem";
import PropTypes from "prop-types";

const Tasks = ({ tasks, onDeleteTask, onCompleteTask }) => {
  const tasksMapped = tasks.map((task) => (
    <TaskItem
      id={task.id}
      task={task.task}
      hour={task.hour}
      day={task.day}
      complete={task.complete}
      deleteTask={onDeleteTask}
      completeTask={onCompleteTask}
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
