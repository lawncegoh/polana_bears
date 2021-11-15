import React from "react";

// core components

function MyFooter() {

  const cardStyling = {
    container: {
      backgroundColor: "#647C90",
      borderradius: "0 !important",
      marginbottom: "0px",
      height: "30px",
    }, copyright: {
      float: "right",
      marginRight: "20px",
      fontSize: "15px",
      // textAlignVertical: "center",
      color: "#FFFFFF",
      verticalAlign: "middle",
    }
  }

  return (
      <footer className="footer" style={cardStyling.container}>
          <div className="copyright" id="copyright" style={cardStyling.copyright}>
            © {new Date().getFullYear()}, Designed by Polana Bears Dev Team. All Rights Reserved.
          </div>
      </footer>
  );
}

export default MyFooter;