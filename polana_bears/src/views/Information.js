import React, { useState, useEffect } from "react";
import Gif from "../assets/img/teaser.gif";

// reactstrap components

import {
  Container
} from 'reactstrap';

function Information() {
  const cardStylingForDesktop = {
    container: {
      height: "20vh",
      width: "20vw",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "10%",
      justifyContent: "center",

    },
    img: {
      display: "flex",
      width: "400px",
      height: "400px",
      alignContent: "center",
      margin: "10px 10px",
      flexWrap: "wrap"
    }
  }

  const cardStylingForMobile = {
    container: {
      height: "200px",
      width: "200px",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "10%",
      justifyContent: "center",
    },
    img: {
      display: "flex",
      width: "200px",
      height: "200px",
      alignContent: "center",
      margin: "10px 10px",
      flexWrap: "wrap"
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
      <Container style={cardStylingForMobile.container}>
        <img style={cardStylingForMobile.img} src={Gif} alt="teaser" />
      </Container>
    );
  }

  const displayDesktop = () => {
    return (
      <Container style={cardStylingForDesktop.container}>
        <img style={cardStylingForDesktop.img} src={Gif} alt="teaser" />
      </Container>
    );
  }

  return (
    <div>
      {mobileView ? displayMobile() : displayDesktop()}
    </div>
  );
}

export default Information;