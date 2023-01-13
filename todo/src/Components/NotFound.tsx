import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  notFound: {
    fontSize: "70px",
    marginTop: "80px",
  },
  errorMessage: {
    fontSize: "20px",
  },
});

function NotFound() {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center" className={classes.notFound}>
        Page Not Found
      </Grid>
      <Grid container justifyContent="center" className={classes.errorMessage}>
        404 Error!!!
      </Grid>
    </>
  );
}

export default NotFound;
