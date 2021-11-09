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
import { 
  NavItem
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDiscord,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

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
  // const [navbarColor] = React.useState("navbar-transparent");

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <CssBaseline />
          <Toolbar className="navbar">
            <Typography variant="h4" className={classes.logo}>
              (here put logo can already)
            </Typography>
              <div className={classes.navlinks}>
              <NavItem className={classes.link}>
                  <a
                    className="discord social" 
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    id="twitter-tooltip">
                    <FontAwesomeIcon icon={faDiscord} size="2x"/>
                  </a>
                </NavItem>
                <NavItem className={classes.link}>
                  <a
                    className="instagram social" 
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    id="twitter-tooltip">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                  </a>
                </NavItem>
                <NavItem className={classes.link}>
                  <a
                    className="twitter social" 
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    id="twitter-tooltip">
                    <FontAwesomeIcon icon={faTwitter} size="2x"/>
                  </a>
                </NavItem>
              </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
export default MyNavbar;
