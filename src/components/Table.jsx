import React from "react";

import "reactjs-popup/dist/index.css";
import useFetch from "../hooks/useFetch";
import TableHeader from "./TableHeader";
import TableBody from "./TableData";
import AddMeterModal from "./AddMeterModal";

const Table = ({ url, apiKey }) => {
  const { data: tableData, setData } = useFetch(url, apiKey);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setData(sorted);
    }
  };
  const columns = [
    { label: "Display Name", id: "display_name" },
    { label: "API Name", id: "api_name" },
    { label: "Active", id: "active" },
    {
      label: "Used For Billing",
      id: "used_for_billing",
    },
    { label: "Type", id: "type" },
  ];

  return (
    <div className="App">
      <div className="Table">
        <table>
          <caption>
            <h1>Meter Table</h1>
          </caption>
          <TableHeader {...{ columns, handleSorting }} />
          <TableBody {...{ columns, tableData }} />
        </table>
        <div>
        <AddMeterModal />
        </div>
      </div>
    </div>
  );
};

export default Table;
