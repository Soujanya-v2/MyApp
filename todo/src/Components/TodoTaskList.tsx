import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { TodoTaskProps } from "../Todo";

const TodoTaskList = ({ task, deleteTask }: TodoTaskProps) => {
  return (
    <>
      <div className="task">
        <div className="content">
          <span>{task.id}</span>
          <span>{task.taskName}</span>
          <span>{task.date.toLocaleString()}</span>
        </div>
        <IconButton
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </div>
    </>
  );
};

export default TodoTaskList;
