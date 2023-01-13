import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { currentUserSelector } from "../store/currentUser/userSlice";

const useStyles = makeStyles({
  topbar: {
    display: "flex",
    flexDirection: "row",
    columnGap: "20px",
    fontSize: "20px",
    justifyContent: "right",
    marginBottom: "30px",
  },
  userName: {
    marginTop: "10px",
    color: "#07030c",
    fontWeight: "bolder",
  },
  welcome: {
    marginTop: "10px",
    color: "#a74881",
    fontWeight: "bolder",
  },
});
function Home() {
  const classes = useStyles();
  const { userName } = useSelector(currentUserSelector);

  return (
    <>
      <div className={classes.topbar}>
        <div className={classes.welcome}> Welcome,</div>
        <div className={classes.userName}>{userName}</div>
      </div>
    </>
  );
}

export default Home;
