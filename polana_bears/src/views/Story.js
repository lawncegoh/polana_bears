import React, { useState, useEffect } from "react";
// import PolarBear from "../assets/img/polar_bear.jpeg";


import {
    Container,
    Card
} from "reactstrap";

import styled from "styled-components";

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

      const StyledCard = styled(Card)`
      margin: 5%;
      font-size: 1.5em;
      text-align: center;
      color: black;
    `;

    const displayMobile = () => {
        return (
            <Container>
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
                            It is estimated that there resides 4,888 Polana Bears in PolanaLand. On January 8th 2022,
                            We will release highly classified information on each of these 4,888 creatures in an attempt to gain a deeper understanding of the Polana civilization.
                        </p>
                        <p style={cardStyling.p}>
                            Join our movement. Join our search. Join the #PolanaSeekers.
                        </p>
                    </div>
                </Container>
                <Container style={cardStyling.div}>
                    <StyledCard>
                    <h1>Teasers for Post-Mint</h1>
                    </StyledCard>
                </Container>
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
                            It is estimated that there resides 4,888 Polana Bears in PolanaLand.  On January 8th 2022,
                            we will release highly classified information on each of these 4,888 creatures in an attempt to gain a deeper understanding of the Polana civilization.
                        </p>
                        <p style={cardStyling.p}>
                            Join our movement. Join our search. Join the #PolanaSeekers.
                        </p>
                    </div>

                    <br />
                    <div style={titleStyling.title}>
                            <h1>Pre-Mint events</h1>
                    </div>
                    <Container style={cardStyling.div}> 
                        <StyledCard>
                            <h3>SnowFlake</h3>
                            <div style={cardStyling.line}></div>
                            <p>Polana Seekers to complete a puzzle on this site to earn a SnowFlake NFT</p>
                            <br />
                            <p>SnowFlake owners are considered Polana Land VIPs and will gain access to exclusive Solana prize lucky draws, other projects as well as a guaranteed mint.</p>
                        </StyledCard>
                    </Container>
                    <br/>
                    <div style={titleStyling.title}>
                            <h1>Teasers for Post-Mint</h1>
                    </div>
                    <Container style={cardStyling.div}> 
                        <StyledCard>
                            <h4><b>PvP</b></h4>
                            <div style={cardStyling.line}></div>
                            <p>
                            Fight of the strongest Polana Bears, earning tokens in the process. This adds utility to each bear where the strength of the equipments come into play as you pit yourself against others to win tokens.
                            </p>
                            <br />
                        </StyledCard>
                        <StyledCard>
                            <h4><b>Training Process</b></h4>
                            <div style={cardStyling.line}></div>
                            <p>
                            The bears would gain experience points as battles are won and less so when battles are lost. But hard workers will get rewarded in the longer run as they gain stats through higher levels gained. Just like you’ll imagine, there will be random chances of gaining more skills to use as time goes by too.
                            </p>
                        </StyledCard>
                        <StyledCard>
                            <h4><b>Tokenised Rewards</b></h4>
                            <div style={cardStyling.line}></div>
                            <p>
                            A weekly leaderboard would hold the current best players of the PvP round, in which the leaderboard would be reset every week. The top players would receive tiered rewards based on the token. Climb the leaderboard to show your worth to players all over the Solana chain.
                            </p>
                        </StyledCard>
                        <StyledCard>
                            <h4><b>Minting Upgrades</b></h4>
                            <div style={cardStyling.line}></div>
                            <p>
                            Future rounds of mints would take place to allow for gachapon-based chances of minting special equipments and serums to morph your current Polana Bears
                            </p>
                        </StyledCard>
                        <StyledCard>
                            <h4><b>Combiner</b></h4>
                            <div style={cardStyling.line}></div>
                            <p>
                            Going hand in hand with the point above, with equipments, we would implement a combiner where you are able to mint a bear and an accessory/serum NFT to form a stronger bear                            </p>                        
                        </StyledCard>
                    </Container>
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