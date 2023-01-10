import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button1: {
    color: "blue",
    borderRadius: "2px",
    fontSize: "20px",
    justifyContent: "center",
  },
});

function TodoB() {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.button1}>TodoB</Button>
    </div>
  );
}

export default TodoB;
