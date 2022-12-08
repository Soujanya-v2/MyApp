import React, { useEffect, useRef } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Components/Home";
import {
  currentUserSelector,
  setLoggedIn,
} from "./store/currentUser/currentUserSlice";
import getLoggedIn from "./services/getLoggedIn";
import LoginPage from "./Components/LoginPage";
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

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [currentUserFetched, setCurrentUserFetched] = useState(false);
  const { loggedIn } = useSelector(currentUserSelector);
  async function setCurrentUser() {
    dispatch(getLoggedIn());
    setCurrentUserFetched(true);
  }
  useEffect(() => {
    setCurrentUser();
  }, [dispatch, getLoggedIn]);

   return !loggedIn ? (
    <>
    <LoginPage />
    </>
  ) : (
    <>
         <Home />
      </>
  ); 
};

export default App;
