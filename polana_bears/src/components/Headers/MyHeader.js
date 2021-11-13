/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDiscord,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Countdown from 'react-countdown';

// core components
function MyHeader() {
  var Snow = require('react-snow-effect');

  const cardStyling = {
    fontSizeHeader: {
      fontSize: "100px",
      marginTop: "100px"
    }, fontSizeBody: {
      fontSize: "20px",
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
    }, row: {
      marginTop: "20px",
    }, mintButton: {
      background: "#647C90",
    }, mintWords: {
      display: "inline-flex",
    }
  }

  return (
    <div className="page-header clear-filter" filter-color="blue">
      <div
        className="page-header-image"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/header.jpg").default + ")",
        }}
      ></div>
      <Snow />
      <AppBar position="static" style={cardStyling.appBar}>
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
      </AppBar>
      <Container>
        <div className="content-center brand">
          <h1 style={cardStyling.fontSizeHeader}>Polana Bears</h1>
          <h3>#insert something here</h3>
          <h6 className="category category-absolute" style={cardStyling.fontSizeBody}>
            Designed and coded by the Polana Bears Dev Team
          </h6>
          <Button style={cardStyling.mintButton}>Mint Now</Button>
          <br/>
          <div style={cardStyling.mintWords}>
          <h6>Mint Countdown: </h6> &nbsp; &nbsp;
          <Countdown date={Date.now() + 3110400000} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MyHeader;
