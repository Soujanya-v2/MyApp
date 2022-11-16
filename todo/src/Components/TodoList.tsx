import React from "react";
import "../App.css";
import { Grid } from "@mui/material";
import TodoTaskList from "./TodoTaskForm";

function TodoList() {
  return (
    <>
      <Grid item container justifyContent="center">
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          flex-direction="column"
        ></Grid>
        <TodoTaskList />
      </Grid>
    </>
  );
}

export default TodoList;
