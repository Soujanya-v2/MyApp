import Api from "../Api";
import axios from "axios";
import { LoggedInType } from "../data/types/loggedInUser";
import {
  currentUserSelector,
  setLoading,
  setLoggedIn,
} from "../store/currentUser/currentUserSlice";
import {  useSelector } from "react-redux";

const getLoggedIn =
  (): any =>
  async (
    dispatch: (arg0: {
      payload: boolean | LoggedInType;
      type: "currentUser/setLoading" | "currentUser/setLoggedIn";
    }) => void
  ) => {
    dispatch(setLoading(true));
    try {
      const { loggedIn } = useSelector(currentUserSelector);
      const response = await axios.post("https://reqres.in/api/login");
      localStorage.setItem("user", JSON.stringify(response.data.token));
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("password", response.data.password);
      dispatch(setLoading(false));
      dispatch(setLoggedIn(response.data));
    } catch (error) {
      dispatch(setLoading(false));
    }
  };

export default getLoggedIn;
