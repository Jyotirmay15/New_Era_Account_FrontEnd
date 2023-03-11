import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

import classes from "./NewStudentForm.module.css";
import { useRef } from "react";

const EditInfoForm = ({
  open,
  setOpen,
  data,
  selectedRow,
  updateStudentEntry,
}) => {
  const srnumberRef = useRef("");
  const nameRef = useRef("");
  const parentRef = useRef("");
  const addressRef = useRef("");
  const phoneRef = useRef("");
  const classRef = useRef("");
  const aadharRef = useRef("");

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
    const id = selectedRow >= 0 ? data[selectedRow]['_id'] : {};
    updateStudentEntry(entry, id);
    setOpen(false);
  };

  const editData = selectedRow >= 0 ? data[selectedRow] : {};

  return (
    <Dialog
    fullScreen
      open={open}
      maxWidth="700"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle className={classes.formhead}>
          {"Edit Student Details"}
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
              defaultValue={editData ? editData.srNumber : ""}
            />
            <TextField
              name="first_name"
              label="Name"
              inputRef={nameRef}
              required
              defaultValue={editData ? editData.name : ""}
            />
            <TextField
              name="parent_name"
              label="Parent Name"
              inputRef={parentRef}
              required
              defaultValue={editData ? editData.parent : ""}
            />
            <TextField
              name="class"
              label="Class"
              inputRef={classRef}
              required
              defaultValue={editData ? editData.class : ""}
            />
            <TextField
              name="address"
              required
              label="Address"
              inputRef={addressRef}
              defaultValue={editData ? editData.address : ""}
            />
            <TextField
              name="phone"
              required
              label="Phone"
              inputRef={phoneRef}
              defaultValue={editData ? editData.phone : ""}
            />
            <TextField
              name="aadhar"
              label="Aadhar Number"
              inputRef={aadharRef}
              type="number"
              defaultValue={editData ? editData.aadhar : ""}
            />
          </div>
          <h3 className={classes.h3style}>Academics</h3>
          <div className={classes.formbox}>
            <TextField
              label="Total Fees"
              inputRef={academicsTotalFeesRef}
              required
              defaultValue={editData ? editData.academicsTotal : ""}
            />
            <TextField
              label="Received Fees"
              inputRef={academicsReceivedFeesRef}
              required
              defaultValue={editData ? editData.academicsReceived : ""}
            />
            <TextField
              label="Pending Fees"
              inputRef={academicsPendingFeesRef}
              required
              defaultValue={editData ? editData.academicsPending : ""}
            />
            <TextField
              label="Last Paid Date"
              type="date"
              required
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={academicsLastPaidDateRef}
              defaultValue={editData ? editData.academicsLastPaidDate : ""}
            />
            <TextField
              label="Due Date"
              type="date"
              required
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={academicsDueDateRef}
              defaultValue={editData ? editData.academicsDueDate : ""}
            />
          </div>
          <h3 className={classes.h3style}>Transport</h3>
          <div className={classes.formbox}>
            <TextField
              label="Total Fees"
              inputRef={transportTotalFeesRef}
              required
              defaultValue={editData ? editData.transportTotal : ""}
            />
            <TextField
              label="Received Fees"
              inputRef={transportReceivedFeesRef}
              required
              defaultValue={editData ? editData.transportReceived : ""}
            />
            <TextField
              label="Pending Fees"
              inputRef={transportPendingFeesRef}
              required
              defaultValue={editData ? editData.transportPending : ""}
            />
            <TextField
              label="Last Paid Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={transportLastPaidDateRef}
              required
              defaultValue={editData ? editData.transportLastPaidDate : ""}
            />
            <TextField
              label="Due Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={transportDueDateRef}
              required
              defaultValue={editData ? editData.transportDueDate : ""}
            />
          </div>
          <h3 className={classes.h3style}>Admission</h3>
          <div className={classes.formbox}>
            <TextField
              label="Total Fees"
              inputRef={admissionTotalFeesRef}
              required
              defaultValue={editData ? editData.admissionTotal : ""}
            />
            <TextField
              label="Received Fees"
              inputRef={admissionReceivedFeesRef}
              required
              defaultValue={editData ? editData.admissionReceived : ""}
            />
            <TextField
              label="Pending Fees"
              inputRef={admissionPendingFeesRef}
              required
              defaultValue={editData ? editData.admissionPending : ""}
            />
            <TextField
              label="Last Paid Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={admissionLastPaidDateRef}
              required
              defaultValue={editData ? editData.admissionLastPaidDate : ""}
            />
          </div>
          <h3 className={classes.h3style}>Exams</h3>
          <div className={classes.formbox}>
            <TextField
              label="Total Fees"
              inputRef={examsTotalFeesRef}
              required
              defaultValue={editData ? editData.examsTotal : ""}
            />
            <TextField
              label="Received Fees"
              inputRef={examsReceivedFeesRef}
              required
              defaultValue={editData ? editData.examsReceived : ""}
            />
            <TextField
              label="Pending Fees"
              inputRef={examsPendingFeesRef}
              required
              defaultValue={editData ? editData.examsPending : ""}
            />
            <TextField
              label="Last Paid Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={examsLastPaidDateRef}
              required
              defaultValue={editData ? editData.examsLastPaidDate : ""}
            />
            <TextField
              label="Due Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={examsDueDateRef}
              required
              defaultValue={editData ? editData.examsDueDate : ""}
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

export default EditInfoForm;
