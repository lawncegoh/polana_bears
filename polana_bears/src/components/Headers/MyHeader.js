/*eslint-disable*/
import React, { useState, useEffect } from "react";

// reactstrap components
import { Container } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { slide as Menu } from 'react-burger-menu';

import {
  faDiscord,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Countdown from 'react-countdown';
import Clocks from '../Clock/Clocks';


// core components
function MyHeader() {

  var Snow = require('react-snow-effect');

  const cardStyling = {
    fontSizeHeader: {
      fontSize: "500%",
      marginTop: "5%",
      "@media (max-width: 1199px)": {
        marginTop: "5px",
       }
    }, fontSizeBody: {
      fontSize: "110%",
    }, discord: {
      color: "#7289da",
      paddingright: "72px !important",
    }, twitter: {
      color: "#49a1eb",
    }, instagram: {
      color: "black",
    }, appBar: {
      background: "transparent",
      boxShadow: "none",
      "@media (max-width: 1199px)": {
        paddingLeft: 0,
      },
    }, row: {
      marginTop: "20px",
    }, mintButton: {
      background: "#647C90",
      marginTop: "20px",
    }, mintWords: {
      display: "inline-flex",
      marginTop: "10px",
    }, container: {
      textAlignVertical: "center",
    }
  }

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1199
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const displayMobile = () => {
    return (
      <div style={cardStyling.container}>
        <Toolbar style={cardStyling.appBar}>
          <Menu></Menu>
        </Toolbar>
      </div>
    );
  };

  const displayDesktop = () => {
    return (
      <div style={cardStyling.container}>
        <Toolbar style={cardStyling.appBar}>
          <Box sx={{ flexGrow: 1 }} />
          <div class="row" style={cardStyling.row}>
            <div class="col-xl">
              <a
                style={cardStyling.discord}
                href="https://discord.gg/tZbXWZFG">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
            </div>
            <div class="col-xl">
              <a
                style={cardStyling.instagram}
                href="https://www.instagram.com/polanabears/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div class="col-xl">
              <a
                style={cardStyling.twitter}
                href="https://twitter.com/PolanaBears">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </Toolbar>
      </div>
    );
  };

  const headerStyling = {
    header: {
      backgroundImage:
        "url(" + require("../../assets/img/northernlights.jpeg").default + ")"
    }
  }

  return (
    <div className="page-header clear-filter" filter-color="blue">
      <div className="page-header-image"
      // style={headerStyling.header}
      ></div>
      <Snow />
      <AppBar position="static" style={cardStyling.appBar}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      <Container style={cardStyling.container}>
        <div className="content-center brand">
          <h1 style={cardStyling.fontSizeHeader}>Polana Bears</h1>
          <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>4,888 exclusively created Polana Bears</h5>
          <br />
          <button type="button" class="custom-btn btn-5" disabled='disabled'>Mint Now</button>
          <br />
          <div style={cardStyling.mintWords}>
            <h6>Mint Countdown: TBC</h6>
            {/* <Countdown date={Date.now() + 3110400000} /> */}
          </div>
          <br/>
          {/* <Clocks style="display: inline-flex" /> */}
        </div>
      </Container>
    </div>
  );
}

export default MyHeader;