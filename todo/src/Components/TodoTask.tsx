import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";
import { TodoProps } from "../Todo";
import TodoTaskList from "./TodoTaskList";

const useStyles = makeStyles({
  button: {
    paddingTop: 30,
    height: 40,
  },
  todoList: {
    textAlign: "center",
    justifyItems: "center",
  },
  input: {
    height: 40,
  },
});

function TodoTask({ todoList, setTodoList }: TodoProps) {
  const classes = useStyles();

  const deleteTask = (taskDelete: number): void => {
    window.alert("Delete");
    setTodoList(
      todoList.filter((task) => {
        return task.id !== taskDelete;
      })
    );
  };

  return (
    <Grid
      className={classes.todoList}
      textAlign="center"
      justifyContent="center"
    >
      <h1>TODO LIST</h1>
      {todoList.map((task) => {
        return (
          <TodoTaskList
            task={task}
            id={task.id}
            date={task.date}
            deleteTask={deleteTask}
          />
        );
      })}
    </Grid>
  );
}

export default TodoTask;
