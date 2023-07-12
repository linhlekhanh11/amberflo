import { useState } from "react";

const TableHeader = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (id) => {
    const sortOrder = id === sortField && order === "asc" ? "desc" : "asc";
    setSortField(id);
    setOrder(sortOrder);
    handleSorting(id, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, id }) => {
          const cl =
            sortField === id && order === "asc"
              ? "up"
              : sortField === id && order === "desc"
              ? "down"
              : "default";
          return (
            <th key={id} onClick={() => handleSortingChange(id)} className={cl}>
              {label}
            </th>
          );
        })}
      </tr>
      <tr></tr>
    </thead>
  );
};

export default TableHeader;
