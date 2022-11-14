import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

const TodoTask=({task,deleteTask}: TodoTaskProps)=>{
    return <div className="task">
        <div className="content">
            <span>{task.taskName}</span>
            {/* <span>{Date()}</span> */}
            </div>
            <IconButton onClick={()=>{deleteTask(task.taskName)}}><DeleteIcon></DeleteIcon></IconButton> 
            </div>
};

export default TodoTask;