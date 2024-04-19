import PropTypes from "prop-types";

const TableItem = ({ brand, income }) => {
  return (
    <tr>
      <td
        style={{
          border: "1px solid black",
          padding: "8px",
          textAlign: "center",
        }}
      >
        {brand}
      </td>
      <td
        style={{
          border: "1px solid black",
          padding: "8px",
          textAlign: "center",
        }}
      >
        ${income}
      </td>
    </tr>
  );
};

export default TableItem;

TableItem.propTypes = {
  brand: PropTypes.string,
  income: PropTypes.number,
};
