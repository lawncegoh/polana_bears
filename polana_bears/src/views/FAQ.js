import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Row,
    Col
} from 'reactstrap';

function FAQ() {
    const cardStyling = {
        container: {
            height:"100vh",
            backgroundColor:"#222",
            width:"80vw",
            display:"flex",
            alignContent:"center",
            flexWrap:"wrap"
        },
        div: {
            width:"100%",
            height:"80%",
            backgroundColor:"#647C90",
            boxSizing:"bordex-box",
            borderRadius:"2px",
            margin:"15px 15px",
            color:"#fff",
            padding:"40px",
        }, line: {
            width:"100%",
            height:"5px",
            marginTop:"5px",
            marginBottom:"15px",
            backgroundColor:"#0ebeff",
            alignContent:"center",
            flexWrap:"wrap"
        }, p: {
            color:"white",
            fontSize:"25px",
            marginTop:"15px",
        }, li: {
            color:"white",
            fontSize:"25px",
            marginTop:"15px",
        }
    }
  return (
      <div>
        <h1>Frequently Asked Questions</h1>
        <Row>
            <Col>
                <div style={cardStyling.div}>
                    <div style={cardStyling.line}></div>
                    <h4>How do I make a Polana Bear mine?</h4>
                    <p>You can get one through the minting process during our launch for public sale.</p>
                    <p>You can also get it through the secondary markets that we will be listing on post launch.</p>
                </div>
            </Col>
            <Col>
                <div style={cardStyling.div}>
                    <div style={cardStyling.line}></div>
                    <h4>What secondary markets are we listing on?</h4>
                    <ul>
                        <li>Opensea</li>
                        <li>Solanart.io</li>
                    </ul>
                </div>
            </Col>
            <Col>
                <div style={cardStyling.div}>
                    <div style={cardStyling.line}></div>
                    <h4>Will there be a whitelist and how do I join it?</h4>
                    <p>Yes! There will be a whitelist. To join it, there are a couple of steps to follow:
                write steps here...</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div style={cardStyling.div}>
                    <div style={cardStyling.line}></div>
                    <h4>Where can I find out the rarity of my Polana Bear?</h4>
                    <p>polanabears.com/rarity. Instructions to use the site will be in the link itself.
                Can also be checked through discord.</p>
                </div>
            </Col>
            <Col>
            <div style={cardStyling.div}>
                <div style={cardStyling.line}></div>
                <h4>What happens after public sale?</h4>
                    <p>Funds would be driven towards marketing, giveaways and other events for the Polana Community.
                    80% of royalties would be used to sweep the floor on the various secondary markets.
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
}

export default FAQ;