import React, { useEffect } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import Header from "./Components/Header";
import Main from "./Main";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";


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
    height: "800px",
  },
});

const App = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [success, setSuccess] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleLogOut = () => {
    setSuccess(false);
    setUser({});
    setUserName("");
    setPassword("");
    localStorage.clear();
  };
  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserName(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName === "" || password === "") {
      setSuccess(false);
    } else {
      await axios
        .post("https://reqres.in/api/login", {
          email: userName,
          password: password,
        })
        .then((result) => {
          console.log(result);
          setSuccess(true);
          setUser(result.data);
          localStorage.setItem("user", JSON.stringify(result.data.token));
        })
        .catch((error) => {
          alert("invalid user");
          handleLogOut();
          console.log(error);
        });
    }
  };
  if (success) {
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
  return (
    <>
      <div className={classes.formback}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div>Login</div>

          <label className={classes.label}>User Name:</label>
          <div>
            <input
              type="text"
              value={userName}
              placeholder="Enter a Username"
              onChange={handleUserName}
              className={classes.input}
            />
          </div>
          <label className={classes.label}>Password:</label>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Enter a Password"
              onChange={handlePassword}
              className={classes.input}
            />
          </div>
          <div>
            <Button variant="contained" fullWidth type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
