import React from "react";
import { Button, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { IFormData } from "../Todo";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
import TaskAction from "./TaskAction";

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
  span: {
    color: "red",
  },
});

const TodoTaskForm: React.FC = () => {
  const classes = useStyles();
  const [todoList, setTodoList] = useState<IFormData[]>([]);
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(1);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    setCount((prevCount) => prevCount + 1);
    const date = new Date();
    const newTask = {
      taskName: data.taskName,
      description: data.description,
      id: count,
      date: date,
    };
    setTodoList([...todoList, newTask]);
    reset();
    handleClose();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Task
      </Button>

      <Grid item container justifyContent="center" alignItems="center">
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter task and description here.
              </DialogContentText>

              <TextField
                {...register("taskName", { required: true })}
                autoFocus
                margin="dense"
                id="name"
                label="Task Name"
                type="text"
                fullWidth
                variant="standard"
                placeholder="Enter Task"
                name="taskName"
              />
              {errors?.taskName && (
                <span className={classes.span}>This field is required</span>
              )}

              <TextField
                {...register("description", { required: true })}
                autoFocus
                margin="dense"
                id="new-description"
                label="Description"
                type="text"
                fullWidth
                variant="standard"
                name="description"
                placeholder="Description"
              ></TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button id="new-todo-button" variant="contained" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Grid>
      <TaskAction todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};

export default TodoTaskForm;
