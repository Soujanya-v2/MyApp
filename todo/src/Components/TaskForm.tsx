import React from 'react';
import { IFormData,TodoProps } from '../Todo';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {DialogActions, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
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
  
function TaskForm({todoList,setTodoList}:TodoProps) {
    const classes=useStyles();
   
    const {
        register,
        formState: { errors },
      } = useForm<IFormData>();

      
  return (
    <>
    <DialogContent>
              <DialogContentText>
                Please enter edited task and description here.
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
                <Button type="submit">Save</Button>
            </DialogActions>
          
    </>
  )
}

export default TaskForm