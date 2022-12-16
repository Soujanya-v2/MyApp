import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { currentUserSelector } from "./store/currentUser/userSlice";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";

function App() {
  const { loggedIn } = useSelector(currentUserSelector);
  return loggedIn ? (
    <>
      <Home />
    </>
  ) : (
    <>
      <LoginPage />
    </>
  );
}

export default App;
