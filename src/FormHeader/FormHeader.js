import React from "react";
import { Button, Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";

import classes from "./FormHeader.module.css";

const FormHeader = () => {
  return (
    <div className={classes.formheader}>
      <div>
        <Tooltip title="Create New Entry">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            New Entry
          </Button>
        </Tooltip>
      </div>
      <div>
        <Tooltip title="Edit Selected Entry">
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
          >
            Edit Entry
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default FormHeader;
