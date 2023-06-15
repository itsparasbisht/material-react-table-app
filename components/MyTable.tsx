"use client";

import data from "./data.json";
import { useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function MyTable() {
  const [tableData, setTableData] = useState(data);
  const columns = useMemo(
    () => [
      {
        accessorKey: "registration_number",
        header: "Registration No.",
      },
      {
        accessorKey: "owner",
        header: "Owner",
      },
      {
        accessorKey: "location",
        header: "Location",
      },
      {
        accessorKey: "inspected",
        header: "Inspected",
      },
      {
        accessorKey: "assignee",
        header: "Assignee",
        Cell: ({ cell }) => {
          //   console.log(cell.getValue());
          return (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cell.getValue()}
              onChange={handleChange}
              size="small"
              style={{ width: "100%" }}
            >
              <MenuItem value={"a"}>Mr. A</MenuItem>
              <MenuItem value={"b"}>Mr. B</MenuItem>
              <MenuItem value={"c"}>Mr. C</MenuItem>
            </Select>
          );
        },
      },
    ],
    []
  );

  const handleChange = (event: SelectChangeEvent) => {};

  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        enableRowSelection //enable some features
        enableColumnOrdering
        enableGlobalFilter={false} //turn off a feature
      />
    </div>
  );
}

export default MyTable;
