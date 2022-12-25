import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Typography } from "@mui/material";

import classes from "./StudentsTable.module.css";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: "John",
    parent: "Wayne",
    address: "261 Erdman Ford",
    phone: 999995242,
    fees: {
      academics: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      transport: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      admission: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      exam: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
    },
  },
  {
    name: "John",
    parent: "Wayne",
    address: "769 Dominic Grove",
    phone: 999995242,
    fees: {
      academics: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      transport: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      admission: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      exam: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
    },
  },
  {
    name: "John",
    parent: "Wayne",
    address: "566 Brakus Inlet",
    phone: 999995242,
    fees: {
      academics: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      transport: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      admission: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      exam: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
    },
  },
  {
    name: "John",
    parent: "Wayne",
    address: "722 Emie Stream",
    phone: 999995242,
    fees: {
      academics: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      transport: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      admission: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      exam: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
    },
  },
  {
    name: "John",
    parent: "Wayne",
    address: "32188 Larkin Turnpike",
    phone: 999995242,
    fees: {
      academics: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      transport: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      admission: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
      exam: {
        total: 10000,
        received: 5000,
        lastPaidDate: "10/12/2022",
        dueDate: "10/04/2023",
      },
    },
  },
];

const StudentsTable = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "First Name",
      },
      {
        accessorKey: "parent",
        header: "Parent Name",
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
      },
      {
        accessorKey: "phone",
        header: "Contact",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection
      renderDetailPanel={({ row }) => (
        <div>
          <Typography>Academics</Typography>
          <div className={classes.detailspanel}>
            <Typography>
              Total Fees: {row.original.fees.academics.total}
            </Typography>
            <Typography>Received Fees: {row.original.fees.academics.received}</Typography>
            <Typography>Last Paid Date: {row.original.fees.academics.lastPaidDate}</Typography>
            <Typography>Due Date: {row.original.fees.academics.dueDate}</Typography>
          </div>
          <Typography>Transport</Typography>
          <div className={classes.detailspanel}>
            <Typography>
              Total Fees: {row.original.fees.academics.total}
            </Typography>
            <Typography>Received Fees: {row.original.fees.academics.received}</Typography>
            <Typography>Last Paid Date: {row.original.fees.academics.lastPaidDate}</Typography>
            <Typography>Due Date: {row.original.fees.academics.dueDate}</Typography>
          </div>
          <Typography>Admission</Typography>
          <div className={classes.detailspanel}>
            <Typography>
              Total Fees: {row.original.fees.academics.total}
            </Typography>
            <Typography>Received Fees: {row.original.fees.academics.received}</Typography>
            <Typography>Last Paid Date: {row.original.fees.academics.lastPaidDate}</Typography>
            <Typography>Due Date: {row.original.fees.academics.dueDate}</Typography>
          </div>
          <Typography>Exams</Typography>
          <div className={classes.detailspanel}>
            <Typography>
              Total Fees: {row.original.fees.academics.total}
            </Typography>
            <Typography>Received Fees: {row.original.fees.academics.received}</Typography>
            <Typography>Last Paid Date: {row.original.fees.academics.lastPaidDate}</Typography>
            <Typography>Due Date: {row.original.fees.academics.dueDate}</Typography>
          </div>
        </div>
      )}
    />
  );
};

export default StudentsTable;
