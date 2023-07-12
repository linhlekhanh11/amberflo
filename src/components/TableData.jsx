import React from "react";
import { useNavigate } from "react-router-dom";

const TableBody = ({ tableData, columns }) => {
  let navigate = useNavigate();

  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr
            key={data.id}
            onClick={() => navigate(data.id)}
            className="clickable-row"
          >
            {columns.map(({ id }) => {
              const tData = data[id];
              return <td key={id}>{tData.toString()}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
