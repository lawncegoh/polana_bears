import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

//views
import Information from "./views/Information";
import Roadmap from "./views/Roadmap";
import Story from "./views/Story";
import Team from "./views/Team";
import FAQ from "./views/FAQ";
import Allocation from "./views/Allocation";

//components
import MyHeader from "./components/Headers/MyHeader";
import MyFooter from './components/Footers/MyFooter';

import {
  Row,
} from "reactstrap";

function App() {
  return (
    <>
      <meta property="og:title" content="Polana Bears"/>
      <MyHeader />
      <div className="wrapper">
        <div className="main">
          {/* <Row className="component-row">
            <Information />
          </Row> */}
          <Row className="component-row">
            <Story />
          </Row>
          <Row>
            <Allocation />
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
