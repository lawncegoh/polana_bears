import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
            alignItems:"center",
            flexWrap:"wrap",
            justifyContent:"center",
            
        },
        div: {
            width:"100%",
            height:"100%",
            backgroundColor:"#061133",
            boxSizing:"bordex-box",
            border:"solid",
            borderColor:"#05080f",
            borderRadius:"2px",
            margin:"15px 15px",
            color:"#fff",
            padding:"40px",
            justifyContent:"center"
        }, line: {
            width:"100%",
            height:"5px",
            marginTop:"10px",
            backgroundColor:"#b5cae1",
            alignContent:"center",
            flexWrap:"wrap"
        }, p: {
            color:"white",
            fontSize:"130%",
            marginTop:"15px",
        }
    }

    const titleStyling = {
        title:{
            color:"white",
            alignContent:"center",
            justifyContent:"center",
            display:"flex"
        }
    }
  return (
      <div>
        <div style={titleStyling.title}>
            <h1>Frequently Asked Questions</h1>
        </div>
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
                        <li>magiceden.io</li>
                        <li>digitaleyes.market</li>
                    </ul>
                </div>
            </Col>
            <Col>
                <div style={cardStyling.div}>
                    <div style={cardStyling.line}></div>
                    <h4>Will there be a whitelist and how do I join it?</h4>
                    <p>Yes! There will be a whitelist. The steps will be released as we get closer to launch date. Stay tuned.</p>
                </div>
            </Col>
        </Row>
        <br/>
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