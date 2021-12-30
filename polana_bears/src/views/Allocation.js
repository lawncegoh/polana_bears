import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Container
} from "reactstrap";

function Allocation() {
  const containerStyleGeneral = {
    container: {
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }
  }

  const containerStyleMobile = {
    container: {
      padding: "3rem",
    }
  }

  const tableStyle = {
    table: {
      boxShadow: "rgba(255,255,255, 0.4) 5px 5px, rgba(255,255,255, 0.3) 10px 10px, rgba(255,255,255, 0.2) 15px 15px, rgba(255,255,255, 0.1) 20px 20px, rgba(255,255,255, 0.05) 25px 25px",
      width: "100%",
      border: "solid",
      borderCollapse: "collapse",
      padding: "40px"
    },
    th: {
      border: "1px solid grey",
      textAlign: "center",
      padding: "4px",
      fontSize: "22px",
      color: "white",
      backgroundColor: "#061133",
      width: "50%",
    },
    td: {
      border: "1px solid grey",
      textAlign: "center",
      padding: "4px",
      fontSize: "20px",
      backgroundColor: "white",
    }
  }
  const titleStyling = {
    title: {
      color: "white",
      alignContent: "center",
      justifyContent: "center",
      display: "flex"
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
      <div>
        <Container style={containerStyleMobile.container}>
          <div style={titleStyling.title}>
            <h1>Allocation Pool</h1>
          </div>
          <table style={tableStyle.table}>
            <thead>
              <tr>
                <th style={tableStyle.th}>Stakeholder</th>
                <th style={tableStyle.th}>Units</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableStyle.td}>Giveaway</td>
                <td style={tableStyle.td}>30</td>

              </tr>
              <tr>
                <td style={tableStyle.td}>Whitelist</td>
                <td style={tableStyle.td}>300</td>
              </tr>
              <tr>
                <td style={tableStyle.td}>Public Sale</td>
                <td style={tableStyle.td}>1158</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    );
  };

  const displayDesktop = () => {
    return (
      <div>
        <Container style={containerStyleGeneral.container}>
          <div style={titleStyling.title}>
            <h1>Allocation Pool</h1>
          </div>
          <table style={tableStyle.table}>
            <thead>
              <tr>
                <th style={tableStyle.th}>Stakeholder</th>
                <th style={tableStyle.th}>Units</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableStyle.td}>Giveaway</td>
                <td style={tableStyle.td}>30</td>

              </tr>
              <tr>
                <td style={tableStyle.td}>Whitelist</td>
                <td style={tableStyle.td}>300</td>
              </tr>
              <tr>
                <td style={tableStyle.td}>Public Sale</td>
                <td style={tableStyle.td}>4558</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    );
  };

  return (
    <div>
      {mobileView ? displayMobile() : displayDesktop()}
    </div>
  );
}

export default Allocation;