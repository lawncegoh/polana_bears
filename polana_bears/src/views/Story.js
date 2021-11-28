import React, { useState, useEffect } from "react";
// import PolarBear from "../assets/img/polar_bear.jpeg";


import {
    Container
} from "reactstrap";

function Story() {
    const cardStyling = {
        div: {
            width: "100%",
            height: "100%",
            backgroundColor: "#061133",
            boxSizing: "bordex-box",
            border: "solid",
            boxShadow: "rgba(255,255,255, 0.4) 5px 5px, rgba(255,255,255, 0.3) 10px 10px, rgba(255,255,255, 0.2) 15px 15px, rgba(255,255,255, 0.1) 20px 20px, rgba(255,255,255, 0.05) 25px 25px",
            borderColor: "#05080f",
            borderRadius: "2px",
            margin: "15px 15px",
            color: "#fff",
            padding: "40px",
            justifyContent: "center"
        }, line: {
            width: "100%",
            height: "5px",
            marginTop: "10px",
            backgroundColor: "#b5cae1",
            alignContent: "center",
            flexWrap: "wrap"
        }, p: {
            color: "white",
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
            boxShadow: "rgba(255,255,255, 0.4) 5px 5px, rgba(255,255,255, 0.3) 10px 10px, rgba(255,255,255, 0.2) 15px 15px, rgba(255,255,255, 0.1) 20px 20px, rgba(255,255,255, 0.05) 25px 25px",
            borderColor: "#05080f",
            borderRadius: "2px",
            color: "#fff",
            padding: "30px",
            justifyContent: "center"
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
            <Container>
                <div>
                    <div style={titleStyling.title}>
                        <h1>How it all came about</h1>
                    </div>
                    <Container>
                        <div style={cardStylingForMobile.div}>
                            <div style={cardStyling.line}></div>
                            <p style={cardStyling.p}>
                                In 1921, a group of hunters infiltrated PolanaLand and massacred several elderly Polana Bears. Ever since then, the Polana Bears were never seen again.
                                A brand new investigation was recently launched and UAV footage found that the Polana Bears have developed as a civilization and have biologically evolved to develop human-like features.
                            </p>
                            <p style={cardStyling.p}>
                                It is estimated that there resides 10,000 Polana Bears in PolanaLand.  On December 28th 2021,
                                we will release highly classified information on each of these 10,000 creatures in an attempt to gain a deeper understanding of the Polana civilization.
                            </p>
                            <p style={cardStyling.p}>
                                Join our movement. Join our search. Join the #PolanaSeekers.
                            </p>
                        </div>
                    </Container>
                </div>
            </Container>
        );
    }

    const displayDesktop = () => {
        return (
            <Container>
                <div>
                    <div style={titleStyling.title}>
                        <h1>How it all came about</h1>
                    </div>
                    <div style={cardStyling.div}>
                        <div style={cardStyling.line}></div>
                        <p style={cardStyling.p}>
                            In 1921, a group of hunters infiltrated PolanaLand and massacred several elderly Polana Bears. Ever since then, the Polana Bears were never seen again.
                            A brand new investigation was recently launched and UAV footage found that the Polana Bears have developed as a civilization and have biologically evolved to develop human-like features.
                        </p>
                        <p style={cardStyling.p}>
                            It is estimated that there resides 10,000 Polana Bears in PolanaLand.  On December 28th 2021,
                            we will release highly classified information on each of these 10,000 creatures in an attempt to gain a deeper understanding of the Polana civilization.
                        </p>
                        <p style={cardStyling.p}>
                            Join our movement. Join our search. Join the #PolanaSeekers.
                        </p>
                    </div>
                </div>
            </Container>
        );
    }

    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}
        </div >
    );
}

export default Story;