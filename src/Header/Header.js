import React from "react";

import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar variant="sticky" >
      <Toolbar variant="dense">
        <Typography sx={{ flexGrow: 1 }}>
          New Era Public School
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
