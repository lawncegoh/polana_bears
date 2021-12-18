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
        }, navLink : {
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
                    <h5 style={puzzleStyle.words}>Puzzle will open on 20th December 2021 12PM GMT! Stay tuned! </h5>
                    <JigsawPuzzle
                        imageSrc={Puzzle}
                        rows={0}
                        columns={0}
                        onSolved={success}
                    />
                    <br />
                    <h4 style={puzzleStyle.words}>Alternatively, you can mint a SnowFlake and bypass the puzzle </h4>
                    {/* <a href="http://snowflake-mint.polanabears.com" className="btn btn-primary">Mint Now</a> */}
                </Container>
            </div>
    );
}

export default Puzzles;