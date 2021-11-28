import React, { useState, useEffect } from "react";

// core components

function MyFooter() {

  const cardStyling = {
    footerDesktop: {
      backgroundColor: "#647C90",
      borderradius: "0 !important",
      height: "20px",
    },
    footerMobile: {
      backgroundColor: "#647C90",
      borderradius: "0 !important",
      height: "15px",
    },
    copyrightDesktop: {
      fontSize: "15px",
      color: "#FFFFFF",
      padding: "0px 15px ",
      textAlign: "right",
      verticalAlign: "center",
    },
    copyrightMobile: {
      fontSize: "10px",
      color: "#FFFFFF",
      padding: "0px 15px ",
      textAlign: "right",
      verticalAlign: "center",
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
      <footer className="footer" style={cardStyling.footerMobile}>
        <div style={cardStyling.copyrightMobile}>
          © {new Date().getFullYear()}, Designed by Polana Bears Dev Team. All Rights Reserved.
        </div>
      </footer>
    );
  }

  const displayDesktop = () => {
    return (
      <footer className="footer" style={cardStyling.footerDesktop}>
        <div style={cardStyling.copyrightDesktop}>
          © {new Date().getFullYear()}, Designed by Polana Bears Dev Team. All Rights Reserved.
        </div>
      </footer>
    );
  }

  return (
    <div>
      {mobileView ? displayMobile() : displayDesktop()}
    </div>
  );
}

export default MyFooter;