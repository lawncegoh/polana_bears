// import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React/*, { useState, useEffect }*/ from 'react';

//views
// import Information from "./views/Information";
import Roadmap from "../views/Roadmap";
import Story from "../views/Story";
import Team from "../views/Team";
import FAQ from "../views/FAQ";
import Allocation from "../views/Allocation";
// import RoyalPolanas from "./views/RoyalPolanas";
import Information from "../views/Information";

//components
import MyHeader from "../components/Headers/MyHeader";
import MyFooter from '../components/Footers/MyFooter';
// import SplashScreen from './components/SplashScreen';

import {
    Row,
} from "reactstrap";
// import SplashScreen from './components/SplashScreen';

function LandingPage() {
    // Loading state 
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {

    //   // Wait for 3 seconds
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 1000);
    // }, []);

    return (/*isLoading*/
        // ? <div className="wrapper">
        //     <SplashScreen />
        //   </div>
        // : (
        <>
            <MyHeader />
            <div className="wrapper">
                <div className="main">
                    <Row className="component-row">
                        <Information />
                    </Row>
                    <Row className="component-row">
                        <Story />
                    </Row>
                    {/* <Row className="component-row">
              <RoyalPolanas />
            </Row> */}
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

export default LandingPage;