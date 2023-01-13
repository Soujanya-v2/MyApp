import React from "react";
import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Home from "./Home";
import Header from "./Header";
import { Grid } from "@mui/material";
import SignOutModal from "./SignOutModal";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const useStyles = makeStyles({
  navName: {
    display: "flex",
    flexDirection: "row",
    columnGap: "30px",
    marginTop: "25px",
  },
  headerText: {
    color: "black",
    width: "50vh",
    backgroundColor: "grey",
    fontSize: "20px",
    display: "flex",
    flexDirection: "row",
    columnGap: "700px",
  },
  signoutText: {
    color: "#551A8B",
    marginTop: "6px",
  },
});

function LoginLayout() {
  const classes = useStyles();
  const location = useLocation();

  const currentTab = () => {
    let path = location.pathname;
    if (path === "/") return 0;
    else if (path === "/users") return 1;
    else if (path === "/addUser") return 2;
    else if (path === "/addTask") return 3;
  };
  const [value, setValue] = React.useState(currentTab);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container className={classes.headerText}>
        <div>
          <Header />
        </div>
        <div className={classes.navName}>
          <div>
            <Home />
          </div>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
               <Tab value={0} label="DashBoard" to="/" component={Link} />
              <Tab value={1} label="View Users" to="/users" component={Link} />
              <Tab value={2} label="Add Users" to="/addUser" component={Link} />
              <Tab value={3} label="Add Task" to="/addTask" component={Link} />
            </Tabs>
          </Box>
          <div className={classes.signoutText}>
            <SignOutModal />
          </div>
        </div>
      </Grid>

      <Outlet />
    </>
  );
}

export default LoginLayout;
