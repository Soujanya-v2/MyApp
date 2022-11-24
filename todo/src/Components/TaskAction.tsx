import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";
import { TodoProps } from "../Todo";
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

  const editTask = (
    taskEditId: number,
    taskEditName: string,
    taskEditDescription: string
  ): void => {
    console.log("taskEditName", taskEditName);
    setTodoList((todoList) =>
      todoList.map((task) => {
        if (task.id === taskEditId) {
          task.taskName = taskEditName;
          task.description = taskEditDescription;
          return {
            ...task,
            taskName: taskEditName,
            description: taskEditDescription,
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
