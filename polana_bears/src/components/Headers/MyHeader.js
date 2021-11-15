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
import Clocks from '../Clock/Clocks';


// core components
function MyHeader() {

  var Snow = require('react-snow-effect');

  const cardStyling = {
    fontSizeHeader: {
      fontSize: "500%",
      marginTop: "80%"
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
      <Snow/>
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
      <Container style={cardStyling.container}>
        <div className="content-center brand">
          <h1 style={cardStyling.fontSizeHeader}>Polana Bears</h1>
          <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>In 1921, a group of hunters infiltrated PolanaLand and massacred several elderly Polana Bears. Ever since then, the Polana Bears were never seen again. </h5>
          <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>A brand new investigation was recently launched and UAV footage found that the Polana Bears have developed as a civilization and have biologically evolved to develop human-like features. </h5>
          <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>It is estimated that there resides 10,000 Polana Bears in PolanaLand.</h5>
          <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>On December 28th 2021, we will release highly classified information on each of these 10,000 creatures in an attempt to gain a deeper understanding of the Polana civilization.</h5>
          <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>Join our movement. </h5>
          <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>Join our search. Join the #PolanaSeekers.</h5>
          <Button style={cardStyling.mintButton}>Mint Now</Button>
          <br />
          <div style={cardStyling.mintWords}>
            <h6>Mint Countdown: </h6> &nbsp; &nbsp;
            <Countdown date={Date.now() + 3110400000} />
          </div>
          <Clocks style="display: inline-flex"/>
        </div>
      </Container>
    </div>
  );
}

export default MyHeader;