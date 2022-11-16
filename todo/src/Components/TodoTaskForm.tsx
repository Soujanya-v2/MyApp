import React from "react";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import TodoTask from "./TodoTask";
import { IFormData } from "../Todo";
import { ChangeEvent, useState } from "react";
import { makeStyles } from "@material-ui/styles";

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

function TodoTaskForm() {
  const classes = useStyles();
  const [todoList, setTodoList] = useState<IFormData[]>([]);
  const [task, setTask] = useState<string>(" ");
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  const addTask = (): void => {
    const id = todoList.length + 1;
    const date = new Date();
    const newTask = { taskName: task, id: id, date: date };
    setTodoList([...todoList, newTask]);
    window.alert("Add");
    setTask("");
  };

  return (
    <>
      <Grid item container justifyContent="center" alignItems="center">
        <form className="form-container">
          <label>ADD TASK</label>
          <input
            type="text"
            className={classes.input}
            value={task}
            placeholder="Enter Task Name"
            id="new-todo"
            name="task"
            onChange={handleChange}
          />
          <Button
            id="new-todo-button"
            variant="contained"
            type="reset"
            onClick={addTask}
          >
            {" "}
            SUBMIT
          </Button>
        </form>
      </Grid>
      <TodoTask todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default TodoTaskForm;
