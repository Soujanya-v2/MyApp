import React, { useEffect } from "react";
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
    reset();
    setValue("taskName", task.taskName);
    setValue("description",task.description);
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IFormData>();
 
  useEffect(() => {
    setValue("taskName", task.taskName);
    setValue("description", task.description);
  },[task]);

  const onSave = (data: IFormData) => {
    if (data.taskName !== null && data.description !== null) {
      editTask(task.id, data);
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
                      />
                      {errors.taskName && (
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


// import React, { useEffect } from "react";
// import "./App.css";
// import { Grid } from "@mui/material";
// import Header from "./Components/Header";
// import Main from "./Main";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/styles";
// import { Button } from "@mui/material";
// import { useState } from "react";
// import axios from "axios";

// const useStyles = makeStyles({
//   routerbutton: {
//     color: "white",
//     gap: "40px",
//     textDecoration: "none",
//   },
// });

// const App = () => {
//   const classes = useStyles();
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser);
//       setUser(foundUser);
//     }
//   }, []);
//   const handleLogOut = () => {
//     setUser({});
//     setUserName("");
//     setPassword("");
//     localStorage.clear();
//   };
//   const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const user = { userName, password };

//     const response = await axios.post("/", user);
//     setUser(response.data);
//     localStorage.setItem("user", response.data);
//     console.log(response.data);
//   };

//   // if (!user) {
//   // return (<>
//   //   <Button onClick={handleLogOut}>Sign Out</Button>
//   //   <Grid container justifyContent="center" paddingTop="25px" gap="30px">
//   //     <Button variant="contained">
//   //       <Link className={classes.routerbutton} to="/">
//   //         Todo List
//   //       </Link>
//   //     </Button>
//   //     <Button variant="contained">
//   //       <Link className={classes.routerbutton} to="/todob">
//   //         TodoB
//   //       </Link>
//   //     </Button>
//   //     <Header />
//   //     <Main />
//   //   </Grid>
//   // </>)
//   // }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username: </label>
//         <input
//           type="text"
//           value={userName}
//           placeholder="enter a username"
//           onChange={({ target }) => setUserName(target.value)}
//         />
//         <div>
//           <label htmlFor="password">password: </label>
//           <input
//             type="password"
//             value={password}
//             placeholder="enter a password"
//             onChange={({ target }) => setPassword(target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <Grid container justifyContent="center" paddingTop="25px" gap="30px">
//       <Button variant="contained">
//         <Link className={classes.routerbutton} to="/">
//           Todo List
//         </Link>
//       </Button>
//       <Button variant="contained">
//         <Link className={classes.routerbutton} to="/todob">
//           TodoB
//         </Link>
//       </Button>
//       <Header />
//       <Main />
//     </Grid>
//     </>
//   );
// };
