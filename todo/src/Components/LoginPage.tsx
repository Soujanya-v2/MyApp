import React from "react";
import { UserProps } from "../Todo";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../store/currentUser/userSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import IconButton from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
// import TextField from '@mui/material/TextField';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
  formback: {
    backgroundColor: "#bdbaba",
    height: "960px",
  },
  span: {
    color: "red",
    fontSize: "17px",
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserProps>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onsubmit = (data: UserProps) => {
    if (data.email === "" || data.password === "") {
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
          reset();
        });
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <div className={classes.formback}>
        <form className={classes.form} onSubmit={handleSubmit(onsubmit)}>
          <FormControl>
            <TextField
              {...register("email", { required: true })}
              autoFocus
              margin="dense"
              id="name"
              label="User Name"
              type="text"
              placeholder="Enter Task"
              error={!!errors["email"]}
              helperText={errors["email"] ? errors["email"].message : ""}
            />

            <TextField
              {...register("password", { required: true })}
              autoFocus
              margin="dense"
              variant="outlined"
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {!!errors["password"] && (
              <FormHelperText error>
                {errors["password"].message}
              </FormHelperText>
            )}
          </FormControl>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
