import React from "react";
import { Button, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import classes from "./FormHeader.module.css";

const FormHeader = ({
  setOpenCreateForm,
  setOpenDeleteForm,
  setOpenEditForm,
  enableDelete,
  enableEdit,
  selectedRow,
}) => {
  const handleCreateForm = () => {
    setOpenCreateForm(true);
  };

  const handleDelete = () => {
    setOpenDeleteForm(true);
  };

  const handleEdit = () => {
    setOpenEditForm(true);
  }
  return (
    <div className={classes.formheader}>
      <div>
        <Tooltip title="Create New Entry">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleCreateForm}
          >
            New
          </Button>
        </Tooltip>
      </div>
      <div>
        <Tooltip title="Edit Selected Entry">
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            disabled={!enableEdit}
            onClick={handleEdit}
          >
            Edit
          </Button>
        </Tooltip>
      </div>
      <div>
        <Tooltip title="Edit Selected Entry">
          <Button
            variant="contained"
            color="primary"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
            disabled={!enableDelete}
          >
            Delete
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default FormHeader;
