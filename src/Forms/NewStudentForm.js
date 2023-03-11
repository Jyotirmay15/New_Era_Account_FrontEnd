import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

import classes from "./NewStudentForm.module.css";

const NewStudentForm = ({ open, setOpen, addStudentEntry }) => {
  const srnumberRef = useRef("");
  const nameRef = useRef("");
  const parentRef = useRef("");
  const addressRef = useRef("");
  const phoneRef = useRef("");
  const classRef = useRef("");
  const aadharRef = useRef("");
  const imageInput = useRef("");

  const transportTotalFeesRef = useRef();
  const transportReceivedFeesRef = useRef();
  const transportPendingFeesRef = useRef();
  const transportLastPaidDateRef = useRef();
  const transportDueDateRef = useRef();

  const admissionTotalFeesRef = useRef();
  const admissionReceivedFeesRef = useRef();
  const admissionPendingFeesRef = useRef();
  const admissionLastPaidDateRef = useRef();

  const academicsTotalFeesRef = useRef();
  const academicsReceivedFeesRef = useRef();
  const academicsPendingFeesRef = useRef();
  const academicsLastPaidDateRef = useRef();
  const academicsDueDateRef = useRef();

  const examsTotalFeesRef = useRef();
  const examsReceivedFeesRef = useRef();
  const examsPendingFeesRef = useRef();
  const examsLastPaidDateRef = useRef();
  const examsDueDateRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let entry = {
      srNumber: srnumberRef.current.value,
      firstName: nameRef.current.value,
      parent: parentRef.current.value,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      class: classRef.current.value,
      aadhar: aadharRef.current.value,

      transportTotal: transportTotalFeesRef.current.value,
      transportReceived: transportReceivedFeesRef.current.value,
      transportPending: transportPendingFeesRef.current.value,
      transportLastPaidDate: transportLastPaidDateRef.current.value,
      transportDueDate: transportDueDateRef.current.value,

      admissionTotal: admissionTotalFeesRef.current.value,
      admissionReceived: admissionReceivedFeesRef.current.value,
      admissionPending: admissionPendingFeesRef.current.value,
      admissionLastPaidDate: admissionLastPaidDateRef.current.value,

      examTotal: examsTotalFeesRef.current.value,
      examReceived: examsReceivedFeesRef.current.value,
      examPending: examsPendingFeesRef.current.value,
      examLastPaidDate: examsLastPaidDateRef.current.value,
      examDueDate: examsDueDateRef.current.value,

      academicsTotal: academicsTotalFeesRef.current.value,
      academicsReceived: academicsReceivedFeesRef.current.value,
      academicsPending: academicsPendingFeesRef.current.value,
      academicsLastPaidDate: academicsLastPaidDateRef.current.value,
      academicsDueDate: academicsDueDateRef.current.value,

      image: imageInput.current.files[0],
    };

    const formData = new FormData();

    for (const [key, value] of Object.entries(entry)) {
      formData.append(key, value);
    }

    addStudentEntry(formData);
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      maxWidth="700"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      fullScreen
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle className={classes.formhead}>
          {"Student Details"}
        </DialogTitle>
        <DialogContent className={classes.formsection}>
          <h3 className={classes.h3style}>Personal Information</h3>
          <div className={classes.formbox}>
            <TextField
              name="srnumber"
              label="Sr Number"
              inputRef={srnumberRef}
              required
              type="number"
            />
            <TextField
              name="first_name"
              label="Name"
              inputRef={nameRef}
              required
            />
            <TextField
              name="parent_name"
              label="Parent Name"
              inputRef={parentRef}
              required
            />
            <TextField
              name="class"
              label="Class"
              inputRef={classRef}
              required
            />
            <TextField
              name="address"
              label="Address"
              inputRef={addressRef}
              required
            />
            <TextField
              name="phone"
              label="Phone"
              inputRef={phoneRef}
              required
              type="number"
            />
            <TextField
              name="aadhar"
              label="Aadhar Number"
              inputRef={aadharRef}
              type="number"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => imageInput.current.click()}
            >
              Upload Image
            </Button>
            <input ref={imageInput} type="file" style={{ display: "none" }} />
          </div>
          <h3 className={classes.h3style}>Academics</h3>
          <div className={classes.formbox}>
            <TextField
              label="Total Fees"
              inputRef={academicsTotalFeesRef}
              required
              type="number"
            />
            <TextField
              label="Received Fees"
              inputRef={academicsReceivedFeesRef}
              required
              type="number"
            />
            <TextField
              label="Pending Fees"
              inputRef={academicsPendingFeesRef}
              required
              type="number"
            />
            <TextField
              label="Last Paid Date"
              type="date"
              required
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={academicsLastPaidDateRef}
            />
            <TextField
              label="Due Date"
              type="date"
              required
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={academicsDueDateRef}
            />
          </div>
          <h3 className={classes.h3style}>Transport</h3>
          <div className={classes.formbox}>
            <TextField
              label="Total Fees"
              inputRef={transportTotalFeesRef}
              required
              type="number"
            />
            <TextField
              label="Received Fees"
              inputRef={transportReceivedFeesRef}
              required
              type="number"
            />
            <TextField
              label="Pending Fees"
              inputRef={transportPendingFeesRef}
              required
              type="number"
            />
            <TextField
              label="Last Paid Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={transportLastPaidDateRef}
              required
            />
            <TextField
              label="Due Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={transportDueDateRef}
              required
            />
          </div>
          <h3 className={classes.h3style}>Admission</h3>
          <div className={classes.formbox}>
            <TextField
              label="Total Fees"
              inputRef={admissionTotalFeesRef}
              required
              type="number"
            />
            <TextField
              label="Received Fees"
              inputRef={admissionReceivedFeesRef}
              required
              type="number"
            />
            <TextField
              label="Pending Fees"
              inputRef={admissionPendingFeesRef}
              required
              type="number"
            />
            <TextField
              label="Last Paid Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={admissionLastPaidDateRef}
              required
            />
          </div>
          <h3 className={classes.h3style}>Exams</h3>
          <div className={classes.formbox}>
            <TextField
              label="Total Fees"
              inputRef={examsTotalFeesRef}
              required
              type="number"
            />
            <TextField
              label="Received Fees"
              inputRef={examsReceivedFeesRef}
              required
              type="number"
            />
            <TextField
              label="Pending Fees"
              inputRef={examsPendingFeesRef}
              required
              type="number"
            />
            <TextField
              label="Last Paid Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              required
              inputRef={examsLastPaidDateRef}
            />
            <TextField
              label="Due Date"
              type="date"
              required
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={examsDueDateRef}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            variant="contained"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button autoFocus variant="contained" type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default NewStudentForm;
