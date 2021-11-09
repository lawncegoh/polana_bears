import React from "react";
// import '@fontsource/staatliches.css';

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import useScrollTrigger from "@mui/material/useScrollTrigger";

// import { Link, Router } from "react-router-dom";
import { NavItem,
         NavLink,
         UncontrolledTooltip
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    fontSize:"20px",
    flexGrow: "2",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "10px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "green",
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

function MyNavbar() {
  const classes = useStyles();
  const [navbarColor] = React.useState("navbar-transparent");

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={navbarColor}>
          <CssBaseline />
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              (here put logo can already)
            </Typography>
              <div className={classes.navlinks}>
              <NavItem className={classes.link}>
                  <NavLink 
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="twitter-tooltip">
                    <i className="fab fa-twitter"></i>
                    <p className="d-lg-none d-xl-none">Discord</p>
                  </NavLink>
                  <UncontrolledTooltip target="#twitter-tooltip">
                    Follow us on Discord
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className={classes.link}>
                  <NavLink 
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="twitter-tooltip">
                    <i className="fab fa-twitter"></i>
                    <p className="d-lg-none d-xl-none">Instagram</p>
                  </NavLink>
                  <UncontrolledTooltip target="#twitter-tooltip">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className={classes.link}>
                  <NavLink 
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="twitter-tooltip">
                    <i className="fab fa-twitter"></i>
                    <p className="d-lg-none d-xl-none">Twitter</p>
                  </NavLink>
                  <UncontrolledTooltip target="#twitter-tooltip">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem>
              </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
export default MyNavbar;
