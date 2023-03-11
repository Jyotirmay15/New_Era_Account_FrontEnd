import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

const DeleteStudents = ({ setOpenDeleteForm, open, selectedRow, data, deleteStudentEntry }) => {
  const handleCancel = () => {
    setOpenDeleteForm(false);
  };

  const handleDelete = () => {
    setOpenDeleteForm(false);
    deleteStudentEntry(data[selectedRow]);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Delete Student Entry</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete the selected entry?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteStudents;
