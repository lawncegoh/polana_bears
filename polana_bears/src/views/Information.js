import React from "react";
import Gif from "../assets/img/teaser.gif";

// reactstrap components

import {
    Container
} from 'reactstrap';

function Information() {
  const cardStyling = {
      container: {
          height:"20vh",
          width:"20vw",
          display:"flex",
          alignItems:"center",
          flexWrap:"wrap",
          marginBottom:"10%",
          justifyContent:"center",
          
    },
    div: {
        width:"100%",
        height:"100%",
        backgroundColor:"#061133",
        boxSizing:"bordex-box",
        border:"solid",
        borderColor:"#05080f",
        boxShadow: "rgba(255,255,255, 0.4) 5px 5px, rgba(255,255,255, 0.3) 10px 10px, rgba(255,255,255, 0.2) 15px 15px, rgba(255,255,255, 0.1) 20px 20px, rgba(255,255,255, 0.05) 25px 25px",
        borderRadius:"2px",
        margin:"15px 15px",
        color:"#fff",
        padding:"40px",
        justifyContent:"center",
    }, line: {
        width:"100%",
        height:"5px",
        marginTop:"10px",
        backgroundColor:"#b5cae1",
        alignContent:"center",
        flexWrap:"wrap"
    }, p: {
        color:"white",
        fontSize:"130%",
        marginTop:"15px",
    }, img: {
        display:"flex",
        width:"400px",
        height:"400px",
        alignContent:"center",
        margin:"10px 10px",
        flexWrap:"wrap"
    }
  }
  return (
    <>
      <Container style={cardStyling.container}>
        <img style={cardStyling.img} src={Gif} alt="teaser"/>
      </Container>
    </>
  );
}

export default Information;