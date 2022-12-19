import React from "react";
import { Grid } from "@mui/material";
import Header from "../Components/Header";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "../store/currentUser/userSlice";
import { currentUserSelector } from "../store/currentUser/userSlice";
import TodoTask from "./TodoTask";
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
  const {userName}= useSelector(currentUserSelector);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const logOut = () => {
    dispatch(signOut({ loggedIn: false }));
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={classes.topbar}>
        <div className={classes.welcome}> Welcome,</div>
        <div className={classes.userName}>{userName}</div>
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
                  logOut();
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
        <TodoTask />
      </Grid>
    </>
  );
}

export default Home;
