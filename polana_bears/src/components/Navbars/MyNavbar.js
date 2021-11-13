import React from "react";

import {
  Container
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDiscord,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

function MyNavbar() {

  const cardStyling = {
    container: {
      backgroundColor: "#647C90",
      borderradius: "0 !important",
      marginbottom: "0px",
      zindex: "2",
    }, discord: {
      color: "#7289da",
      paddingright: "72px !important",
    }, twitter: {
      color: "#49a1eb",
    }, instagram: {
      color: "black",
    },
  }

  return (
    <Container>
      <AppBar>
        <div style={cardStyling.container}>
          <Toolbar style={cardStyling.appBar}>
            <img src="../../assets/img/polar_bear.jpeg" alt=""></img>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <div class="row">
                <div class="col-lg">
                  <a
                    style={cardStyling.discord}
                    href="https://twitter.com/CreativeTim?ref=creativetim">
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                  </a>
                </div>
                <div class="col-lg">
                  <a
                    style={cardStyling.instagram}
                    href="https://www.instagram.com/polanabears/">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </div>
                <div class="col-lg">
                  <a
                    style={cardStyling.twitter}
                    href="https://twitter.com/PolanaBears">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                </div>
              </div>
            </Box>
          </Toolbar>
        </div>
      </AppBar>
    </Container>
  );
}
export default MyNavbar;
