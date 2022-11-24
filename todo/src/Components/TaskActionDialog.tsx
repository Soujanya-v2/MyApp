import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TodoTaskProps } from "../Todo";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { IFormData } from "../Todo";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  span: {
    color: "red",
  },
});

const TaskActionDialog = ({ task, deleteTask, editTask }: TodoTaskProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [name, setName] = useState<string>(task.taskName);
  const [description, setDescription] = useState<string>(task.description);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpenEdit(true);
  };
  const handleClose = () => {
    setOpenEdit(false);
    setName(task.taskName);
    setDescription(task.description);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSave = (data: IFormData) => {
    if (
      setName(data.taskName) !== null &&
      setDescription(data.description) !== null
    ) {
      editTask(task.id, name, description);
    }

    setOpenEdit(false);
  };

  return (
    <>
      <div className="task">
        <div className="content">
          <td>{task.id}</td>
          <td>{task.taskName}</td>
          <td>{task.description}</td>
          <td>{task.date.toLocaleString()}</td>

          <td>
            <div className="actionButton">
              <IconButton onClick={handleClickOpen}>
                <DeleteIcon></DeleteIcon>
              </IconButton>
              <Dialog
                open={open}
                onClose={handleClickClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Delete?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClickClose}>Cancel</Button>
                  <Button
                    onClick={() => {
                      deleteTask(task.id);
                      setOpen(false);
                    }}
                    autoFocus
                    variant="contained"
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>

              <IconButton onClick={handleOpen}>
                <EditIcon></EditIcon>
              </IconButton>

              <Grid item container justifyContent="center" alignItems="center">
                <Dialog open={openEdit} onClose={handleClose}>
                  <form onSubmit={handleSubmit(onSave)}>
                    <DialogTitle>Edit Task</DialogTitle>
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
                        value={name}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                      />
                      {errors.taskName && (
                        <td className={classes.span}>This field is required</td>
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
                        value={description}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setDescription(event.target.value)}
                        name="description"
                        placeholder="Description"
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button
                        id="new-todo-button"
                        variant="contained"
                        type="submit"
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </form>
                </Dialog>
              </Grid>
            </div>
          </td>
        </div>
      </div>
    </>
  );
};

export default TaskActionDialog;
