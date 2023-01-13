import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  landingText: {
    backgroundColor: "darkgrey",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    fontSize: "70px",
    paddingTop: "60px",
  },
});

function LoginPageText() {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center" className={classes.landingText}>
        <div>Welcome to Todo App!!</div>
      </Grid>
    </>
  );
}

export default LoginPageText;
