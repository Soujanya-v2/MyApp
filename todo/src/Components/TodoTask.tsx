/* eslint-disable no-template-curly-in-string */
import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { UserListProps } from "../Todo";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Grid } from "@mui/material";
const useStyles = makeStyles({
  routerbutton: {
    color: "white",
    gap: "40px",
    textDecoration: "none",
  },
  topbar: {
    display: "flex",
    flexDirection: "row",
    columnGap: "20px",
    fontSize: "20px",
    justifyContent: "right",
    fontWeight: "bolder",
  },
  userName: {
    marginTop: "10px",
    color: "#07030c",
  },
  welcome: {
    marginTop: "10px",
    color: "#a74881",
  },
  form: {
    width: "400px",
    height: "300px",
    alignContent: "center",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    position: "relative",
    left: "700px",
    top: "300px",
    alignItems: "center",
    borderRadius: "30px",
  },
  input: {
    width: "350px",
    height: "40px",
    borderRadius: "30px",
    textAlign: "center",
    borderWidth: "1px",
    fontSize: "15px",
  },
  label: {
    fontWeight: "bolder",
    fontSize: "20px",
  },
  formback: {
    backgroundColor: "#bdbaba",
    height: "960px",
  },
  span: {
    color: "red",
    fontSize: "17px",
  },
  image: {
    borderRadius: "90px",
    width: "70px",
    alignContent: "center",
  },
  userList: {
    display: "flex",
    flexDirection: "column",
  },
});

function TodoTask() {
  const classes = useStyles();
  const [user, setUser] = useState<UserListProps[]>([]);
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [updatedUserId, setUpdateUserId] = useState<number>();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<UserListProps>();

  const client = axios.create({
    baseURL: "https://reqres.in/api/users",
  });
  useEffect(() => {
    const getUser = () => {
      client.get("").then((res) => {
        setUser(res.data.data);
      });
    };
    getUser();
  }, []);

  const updateUser = (id: number, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    client
      .put(`${updatedUserId}`, {
        first_name: getValues("editFirstName"),
        email: getValues("editEmail"),
      })
      .then((response) => {
        const userData = user.find((element) => element.id === updatedUserId);
        if (userData) {
          userData.first_name = response.data.first_name;
          userData.email = response.data.email;
        }
        handleUpdateClose();
      });
  };

  const addUser = (data: UserListProps) => {
    setLogin(true);

    client
      .post("", {
        data,
      })
      .then((response) => {
        const id = response.data.id;
        const apiRes = response.data.data;
        Object.defineProperty(apiRes, "id", {
          value: id,
        });

        setUser((user) => [apiRes, ...user]);
      });
  };
  const deleteUser = (id: number) => {
    client.delete(`${id}`);
    setUser(
      user.filter((user) => {
        return user.id !== id;
      })
    );
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleUpdateOpen = (user: UserListProps, id: number) => {
    setUpdateUserId(user.id);
    setValue("editFirstName", user.first_name);
    setValue("editEmail", user.email);
    setUpdateOpen(true);
  };
  const handleUpdateClose = () => {
    setUpdateOpen(false);
    handleClose();
  };

  return !login ? (
    <>
      <Grid item container justifyContent="center" alignItems="center">
        <Button variant="outlined" onClick={handleClickOpen}>
          {" "}
          Create{" "}
        </Button>
        {/* {open && <ApiForm />} */}
        <Dialog open={open} onClose={handleClose}>
          ADD
          <form className={classes.form} onSubmit={handleSubmit(addUser)}>
            <DialogContent>
              <DialogContentText>
                Please enter task and description to be edited here.
              </DialogContentText>

              <TextField
                {...register("email", { required: true })}
                autoFocus
                margin="dense"
                id="name"
                label="User Name"
                fullWidth
                type="text"
                variant="standard"
                placeholder="Enter Task"
                name="email"
              />
              {errors?.email && (
                <span className={classes.span}>This field is required</span>
              )}
              <TextField
                {...register("first_name", { required: true })}
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                fullWidth
                type="password"
                variant="standard"
                placeholder="Enter Password"
                name="first_name"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Grid>
    </>
  ) : (
    <>
      {user.map((key) => {
        return (
          <>
            <div>
              {key.email} {key.first_name}
              <Button onClick={() => deleteUser(key.id)}>delete</Button>
              <Button onClick={() => handleUpdateOpen(key, key.id)}>
                edit
              </Button>
              <Dialog open={updateOpen} onClose={handleUpdateClose}>
                Edit
                <form
                  className={classes.form}
                  onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                    updateUser(key.id, event)
                  }
                >
                  <DialogContent>
                    <DialogContentText>
                      Please enter task and description to be edited here.
                    </DialogContentText>

                    <TextField
                      {...register("editEmail", { required: true })}
                      autoFocus
                      margin="dense"
                      id="editEmail"
                      label="User Name"
                      fullWidth
                      type="text"
                      variant="standard"
                      placeholder="Enter Task"
                      name="editEmail"
                    />
                    {errors?.email && (
                      <span className={classes.span}>
                        This field is required
                      </span>
                    )}
                    <TextField
                      {...register("editFirstName", { required: true })}
                      autoFocus
                      margin="dense"
                      id="editFirstName"
                      label="Password"
                      fullWidth
                      type="password"
                      variant="standard"
                      placeholder="Enter Password"
                      name="editFirstName"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleUpdateClose}>Cancel</Button>
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>
          </>
        );
      })}
    </>
  );
}

export default TodoTask;
