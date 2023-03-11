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
  const admissionDueDateRef = useRef();

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
      // image: imageInput.current.files[0],
      fees: {
        transport: {
          total: transportTotalFeesRef.current.value,
          received: transportReceivedFeesRef.current.value,
          pending: transportPendingFeesRef.current.value,
          lastPaidDate: transportLastPaidDateRef.current.value,
          dueDate: transportDueDateRef.current.value,
        },
        admission: {
          total: admissionTotalFeesRef.current.value,
          received: admissionReceivedFeesRef.current.value,
          pending: admissionPendingFeesRef.current.value,
          lastPaidDate: admissionLastPaidDateRef.current.value,
        },
        exam: {
          total: examsTotalFeesRef.current.value,
          received: examsReceivedFeesRef.current.value,
          pending: examsPendingFeesRef.current.value,
          lastPaidDate: examsLastPaidDateRef.current.value,
          dueDate: examsDueDateRef.current.value,
        },
        academics: {
          total: academicsTotalFeesRef.current.value,
          received: academicsReceivedFeesRef.current.value,
          pending: academicsPendingFeesRef.current.value,
          lastPaidDate: academicsLastPaidDateRef.current.value,
          dueDate: academicsDueDateRef.current.value,
        },
      },
    };

    const imageEntry = {
      srNumber: srnumberRef.current.value,
      // image: imageInput.current.files[0],
    };

    addStudentEntry(entry, imageEntry);
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
            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => imageInput.current.click()}
            >
              Upload Image
            </Button>
            <input ref={imageInput} type="file" style={{ display: "none" }} /> */}
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
