import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import classes from "./StudentsTable.module.css";

export default function StudentDetailsTable({ data }) {
  const tableValues = [
    {
      Admission: {
        total: data
          ? data.admissionTotal !== null
            ? data.admissionTotal
            : ""
          : "",
        received: data
          ? data.admissionReceived !== null
            ? data.admissionReceived
            : ""
          : "",
        pending: data
          ? data.admissionPending !== null
            ? data.admissionPending
            : ""
          : "",
        lastPaidDate: data
          ? data.admissionLastPaidDate !== null
            ? data.admissionLastPaidDate
            : ""
          : "",
      },
    },
    {
      Academics: {
        total: data
          ? data.academicsTotal !== null
            ? data.academicsTotal
            : ""
          : "",
        received: data
          ? data.academicsReceived !== null
            ? data.academicsReceived
            : ""
          : "",
        pending: data
          ? data.academicsPending !== null
            ? data.academicsPending
            : ""
          : "",
        lastPaidDate: data
          ? data.academicsLastPaidDate !== null
            ? data.academicsLastPaidDate
            : ""
          : "",
        dueDate: data
          ? data.academicsDueDate !== null
            ? data.academicsDueDate
            : ""
          : "",
      },
    },
    {
      Transport: {
        total: data
          ? data.transportTotal !== null
            ? data.transportTotal
            : ""
          : "",
        received: data
          ? data.transportReceived !== null
            ? data.transportReceived
            : ""
          : "",
        pending: data
          ? data.transportPending !== null
            ? data.transportPending
            : ""
          : "",
        lastPaidDate: data
          ? data.transportLastPaidDate !== null
            ? data.transportLastPaidDate
            : ""
          : "",
        dueDate: data
          ? data.transportDueDate !== null
            ? data.transportDueDate
            : ""
          : "",
      },
    },
    {
      Exams: {
        total: data ? (data.examsTotal !== null ? data.examsTotal : "") : "",
        received: data
          ? data.examsReceived !== null
            ? data.examsReceived
            : ""
          : "",
        pending: data
          ? data.examsPending !== null
            ? data.examsPending
            : ""
          : "",
        lastPaidDate: data
          ? data.examsLastPaidDate !== null
            ? data.examsLastPaidDate
            : ""
          : "",
        dueDate: data
          ? data.examsDueDate !== null
            ? data.examsDueDate
            : ""
          : "",
      },
    },
  ];

  return (
    <div className={classes.detailstable}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.cellheaders}>Fees Type</TableCell>
              <TableCell align="center" className={classes.cellheaders}>Total Fees</TableCell>
              <TableCell align="center" className={classes.cellheaders}>Received Fees</TableCell>
              <TableCell align="center" className={classes.cellheaders}>Pending Fees</TableCell>
              <TableCell align="center" className={classes.cellheaders}>Last Paid Date</TableCell>
              <TableCell align="center" className={classes.cellheaders}>Due Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableValues.map((row, index) => {
              const current = Object.keys(row)[0];
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" className={classes.cellheaders}>{current}</TableCell>
                  <TableCell align="center">{row[current].total}</TableCell>
                  <TableCell align="center" className={classes.receivedcell}>
                    {row[current].received}
                  </TableCell>
                  <TableCell align="center" className={row[current].pending>0 && classes.pendingcell}>
                    {row[current].pending}
                  </TableCell>
                  <TableCell align="center">
                    {row[current].lastPaidDate}
                  </TableCell>
                  <TableCell align="center">{row[current].dueDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
