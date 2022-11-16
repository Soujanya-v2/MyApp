import React from "react";
import "./App.css";
import { Grid } from "@mui/material";
import Header from "./Components/Header";
import Main from "./Main";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  routerbutton: {
    color: "white",
    gap: "40px",
    textDecoration: "none",
  },
});
function App() {
  const classes = useStyles();

  return (
    <>
      <Grid container justifyContent="center" paddingTop="25px" gap="30px">
        <Button variant="contained">
          <Link className={classes.routerbutton} to="/">
            Todo List
          </Link>
        </Button>
        <Button variant="contained">
          <Link className={classes.routerbutton} to="/todob">
            TodoB
          </Link>
        </Button>
        <Header />
        <Main />
      </Grid>
    </>
  );
}

export default App;
