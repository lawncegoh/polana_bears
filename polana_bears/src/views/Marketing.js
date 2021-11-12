import React from "react";

// reactstrap components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

function Marketing() {
  return (
    <>
        <Container fluid>
        <h1>Growth Plan for our Bears</h1>
        <h3>Our goal is to ensure that your investment in our Polana Bears reap high returns</h3>
        <h5>Our marketing team has invested over <b>$xxxx</b> in marketing campaigns that spread across these areas:</h5>
            <Container fluid className="component-row">
                <Row>
                    <Col xs={3}>Giveaways</Col>
                    <Col xs={9}>
                        <ul>
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </Col>  
                </Row>
            </Container>
            <Container fluid className="component-row">
                <Row>
                    <Col xs={3}>Influencers' onboarding</Col>
                    <Col xs={9}>
                    <ul>
                        <li>Lin Jun Jie</li>
                        <li>MrBeast</li>
                    </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="component-row">
                <Row>
                    <Col xs={3}>Adding drop to NFT calendar</Col>
                    <Col xs={9}>
                    <ul>
                        <li>NFTCalendar.io</li>
                    </ul> 
                    </Col>
                </Row>
            </Container>
            <Container fluid className="component-row">
                <Row>
                    <Col xs={3}>Joining popular newsletters</Col>
                    <Col xs={9}>
                    <ul>
                        <li>NFT Lately</li>
                        <li>NonFungible.com</li>
                        <li>Forefront Newsletter</li>
                    </ul> 
                    </Col>
                </Row>
            </Container>
      </Container>
    </>
  );
}

export default Marketing;