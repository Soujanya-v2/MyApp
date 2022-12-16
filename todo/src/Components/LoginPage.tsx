import React from "react";
import { UserProps } from "../Todo";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login ,signOut } from "../store/currentUser/userSlice";
import { useState } from "react";
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
  span:{
    color:"red",
    fontSize:"17px"

  }
});

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>();

  const onsubmit = (data: UserProps) => {
    if (data.email === "" || data.password === ""){
      alert("Invalid Email or Password");
    } else {
      axios
        .post("https://reqres.in/api/login", {
          email: data.email,
          password: data.password,
          loggedIn: true,
        })
        .then((result) => {
          localStorage.setItem("token", result.data.token);

          dispatch(
            login({
              email: data.email,
              password: data.password,
              loggedIn: true,
            })
          );
        })
        .catch((error) => {
          alert("Invalid Email or Password");
          dispatch(signOut({ loggedIn: false }));
          
        });
    }
  };
  return (
    <>
      <div className={classes.formback}>
        <form className={classes.form} onSubmit={handleSubmit(onsubmit)}>
          <TextField
            {...register("email", { required: true })}
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            placeholder="Enter Task"
            name="email"
          />
          {errors?.email && <span className={classes.span}>This field is required</span>}
          <TextField
            {...register("password", { required: true })}
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            placeholder="Enter Password"
            name="password"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
