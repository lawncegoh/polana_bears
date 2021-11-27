/*eslint-disable*/
import React, { useState, useEffect } from "react";
import BearLogo from "../../assets/img/bear_logo.jpeg";

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
// import Countdown from 'react-countdown';
// import Clocks from '../Clock/Clocks';


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

  const headerStyling = {
    header: {
      backgroundImage:
        "url(" + require("../../assets/img/northernlights.jpeg").default + ")"
    }, 
    div: {
      display:"flex",
      backgroundColor:"black",
      alignItems:"center"
    },
    hamburger: {
      display: "flex",
      right:"0",
      position:"absolute",
      cursor:"pointer",
    },
    row: {
      display:"flex",
    },
    col: {
      display:"flex",
      paddingLeft:"15%",
      opacity:"1"
    },
    img: {
      display:"flex",
      maxWidth:"30%",
      maxHeight:"30%",
      position:"absolute",
      opacity:"0.5",
      top:"0%",
      left:"40%",
      objectFit:"cover"
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

  const displayMobile = (open) => {
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
                href="https://discord.gg/Dczmgq5P">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
              </Col>
              <Col style={headerStyling.col}>
              <a
                style={cardStyling.instagram}
                href="https://www.instagram.com/polanabears/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              </Col>
              <Col style={headerStyling.col}>
              <a
                style={cardStyling.twitter}
                href="https://twitter.com/PolanaBears">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              </Col>
              </Row>
          </div>
        } 
      </nav>
    );
  }

  const displayDesktop = () => {
    return (
      <div style={cardStyling.container}>
        <Toolbar style={cardStyling.appBar}>
          <Box sx={{ flexGrow: 1 }} />
          <div class="row" style={cardStyling.row}>
            <div class="col-xl">
              <a
                style={cardStyling.discord}
                href="https://discord.gg/Dczmgq5P">
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
  }

  const [open, setOpen] = useState(false);
  const displayAlert = () => {
    return (
      alert("Minting is not available yet!")
    );
  }
  return (
    <div className="page-header clear-filter" filter-color="blue">
      <div className="page-header-image"
      // style={headerStyling.header}
      ></div>
      <Snow />
      <AppBar position="static" style={cardStyling.appBar}>
        {mobileView ? displayMobile(open) : displayDesktop()}
      </AppBar>
      <Container style={cardStyling.container}>
        <Container sx={{ flexGrow: 1 }}>
          <img src={BearLogo} style={headerStyling.img} alt="logo"/>
        </Container>
        <div className="content-center brand">
          <h1 style={cardStyling.fontSizeHeader}>Polana Bears</h1>
          <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>4,888 Hand-Drawn and Unique Polana Bears</h5>
          <br />
          <button type="button" class="custom-btn btn-5"
          onClick={() => displayAlert()}>Mint Now</button>
          <br />
          <div style={cardStyling.mintWords}>
            <h6>Launching in January 2022. Follow us on our marketing channels for updates</h6>
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