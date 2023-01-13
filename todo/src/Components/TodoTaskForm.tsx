import React from "react";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { IFormData } from "../Todo";
import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskActionDialogModal from "./TaskActionDialogModal";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  addTaskContainer: {
    paddingTop: "60px",
  },
});
const TodoTaskForm: React.FC = () => {
  const classes = useStyles();
  const [todoList, setTodoList] = useState<IFormData[]>([]);
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(1);

  const title = "Add";
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.addTaskContainer}
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          flex-direction="column"
        ></Grid>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Task
        </Button>
     
        <Grid item container justifyContent="center" alignItems="center">
          {open && (
            <TaskActionDialogModal
              title={title}
              open={open}
              setOpen={setOpen}
              sno={count}
              addTask={(task: IFormData) => {
                setCount((prevCount) => prevCount + 1);
                setTodoList([...todoList, task]);
              }}
            />
          )}
        </Grid>

        <TaskAction todoList={todoList} setTodoList={setTodoList} />
      </Grid>
    </>
  );
};

export default TodoTaskForm;
