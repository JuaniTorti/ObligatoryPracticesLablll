import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const TaskItem = ({ task, hour, day }) => {
  return (
    <Row style={{ border: "1px solid white", margin: "10px" }}>
      <Col style={{ padding: "10px" }}>
        {task} - {hour} - {day}
      </Col>
    </Row>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  key: PropTypes.number,
  task: PropTypes.string,
  hour: PropTypes.string,
  day: PropTypes.string,
};
