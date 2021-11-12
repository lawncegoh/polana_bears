import React from "react";

import {
    Container,
    Row,
    Col,
} from "reactstrap";

function Team() {
    return (
      <>
        <h1 className="title">Our team</h1>
        <div className="team">
            <Container>
                <Row>
                    <Col md="4">
                    <div className="team-player">
                    <div className="player-img">
                        <img src="" alt="bearzinga"/>
                    </div>
                    <h4 className="title">Bearzinga</h4>
                    <p className="category text-info">Developer</p>
                    <p className="description">
                        Software Engineer with a major in Computer Science and specialisation of Artificial intelligence
                    </p>
                    </div>
                    </Col>
                    <Col md="4">
                    <div className="team-player">
                    <div className="player-img">
                        <img src="" alt="bearzinga"/>
                    </div>
                    <h4 className="title">Bearybombibi</h4>
                    <p className="category text-info">Business Development</p>
                    <p className="description">
                        Business Administration professional with a major in Finance.
                    </p>
                    </div>
                    </Col>
                    <Col md="4">
                    <div className="player-img">
                        <img src="" alt="bearzinga"/>
                    </div>
                    <div className="team-player">
                    <h4 className="title">Eva Jenner</h4>
                    <p className="category text-info">Fashion</p>
                    <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do
                    </p>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col md="6">
                <div className="team-player">
                <div className="player-img">
                    <img src="" alt="bearzinga"/>
                </div>
                <h4 className="title">Eva Jenner</h4>
                <p className="category text-info">Fashion</p>
                <p className="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do
                </p>
                </div>
                </Col>
                <Col md="6">
                <div className="team-player">
                <div className="player-img">
                    <img src="" alt="bearzinga"/>
                </div>
                <h4 className="title">Eva Jenner</h4>
                <p className="category text-info">Fashion</p>
                <p className="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do
                </p>
                </div>
                </Col>
            </Row>
        </div>
      </>
    );
  }
  
  export default Team;

