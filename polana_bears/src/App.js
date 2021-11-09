import './App.css';
import React from "react";

//views
import Information from "./views/Information";
import Roadmap from "./views/Roadmap";
import Story from "./views/Story";
import Team from "./views/Team";
import FAQ from "./views/FAQ";

//components
import MyNavbar from "./components/Navbars/MyNavbar";

import {
  Row,
} from "reactstrap";

function App() {
  return (
    <>
    <MyNavbar/>
    <div className="wrapper">
      <div className="main">
        <Row className="component-row">
          <Information/>
        </Row>
        <Row className="component-row">
          <Roadmap/>
        </Row>
        <Row className="component-row">
          <Story/>
        </Row>
        <Row className="component-row">
          <FAQ/>
        </Row>
        <Row className="component-row">
          <Team/>
        </Row>
      </div>
    </div>
  </>
  );
}

export default App;
