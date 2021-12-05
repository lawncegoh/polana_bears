import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import Puzzle from "../assets/img/puzzle.jpeg"
import "./puzzle.css"
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import styled, { css } from 'styled-components'

import {
    Container
} from 'reactstrap';

function Puzzles() {
    const puzzleStyle = {
        div: {
            textAlign:"center",
            paddingTop:"2%"
        },
        words: {
            color:"white"
        }
    }
    const navigate = useNavigate();
    const success = () => {
        return (
            navigate("/success")
        );
    }
    return (
        <Container style={puzzleStyle.div}>
        <h1 style={puzzleStyle.words}>Puzzles for days!!</h1>
        <h3 style={puzzleStyle.words}>Solve the puzzle to get a snowflake :-)</h3>
        <JigsawPuzzle
        imageSrc={Puzzle}
        rows={1}
        columns={1}
        onSolved={() => success()}
        />
        <br />
        <h4 style={puzzleStyle.words}>Alternatively, you can mint a SnowFlake and bypass the puzzle </h4>
        <Link to="/mintpage" className="btn btn-primary">Mint Now</Link>
        </Container>
    );
}

export default Puzzles;