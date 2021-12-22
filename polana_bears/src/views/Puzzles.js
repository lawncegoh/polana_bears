import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import Puzzle from "../assets/img/puzzle.jpeg"
import "./puzzle.css"
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
// import styled, { css } from 'styled-components'
import Success from './Success';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import styled from 'styled-components'

import {
    Container
} from 'reactstrap';

function Puzzles() {
    const puzzleStyle = {
        div: {
            textAlign: "center",
            paddingTop: "2%"
        },
        words: {
            color: "white"
        }
    }

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
        },
        fontSizeHeader: {
            fontSize: "500%",
            marginTop: "10%",
            "@media (max-width: 768px)": {
                marginTop: "5px",
            }
        }, fontSizeBody: {
            fontSize: "110%",
        }, discord: {
            color: "#7289da",
        }, twitter: {
            color: "#49a1eb",
        }, instagram: {
            color: "black",
        }, appBar: {
            background: "transparent",
            boxShadow: "none",
            "@media (max-width: 768px)": {
                paddingLeft: 0,
            },
        }, row: {
            marginTop: "20px",
        }, mintButton: {
            background: "#647C90",
            marginTop: "20px",
        }, mintWords: {
            display: "inline-flex",
            marginTop: "10px",
        }, container: {
            textAlignVertical: "center",
        }, navLink: {
            color: "white"
        }
    }

    const NavLink = styled(Link)`
      padding: 5px;
      color: black;
      text-decoration: none;
      &:hover {
        color: grey;
        background: navy;
      }
    `;

    const [solvedPuzzle, setSolvedPuzzle] = useState(false)

    const success = () => {
        setSolvedPuzzle(true)
    }
    return (
        solvedPuzzle ?
            <Success /> :
            <div className="wrapper">
                <div style={cardStyling.container}>
                    <Toolbar style={cardStyling.appBar}>
                        <Box sx={{ flexGrow: 1 }} />
                        <div class="row" style={cardStyling.row}>
                            <div class="col-xl">
                                <a
                                    style={cardStyling.discord}
                                    href="https://discord.gg/gFAbQrSYM5">
                                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                                </a>
                            </div>
                            <div class="col-xl">
                                <a
                                    style={cardStyling.instagram}
                                    href="https://www.instagram.com/polanabearsnft/">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                            <div class="col-xl">
                                <a
                                    style={cardStyling.twitter}
                                    href="https://twitter.com/PolanaBearsnft">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                            </div>
                            {/* <div class="col-xl">
                  <NavLink to="/puzzles">Puzzle</NavLink>
                </div> */}
                            <div class="col-xl">
                                <NavLink to="/" style={cardStyling.navLink}>Home</NavLink>
                            </div>
                        </div>
                    </Toolbar>
                </div>
                <Container style={puzzleStyle.div}>
                    <h1 style={puzzleStyle.words}>Puzzles for days!!</h1>
                    <h3 style={puzzleStyle.words}>Solve the puzzle to get a snowflake :-)</h3>
                    <Container style={cardStyling.div}>
                        <h4 style={puzzleStyle.words}>Benfits of minting a snowflake: </h4>
                        <h6 style={puzzleStyle.words}>1. As an owner of the Snowflake NFT, you will be considered a VIP of Polana Land </h6>
                        <h6 style={puzzleStyle.words}>2. You will automatically enter a VIP-exclusive lucky draw for a mega Solana giveaway on Boxing Day (26 Dec) </h6>
                        <h6 style={puzzleStyle.words}>3. For upcoming giveaways (where a lucky draw is required), you will have double the number of entries (provided you complete all requirements of the giveaway).</h6>
                        <h6 style={puzzleStyle.words}>4. Discounted pre-sale minting of Polana Bears NFT when launched in early January.</h6>
                    </Container>
                    <br/>
                    <JigsawPuzzle
                        imageSrc={Puzzle}
                        rows={0}
                        columns={0}
                        onSolved={success}
                    />
                     <h4 style={puzzleStyle.words}>Unfortunately, the puzzle has close BUT you can still mint a Snowflake for 0.1 sol to gain access to VIP benefits!</h4>
                    <br />
                    <h4 style={puzzleStyle.words}>Alternatively, you can mint a SnowFlake and bypass the puzzle </h4>
                    <a href="http://snowflake-mint.polanabears.com" className="btn btn-primary">Mint Now</a>
                </Container>
            </div>
    );
}

export default Puzzles;