import React from "react";

// core components

function MyFooter() {

  const cardStyling = {
    footer: {
      backgroundColor: "#647C90",
      borderradius: "0 !important",
      height: "20px",
    }, copyright: {
      fontSize: "15px",
      color: "#FFFFFF",
      padding: "0px 15px ",
      textAlign: "right",
      verticalAlign: "center",
    }
  }

  return (
    <footer className="footer" style={cardStyling.footer}>
      <div style={cardStyling.copyright}>
        © {new Date().getFullYear()}, Designed by Polana Bears Dev Team. All Rights Reserved.
      </div>
    </footer>
  );
}

export default MyFooter;