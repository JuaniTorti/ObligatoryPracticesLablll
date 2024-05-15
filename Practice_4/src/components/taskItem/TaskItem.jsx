import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const TaskItem = ({ task, hour, day }) => {
  return (
    <Row style={{ border: "1px solid white" }}>
      <Col>
        {task} - {hour} - {day}
      </Col>
    </Row>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  key: PropTypes.string,
  task: PropTypes.string,
  hour: PropTypes.string,
  day: PropTypes.string,
};
