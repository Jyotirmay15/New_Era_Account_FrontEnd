import { Typography } from "@mui/material";

import classes from "./StudentsTable.module.css";
const StudentDetailsPanel = ({ row }) => {
  const data = row.original;

  return (
    <div>
      <Typography>Student Photograph</Typography>
      <img
        style={{height: "200px", width: "200px"}}
        src={"http://localhost:8082/" + data.image}
      />
      <div className={classes.detailspanel}>
        <Typography>Aadhar Number: {data && data.aadhar}</Typography>
      </div>
      <Typography>Academics</Typography>
      <div className={classes.detailspanel}>
        <Typography>Total Fees: {data && data.academicsTotal}</Typography>
        <Typography>Received Fees: {data && data.academicsReceived}</Typography>
        <Typography>Pending Fees: {data && data.academicsPending}</Typography>
        <Typography>
          Last Paid Date: {data && data.academicsLastPaidDate}
        </Typography>
        <Typography>Due Date: {data && data.academicsDueDate}</Typography>
      </div>
      <Typography>Transport</Typography>
      <div className={classes.detailspanel}>
        <Typography>Total Fees: {data && data.transportTotal}</Typography>
        <Typography>Received Fees: {data && data.transportReceived}</Typography>
        <Typography>Pending Fees: {data && data.transportPending}</Typography>
        <Typography>
          Last Paid Date:
          {data && data.transportLastPaidDate}
        </Typography>
        <Typography>Due Date: {data && data.transportDueDate}</Typography>
      </div>
      <Typography>Admission</Typography>
      <div className={classes.detailspanel}>
        <Typography>Total Fees: {data && data.admissionTotal}</Typography>
        <Typography>Received Fees: {data && data.admissionReceived}</Typography>
        <Typography>Pending Fees: {data && data.admissionPending}</Typography>
        <Typography>
          Last Paid Date:
          {data && data.admissionLastPaidDate}
        </Typography>
      </div>
      <Typography>Exams</Typography>
      <div className={classes.detailspanel}>
        <Typography>Total Fees: {data && data.examsTotal}</Typography>
        <Typography>Received Fees: {data && data.examsReceived}</Typography>
        <Typography>Pending Fees: {data && data.examsPending}</Typography>
        <Typography>
          Last Paid Date: {data && data.examsLastPaidDate}
        </Typography>
        <Typography>Due Date: {data && data.examsDueDate}</Typography>
      </div>
    </div>
  );
};

export default StudentDetailsPanel;
