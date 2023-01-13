import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  about: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    paddingTop: "40px",
  },
  aboutHeader: {
    fontSize: "60px",
  },
});

function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center">
        <div className={classes.about}>
          <div className={classes.aboutHeader}>About Us Page</div>
        </div>
      </Grid>
      <Grid container justifyContent="center">
        <div>Todo App</div>
      </Grid>
    </>
  );
}

export default AboutUs;
