import React, { useEffect, useRef } from "react";
import { Grid, TextField } from "@mui/material";
import Header from "../Components/Header";
import Main from "../Main";
import { Link, Navigate, useRouteLoaderData } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";

import {
  currentUserSelector,
  setLoggedIn,
} from "../store/currentUser/currentUserSlice";
import LoginPage from "../Components/LoginPage";

const useStyles = makeStyles({
  routerbutton: {
    color: "white",
    gap: "40px",
    textDecoration: "none",
  },
  topbar: {
    display: "flex",
    flexDirection: "row",
    columnGap: "20px",
    fontSize: "20px",
    justifyContent: "right",
    fontWeight: "bolder",
  },
  userName: {
    marginTop: "10px",
    color: "#07030c",
  },
  welcome: {
    marginTop: "10px",
    color: "#a74881",
  },
  form: {
    width: "400px",
    height: "300px",
    alignContent: "center",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    position: "relative",
    left: "700px",
    top: "300px",
    alignItems: "center",
    borderRadius: "30px",
  },
  input: {
    width: "350px",
    height: "40px",
    borderRadius: "30px",
    textAlign: "center",
    borderWidth: "1px",
    fontSize: "15px",
  },
  label: {
    fontWeight: "bolder",
    fontSize: "20px",
  },
  formback: {
    backgroundColor: "#bdbaba",
    height: "960px",
  },
});
function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { user } = useSelector(currentUserSelector);
  const { loggedIn } = useSelector(currentUserSelector);
  const loggedInUser = localStorage.getItem("email");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };
  const handleLogOut = () => {
    handleClickClose();

    localStorage.clear();
  };
  return (
    <>
      <div className={classes.topbar}>
        <div className={classes.welcome}> Welcome,</div>
        <div className={classes.userName}>{loggedInUser}</div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              handleClickOpen();
            }}
          >
            SignOut
          </Button>
          <Dialog
            open={open}
            onClose={handleClickClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"SignOut"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to signout?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose}>Cancel</Button>
              <Button
                onClick={() => {
                  handleLogOut();
                }}
                autoFocus
                variant="contained"
              >
                SignOut
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <Grid container justifyContent="center" paddingTop="25px" gap="30px">
        <Header />
        <Main />
      </Grid>
    </>
  );
}

export default Home;
