import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from '@mui/material';
import {ChangeEvent,useState} from 'react';
import {Button} from '@mui/material';
import TodoTask from "./TodoTask";

const useStyles=makeStyles({
    button:{
      paddingTop:30,
      height:40, 
    },
    todoList:{
     textAlign:"center",
     justifyItems:"center",
    
    },
    input:{
      height:40
    },
    
  });

  function InputBox() {
    const [task, setTask]=  useState<string>("");
    const [todoList, setTodoList]=  useState<IFormData[]>([]);

   const addTask=():void=>{
      const newTask={taskName:task};
      setTodoList([...todoList, newTask]);
      setTask("");
     
    };
    const classes=useStyles();
 const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
    if(event.target.name === "task"){
      setTask(event.target.value);
    }
  }

  const deleteTask=(taskDelete:string):void=>{
    setTodoList(todoList.filter((task)=>{
      return task.taskName !== taskDelete
    }))
  };
 
   return  ( <>
       <Grid item container justifyContent="center" alignItems="center" >
    <form className="form-container" >
    <label>ADD TASK</label>
    <input  type="text" className={classes.input}  placeholder='Enter Task Name' id="new-todo" name="task"  onChange={handleChange}/>
    <Button  id="new-todo-button" variant="contained" onClick={addTask}> SUBMIT</Button>
    </form>
   </Grid> 
   <Grid   className={classes.todoList} textAlign="center" justifyContent="center" >
      <h1>TODO LIST</h1>
     {todoList.map(( task:IFormData, key:number)=>{
      return <TodoTask key={key} task={task}  deleteTask={deleteTask}/>
     })}
     </Grid >
      </>
   )
    }
    

export default InputBox;