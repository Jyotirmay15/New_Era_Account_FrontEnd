import { Typography } from "@mui/material";

import StudentDetailsTable from "./StudentDetailsTable";

import classes from "./StudentsTable.module.css";
const StudentDetailsPanel = ({ row }) => {
  const data = row.original;

  return (
    <div>
      <Typography variant="h6">Student Photograph</Typography>
      <div className={classes.imgsection}>
        <img src={"http://localhost:8082/" + data.image} />
      </div>
      <Typography variant="h6">Aadhar Number: {data && data.aadhar}</Typography>

      <StudentDetailsTable data={data} />
    </div>
  );
};

export default StudentDetailsPanel;
