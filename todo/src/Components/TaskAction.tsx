import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";
import { IFormData, TodoProps } from "../Todo";
import TaskActionDialog from "./TaskActionDialog";

const useStyles = makeStyles({
  todoList: {
    textAlign: "center",
    justifyItems: "center",
  },
});

function TaskAction({ todoList, setTodoList }: TodoProps) {
  const classes = useStyles();

  const deleteTask = (taskDelete: number): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== taskDelete;
      })
    );
  };

  const editTask = (taskEditId: number, data: IFormData): void => {
    setTodoList((todoList) =>
      todoList.map((task) => {
        if (task.id === taskEditId) {
          task.taskName = data.taskName;
          task.description = data.description;

          return {
            ...task,
            taskName: data.taskName,
            description: data.description,
          };
        }
        return task;
      })
    );
  };
  return (
    <Grid
      className={classes.todoList}
      textAlign="center"
      justifyContent="center"
    >
      <h1>TODO LIST</h1>
      <table>
        <thead className="task">
          <tr className="content">
            <th>Sl.No.</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
      {todoList.map((task) => {
        return (
          <>
            <TaskActionDialog
              task={task}
              description={task.description}
              id={task.id}
              date={task.date}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          </>
        );
      })}
    </Grid>
  );
}

export default TaskAction;
