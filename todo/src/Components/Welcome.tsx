import React from "react";
import { useSelector } from "react-redux";
import { currentUserSelector } from "../store/currentUser/userSlice";
import Navbar from "./Navbar";
import LoginLayout from "./LoginLayout";
import LandingPageText from "./LandingPageText";
import LoginPageText from "./LoginPageText";

function Welcome() {
  const { loggedIn } = useSelector(currentUserSelector);
  console.log("gg", loggedIn);
  return loggedIn ? (
    <>
      <LoginLayout />
      <LoginPageText />
    </>
  ) : (
    <>
      <Navbar />
      <LandingPageText />
    </>
  );
}

export default Welcome;
