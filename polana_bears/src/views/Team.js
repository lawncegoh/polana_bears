import React, { useState, useEffect } from "react";
import Bear1 from "../assets/img/13.png";
import Bear2 from "../assets/img/14.jpg";
import Bear3 from "../assets/img/16.png";
import Bear4 from "../assets/img/23.png";
import Bear5 from "../assets/img/26.png";

import {
    Row,
    Col,
} from "reactstrap";

function Team() {
    const titleStyling = {
        title: {
            color: "white",
            alignContent: "center",
            justifyContent: "center",
            display: "flex"
        }
    }

    const cardStyling = {
        card: {
            height: "80px",
            width: "80px",
        },
        teamRoles: {
            fontSize: "small",
            color: "white"
        },
        h4: {
            fontSize: "x-small",
            color: "white",
            marginTop: "-10px",
            marginLeft: "-10px",
            padding: "5px"
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
            <div>
                <Row>
                    <Col>
                        <div class="member" style={cardStyling.card}>
                            <div class="member-img">
                                <img src={Bear1} class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div style={cardStyling.teamRoles}>
                            <h4 style={cardStyling.h4}>POLARCapt</h4>
                            <h4 style={cardStyling.h4}>Lead Developer</h4>
                        </div>
                    </Col>

                    <Col>
                        <div class="member" style={cardStyling.card}>
                            <div class="member-img">
                                <img src={Bear2} class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div style={cardStyling.teamRoles}>
                            <h4 style={cardStyling.h4}>POLARoids</h4>
                            <h4 style={cardStyling.h4}>Marketing/Artist</h4>
                        </div>
                    </Col>
                    <Col>
                        <div class="member" style={cardStyling.card}>
                            <div class="member-img">
                                <img src={Bear3} class="img-fluid" alt="" />
                            </div>
                            <div class="member-info">
                                <h4>POLARised</h4>
                                <span>Business Development</span>
                            </div>
                        </div>
                        <div style={cardStyling.teamRoles}>
                            <h4 style={cardStyling.h4}>POLARised</h4>
                            <h4 style={cardStyling.h4}>Business Development</h4>
                        </div>
                    </Col>
                    <Row>
                    </Row>
                    <Col>
                        <div class="member" style={cardStyling.card}>
                            <div class="member-img" >
                                <img src={Bear4} class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div style={cardStyling.teamRoles}>
                            <h4 style={cardStyling.h4}>POLARoyal</h4>
                            <h4 style={cardStyling.h4}>Developer</h4>
                        </div>
                    </Col>
                    <Col>
                        <div class="member" style={cardStyling.card}>
                            <div class="member-img">
                                <img src={Bear5} class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div style={cardStyling.teamRoles}>
                            <h4 style={cardStyling.h4}>POLARich</h4>
                            <h4 style={cardStyling.h4}>Developer</h4>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </div>
        );
    }

    const displayDesktop = () => {
        return (
            <div>
                <Row>
                    <Col>
                        <div class="member">
                            <div class="member-img">
                                <img src={Bear1} class="img-fluid" alt="" />
                            </div>
                            <div class="member-info">
                                <h4>POLARCapt</h4>
                                <span>Lead Developer</span>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div class="member">
                            <div class="member-img">
                                <img src={Bear2} class="img-fluid" alt="" />
                            </div>
                            <div class="member-info">
                                <h4>POLARoids</h4>
                                <span>Marketing/Artist</span>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div class="member">
                            <div class="member-img">
                                <img src={Bear3} class="img-fluid" alt="" />
                            </div>
                            <div class="member-info">
                                <h4>POLARised</h4>
                                <span>Business Development</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="member">
                            <div class="member-img">
                                <img src={Bear4} class="img-fluid" alt="" />
                            </div>
                            <div class="member-info">
                                <h4>POLARoyal</h4>
                                <span>Developer</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="member">
                            <div class="member-img">
                                <img src={Bear5} class="img-fluid" alt="" />
                            </div>
                            <div class="member-info">
                                <h4>POLARich</h4>
                                <span>Developer</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
    return (
        <div>
            <div style={titleStyling.title}>
                <h1 className="title">Our team</h1>
            </div>
            <section id="team">
                <div class="container">
                    {mobileView ? displayMobile() : displayDesktop()}
                </div>
            </section>
        </div>

    );
}

export default Team;

