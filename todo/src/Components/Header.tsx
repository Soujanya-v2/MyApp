import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  headerText: {
    color: "black",
    width: "50vh",
    backgroundColor: "grey",
    fontSize: "20px",
    display: "flex",
    flexDirection: "row",
    columnGap: "1400px",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.headerText}>
        <h2>TODO-LIST</h2>
      </Grid>
    </>
  );
};

export default Header;
