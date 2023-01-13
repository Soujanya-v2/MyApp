import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Header from "./Header";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import { useLocation } from "react-router-dom";
const useStyles = makeStyles({
  headerTextRight: {
    paddingTop: "20px",
    justifyItems: "right",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    backgroundColor: "grey",
    fontSize: "20px",
    display: "flex",
    flexDirection: "row",
    columnGap: "1300px",
  },
});

function Navbar() {
  const classes = useStyles();
  const location = useLocation();
  const currentTab = () => {
    let path = location.pathname;
    if (path === "/") return 0;
    else if (path === "/about") return 1;
    else if (path === "/login") return 2;
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
        <div className={classes.headerTextRight}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
               <Tab
                key={0}
                value={0}
                label="Home"
                to="/"
                component={Link}
              />
              <Tab
                key={1}
                value={1}
                label="About Us"
                to="/about"
                component={Link}
              />
              <Tab
                key={2}
                value={2}
                label="Login"
                to="/login"
                component={Link}
              />
            </Tabs>
          </Box>
        </div>
      </Grid>
      <Outlet />
    </>
  );
}

export default Navbar;
