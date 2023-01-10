import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TitleProps } from "../Todo";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { IFormData } from "../Todo";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  span: {
    color: "red",
  },
});
function TaskActionDialogModal({
  title,
  task,
  addTask,
  editTask,
  sno,
  open,
  setOpen,
}: TitleProps) {
  const classes = useStyles();
  const [editOpen, setEditOpen] = React.useState(open);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IFormData>();

  useEffect(() => {
    if (task) {
      setValue("taskName", task.taskName);
      setValue("description", task.description);
    }
  }, [task]);

  useEffect(() => {}, [editOpen]);

  const handleClose = () => {
    if (task) {
      reset();

      setOpen(false);
      setValue("taskName", task.taskName);
      setValue("description", task.description);
    } else {
      reset();
      setOpen(false);
    }
  };

  const onSave = (data: IFormData) => {
    if (title === "Edit" && task) {
      if (data.taskName !== null && data.description !== null) {
        if (editTask) {
          editTask(task.id, data);
        }
      }
    } else if (title === "Add" && addTask) {
      const date = new Date();
      if (sno) {
        const newTask = {
          taskName: data.taskName,
          description: data.description,
          id: sno,
          date: date,
        };
        addTask(newTask);
      }
    }
    setOpen(false);
  };

  return (
    <>
   
      <Grid item container justifyContent="center" alignItems="center">
        <Dialog open={editOpen} onClose={handleClose}>
          <form onSubmit={handleSubmit(onSave)}>
            <DialogTitle>{title} Task</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter task and description to be edited here.
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
                helperText="This field is required"
              />
              {/* {errors.taskName && (
                <span className={classes.span}>This field is required</span>
              )} */}

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
              />
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
    </>
  );
}

export default TaskActionDialogModal;









