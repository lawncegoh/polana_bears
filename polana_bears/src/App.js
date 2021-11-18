import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

//views
import Information from "./views/Information";
import Roadmap from "./views/Roadmap";
import Story from "./views/Story";
import Team from "./views/Team";
import FAQ from "./views/FAQ";
import Examples from "./views/Examples";

//components
// import MyNavbar from "./components/Navbars/MyNavbar";
import MyHeader from "./components/Headers/MyHeader";
import MyFooter from './components/Footers/MyFooter';

import {
  Row,
} from "reactstrap";

import "react-rain-animation/lib/style.css";

function App() {
  return (
    <>
      {/* <MyNavbar /> */}
      <MyHeader />
      <div className="wrapper">
        <div className="main">
          <Row className="component-row">
            <Information />
          </Row>
          <Row className="component-row">
            <Story />
          </Row>
          <Row>
            <Examples />
          </Row>
          <Row className="component-row">
            <Roadmap />
          </Row>
          <Row className="component-row">
            <FAQ />
          </Row>
          <Row className="component-row">
            <Team />
          </Row>
        </div>
      </div>
      <MyFooter />
    </>
  );
}

export default App;
