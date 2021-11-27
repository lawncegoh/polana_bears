import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

import {
    Row,
    Col
} from 'reactstrap';

function FAQ() {
    const cardStyling = {
        div: {
            width: "100%",
            height: "100%",
            backgroundColor: "#061133",
            boxSizing: "bordex-box",
            border: "solid",
            borderColor: "#05080f",
            borderRadius: "2px",
            margin: "15px 15px",
            color: "#fff",
            padding: "40px",
            justifyContent: "center",
        }, line: {
            width: "100%",
            height: "5px",
            marginTop: "10px",
            backgroundColor: "#b5cae1",
            alignContent: "center",
            flexWrap: "wrap"
        }, p: {
            color: "white",
            fontSize: "130%",
            marginTop: "15px",
        }
    }

    const cardStylingForMobile = {
        div: {
            width: "100%",
            height: "100%",
            backgroundColor: "#061133",
            boxSizing: "bordex-box",
            border: "solid",
            borderColor: "#05080f",
            borderRadius: "2px",
            color: "#fff",
            padding: "40px",
            justifyContent: "center",
            marginTop: "15px"
        },
        container: {
            width: "100%",
        }, content: {
            marginTop: "5px",
        },
    }

    const titleStyling = {
        title: {
            color: "white",
            alignContent: "center",
            justifyContent: "center",
            display: "flex"
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
                <div style={titleStyling.title}>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <Container style={cardStylingForMobile.container}>
                    <Row>
                        <Col>
                            <div style={cardStylingForMobile.div}>
                                <div style={cardStyling.line} />
                                <div style={cardStylingForMobile.content}>
                                    <h4>How do I get a Polana Bear?</h4>
                                    <p>You can get one through the minting process during our launch for public sale.</p>
                                    <p>You can also get it through the secondary markets that we will be listing on post launch.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <div style={cardStylingForMobile.div}>
                                <div style={cardStyling.line} />
                                <div style={cardStylingForMobile.content}>
                                    <h4>What secondary markets are we listing on?</h4>
                                    <ul>
                                        <li>magiceden.io</li>
                                        <li>digitaleyes.market</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <div style={cardStylingForMobile.div}>
                                <div style={cardStyling.line} />
                                <div style={cardStylingForMobile.content}>
                                    <h4>Will there be a whitelist and how do I join it?</h4>
                                    <p>Further details will be released at a later date, when the whitelist event is launched.
                                        However, first 100 OG Polana Seekers will be automatically whitelisted so join our discord server before it's too late! </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <div style={cardStylingForMobile.div}>
                                <div style={cardStyling.line} />
                                <div style={cardStylingForMobile.content}>
                                    <h4>Where can I find out the rarity of my Polana Bear?</h4>
                                    <p>Currently the Polana Bears are still being finalized and hence the site is still in the works. Join our discord channel to get the latest updates!</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <div style={cardStylingForMobile.div}>
                                <div style={cardStyling.line} />
                                <div style={cardStylingForMobile.content}>
                                    <h4>What happens after public sale?</h4>
                                    <p>Funds would be driven towards marketing, giveaways and other events for the Polana Community.
                                        85% of royalties would be used to sweep the floor on the various secondary markets.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <div style={cardStylingForMobile.div}>
                                <div style={cardStyling.line} />
                                <div style={cardStylingForMobile.content}>
                                    <h4>What exactly is sweeping the floor?</h4>
                                    <p>
                                        We will use the funds from royalties earned to buy back floor priced bears so as to reduce the supply
                                        in the market and drive prices of the bears up with the same sustained demand. Of course, with strong marketing
                                        that will be in play throughout, demand of the bears will increase, which subsequently leads to an increase in price for the bears as well!
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

    const displayDesktop = () => {
        return (
            <div>
                <div style={titleStyling.title}>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <Row>
                    <Col>
                        <div style={cardStyling.div}>
                            <div style={cardStyling.line}></div>
                            <h4>How do I get a Polana Bear?</h4>
                            <p>You can get one through the minting process during our launch for public sale.</p>
                            <p>You can also get it through the secondary markets that we will be listing on post launch.</p>
                        </div>
                    </Col>
                    <Col>
                        <div style={cardStyling.div}>
                            <div style={cardStyling.line}></div>
                            <h4>What secondary markets are we listing on?</h4>
                            <ul>
                                <li>magiceden.io</li>
                                <li>digitaleyes.market</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div style={cardStyling.div}>
                            <div style={cardStyling.line}></div>
                            <h4>Will there be a whitelist and how do I join it?</h4>
                            <p>Further details given at later date when whitelist event launched.
                                However, first 100 OG Polana Seekers will be automatically whitelisted so join our discord server before it's too late! </p>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <div style={cardStyling.div}>
                            <div style={cardStyling.line}></div>
                            <h4>Where can I find out the rarity of my Polana Bear?</h4>
                            <p>Currently the Polana Bears are still being finalized and hence the site is still in the works. Join our discord channel to get the latest updates!</p>
                        </div>
                    </Col>
                    <Col>
                        <div style={cardStyling.div}>
                            <div style={cardStyling.line}></div>
                            <h4>What happens after public sale?</h4>
                            <p>Funds would be driven towards marketing, giveaways and other events for the Polana Community.
                                85% of royalties would be used to sweep the floor on the various secondary markets.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div style={cardStyling.div}>
                            <div style={cardStyling.line}></div>
                            <h4>What exactly is sweeping the floor?</h4>
                            <p>
                                We will use the funds from royalties earned to buy back floor priced bears so as to reduce the supply
                                in the market and drive price of the bears up with the same sustained demand. Of course, with strong marketing
                                that will be in play throughout, demand of the bears will go up which leads to an increase in price for the bears.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };
    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}
        </div>
    );
}

export default FAQ;