import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TitleProps, TodoTaskProps } from "../Todo";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TaskActionDialogModal from "./TaskActionDialogModal";

const TaskActionDialog = ({ task, deleteTask, editTask}: TodoTaskProps) => {
  const [open, setOpen] = React.useState(false);
  const title = "Edit";
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpen = () => {
    setOpenEdit(true);
  };

  const handleClickClose = () => {
    setOpenEdit(false);
  };
  const handleOpen = () => {
   setOpen(true)
  };

useEffect(()=>{

},[open])

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
                open={openEdit}
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
                      setOpenEdit(false);
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
              {open && <TaskActionDialogModal  
              editTask={editTask}
                title={title}
                task={task}
                open={open}
                setOpen={setOpen}
                  />} 
            </div>
          </td>
        </div>
      </div>
    </>
  );
};

export default TaskActionDialog;
