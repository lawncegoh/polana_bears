/*eslint-disable*/
import React, { useState, useEffect } from "react";

import {
  Link
} from "react-router-dom"

import styled, { css } from 'styled-components'

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { CgMenuRound } from "react-icons/cg"
import { RiCloseCircleFill } from "react-icons/ri"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import { ClassNames } from "@emotion/react";

// core components
function RarityHeader() {

  var Snow = require('react-snow-effect');

  const cardStyling = {
    fontSizeHeader: {
      fontSize: "500%",
      marginTop: "10%",
      "@media (max-width: 768px)": {
        marginTop: "5px",
      }
    }, fontSizeBody: {
      fontSize: "110%",
    }, discord: {
      color: "#7289da",
    }, twitter: {
      color: "#49a1eb",
    }, instagram: {
      color: "white",
      opacity: '70%'
    }, appBar: {
      background: "transparent",
      boxShadow: "none",
      "@media (max-width: 768px)": {
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

  const headerStyling = {
    div: {
      display: "flex",
      backgroundColor: "black",
      alignItems: "center"
    },
    hamburger: {
      display: "flex",
      right: "0",
      position: "absolute",
      cursor: "pointer",
    },
    row: {
      display: "flex",
    },
    col: {
      display: "flex",
      paddingTop: "2%",
      paddingLeft: "3%",
      opacity: "1",
    },
    imgDesktop: {
      width: "20%",
      height: "auto",
      opacity: "0.5",
    },
    imgMobile: {
      width: "50%",
      height: "auto",
      opacity: "0.5",
    },
  }

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const displayMobileAppBar = (open) => {
    const hamIcon = <CgMenuRound className={headerStyling.hamburger} size="40px"
      onClick={() => setOpen(!open)}
    />

    const closeIcon = <RiCloseCircleFill className={headerStyling.hamburger} size="40px"
      onClick={() => setOpen(!open)}
    />

    return (
      <nav>
        {open ? closeIcon : hamIcon}
        {open &&
          <div>
            <Row style={headerStyling.row}>
              <Col style={headerStyling.col}>
                <a
                  style={cardStyling.discord}
                  href="https://discord.gg/gFAbQrSYM5">
                  <FontAwesomeIcon icon={faDiscord} size="2x" />
                </a>
              </Col>
              <Col style={headerStyling.col}>
                <a
                  style={cardStyling.instagram}
                  href="https://www.instagram.com/polanabearsnft/">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </Col>
              <Col style={headerStyling.col}>
                <a
                  style={cardStyling.twitter}
                  href="https://twitter.com/PolanaBearsnft">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </Col>
              {/* <Col style={headerStyling.col}>
                <NavLink to="/puzzles">Puzzle</NavLink>
              </Col> */}
              <Col style={headerStyling.col}>
                  <NavLink to="/" style={{color: 'white'}}>Home</NavLink>
              </Col>
            </Row>
          </div>
        }
      </nav>
    );
  }

  const NavLink = styled(Link)`
  padding: 5px;
  color: black;
  text-decoration: none;
  &:hover {
    color: grey;
    background: navy;
  }
`;

  const displayDesktopAppBar = () => {
    return (
      <div style={cardStyling.container}>
        <Toolbar style={cardStyling.appBar}>
          <Box sx={{ flexGrow: 1 }} />
          <div class="row" style={cardStyling.row}>
            <div class="col-xl">
              <a
                style={cardStyling.discord}
                href="https://discord.gg/gFAbQrSYM5">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
            </div>
            <div class="col-xl">
              <a
                style={cardStyling.instagram}
                href="https://www.instagram.com/polanabearsnft/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div class="col-xl">
              <a
                style={cardStyling.twitter}
                href="https://twitter.com/PolanaBearsnft">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
            {/* <div class="col-xl">
              <NavLink to="/puzzles">Puzzle</NavLink>
            </div> */}
            <div class="col-xl">
              <NavLink to="/" style={{color: 'white'}}>Home</NavLink>
            </div>
          </div>
        </Toolbar>
      </div>
    );
  }
  const [open, setOpen] = useState(false);

  return (
    <div filter-color="blue">
      <div className="page-header-image"
      // style={headerStyling.header}
      ></div>
      <Snow />
      <AppBar position="static" style={cardStyling.appBar}>
        {mobileView ? displayMobileAppBar(open) : displayDesktopAppBar()}
      </AppBar>
    </div>
  );
}

export default RarityHeader;