import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { signOut } from "../store/currentUser/userSlice";

const useStyles = makeStyles({
  signoutText: {
    color: "blue",
    fontSize: "18px",
    cursor: "pointer",
  },
});
function SignOutModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const logOut = () => {
    dispatch(signOut());
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        className={classes.signoutText}
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
              logOut();
            }}
            autoFocus
            variant="contained"
          >
            <NavLink to="/login">SignOut</NavLink>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SignOutModal;
