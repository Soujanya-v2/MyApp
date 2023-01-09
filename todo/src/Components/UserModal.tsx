import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IUserProps, UserListProps } from "../Todo";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

function UserModal({
  keyValue,
  open,
  setOpen,
  updatedUser,
  addUser,
  updateUser,
}: IUserProps) {
  const classes = useStyles();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserListProps>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (keyValue === "Add") {
      setValue("first_name", "");
      setValue("email", "");
    } else {
      if (updatedUser) {
        setValue("first_name", updatedUser.first_name);
        setValue("email", updatedUser.email);
      }
    }
  }, []);

  const onSave = (user: UserListProps) => {
    if (addUser && keyValue === "Add") {
      addUser(user);
    } else if (updateUser && keyValue === "Edit") {
      updateUser(user);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSave)}>
        <DialogContent>
          <DialogContentText>
            <div>{keyValue}</div>
            Please enter email and firstName here.
          </DialogContentText>

          <TextField
            {...register("email", { required: true })}
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            fullWidth
            type="text"
            variant="standard"
            placeholder="Enter Task"
            error={!!errors["email"]}
            helperText={
              errors["email"]
                ? errors["email"].message
                : "This field is required"
            }
          />
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
  );
}

export default UserModal;
