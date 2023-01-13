import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  landingText: {
    // backgroundColor: "darkgrey",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    fontSize: "70px",
    paddingTop:"60px"
  },
});

function LandingPageText() {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center" className={classes.landingText}>
        <div >Landing Page </div>
      </Grid>
    </>
  );
}

export default LandingPageText;
