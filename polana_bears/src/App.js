import './App.css';
import React from "react";

//views
import Information from "./views/Information";
import Roadmap from "./views/Roadmap";
import Story from "./views/Story";
import Team from "./views/Team";
import FAQ from "./views/FAQ";
import Rarity from "./views/Rarity";
import Examples from "./views/Examples";

//components
import MyNavbar from "./components/Navbars/MyNavbar";
import MyHeader from "./components/Headers/MyHeader";

import {
  Row,
} from "reactstrap";

function App() {
  return (
    <>
    <MyNavbar />
    <div className="wrapper">
      <MyHeader />
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
          <Rarity/>
        </Row>
        <noscript> You need to enable JavaScript to run this app. </noscript>
        <Row className="component-row">
          <Examples />
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
