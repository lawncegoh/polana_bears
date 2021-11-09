import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import useScrollTrigger from "@mui/material/useScrollTrigger";

import { Link, Router } from "react-router-dom";
import { NavItem } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <CssBaseline />
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              Navbar
            </Typography>
              <div className={classes.navlinks}>
                <NavItem className="nav-item">
                  Discord
                </NavItem>
                <NavItem className="nav-item">
                  Instagram
                </NavItem>
                <NavItem className="nav-item">
                  Twitter
                </NavItem>
              </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
export default Navbar;
