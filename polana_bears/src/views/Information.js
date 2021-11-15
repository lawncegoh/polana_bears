import React from "react";

// reactstrap components

import {
    Container
} from 'reactstrap';

function Information() {
  const cardStyling = {
      container: {
          height:"100vh",
          backgroundColor:"#222",
          width:"80vw",
          display:"flex",
          alignItems:"center",
          flexWrap:"wrap",
          justifyContent:"center",
          
    },
    div: {
        width:"100%",
        height:"100%",
        backgroundColor:"#061133",
        boxSizing:"bordex-box",
        border:"solid",
        borderColor:"#05080f",
        borderRadius:"2px",
        margin:"15px 15px",
        color:"#fff",
        padding:"40px",
        justifyContent:"center"
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
    }
  }
  return (
    <>
      <Container>
          <div style={cardStyling.div}>
          <div style={cardStyling.line}></div>
              <p>
                  <h3>10,000 deflationary Polana Bears breaking dawn on the 28th of December 2021</h3>
              </p>
          </div>
      </Container>
    </>
  );
}

export default Information;