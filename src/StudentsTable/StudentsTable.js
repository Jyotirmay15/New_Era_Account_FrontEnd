import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";

import StudentDetailsPanel from "./StudentDetailsPanel";

const StudentsTable = ({
  data,
  isLoading,
  setSelectedRow,
  setEnableDelete,
  setEnableEdit,
  imagesList,
}) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "srNumber",
        header: "SR Number"
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "parent",
        header: "Parent Name",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "phone",
        header: "Contact",
      },
      {
        accessorKey: "class",
        header: "Class"
      }
    ],
    []
  );

  const [selectedTableRow, setSelectedTableRow] = useState([]);

  useEffect(() => {
    const rowNumber = parseInt(Object.keys(selectedTableRow)[0]);
    setSelectedRow(rowNumber);
    if(rowNumber!=NaN && rowNumber>=0) {
      setEnableDelete(true);
      setEnableEdit(true);
    } else {
      setEnableDelete(false);
      setEnableEdit(false);
    }   
  }, [selectedTableRow]);

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection
      enableMultiRowSelection={false}
      enableSelectAll={false}
      enableGrouping
      enableColumnResizing
      onRowSelectionChange={setSelectedTableRow}
      renderDetailPanel={({ row }) => <StudentDetailsPanel row={row}  />}
      state={{
        isLoading: isLoading,
        rowSelection: selectedTableRow,
      }}
    />
  );
};

export default StudentsTable;
