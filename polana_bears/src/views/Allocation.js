import React from "react";

// reactstrap components
import {
    Container
} from "reactstrap";

function Allocation() {
  const containerStyle = {
    container: {
      display:"flex",
      flexDirection:"column",
      gap:"10px",
      padding:"15rem"
    }
  }
  const tableStyle = {
    table: {
      boxShadow: "rgba(255,255,255, 0.4) 5px 5px, rgba(255,255,255, 0.3) 10px 10px, rgba(255,255,255, 0.2) 15px 15px, rgba(255,255,255, 0.1) 20px 20px, rgba(255,255,255, 0.05) 25px 25px",
      width:"100%",
      border:"solid",
      borderCollapse:"collapse"
    }, 
    th: {
      border:"1px solid grey",
      textAlign:"center",
      padding:"4px",
      fontSize:"22px",
      color:"white",
      backgroundColor:"#061133"
    },
    td: {
      border:"1px solid grey",
      textAlign:"center",
      padding:"4px",
      fontSize:"20px",
      backgroundColor:"white",
    }
  }
  const titleStyling = {
    title:{
        color:"white",
        alignContent:"center",
        justifyContent:"center",
        display:"flex"
    }
  }
  return (
    <>
      <Container style={containerStyle.container}>
        <div style={titleStyling.title}>
          <h1>Allocation Pool</h1>
        </div>
        <table style={tableStyle.table}>
          <thead>
            <tr>
              <th style={tableStyle.th}>Stakeholder</th>
              <th style={tableStyle.th}>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableStyle.td}>Influencers</td>
              <td style={tableStyle.td}>100</td>
            </tr>
            <tr>
              <td style={tableStyle.td}>Giveaway</td>
              <td style={tableStyle.td}>20</td>
            </tr>
            <tr>
              <td style={tableStyle.td}>Whitelist</td>
              <td style={tableStyle.td}>100</td>
            </tr>
            <tr>
              <td style={tableStyle.td}>Public Sale</td>
              <td style={tableStyle.td}>4668</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default Allocation;