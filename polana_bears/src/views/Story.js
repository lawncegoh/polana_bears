import React from "react";
// import PolarBear from "../assets/img/polar_bear.jpeg";


import {
    Container
} from "reactstrap";

function Story() {
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
            boxShadow: "rgba(255,255,255, 0.4) 5px 5px, rgba(255,255,255, 0.3) 10px 10px, rgba(255,255,255, 0.2) 15px 15px, rgba(255,255,255, 0.1) 20px 20px, rgba(255,255,255, 0.05) 25px 25px",
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
        <>
        <Container>
            <div>
                <div style={titleStyling.title}>
                    <h1>The Story of our Bears</h1>
                </div>
                <div style={cardStyling.div}>
                    <div style={cardStyling.line}></div>
                    <br />
                    <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>In 1921, a group of hunters infiltrated PolanaLand and massacred several elderly Polana Bears. Ever since then, the Polana Bears were never seen again. </h5>
                    <br />
                    <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>A brand new investigation was recently launched and UAV footage found that the Polana Bears have developed as a civilization and have biologically evolved to develop human-like features. </h5>
                    <br />
                    <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>It is estimated that there resides 4,888 Polana Bears in PolanaLand. We will release highly classified information on each of these 4,888 creatures in an attempt to gain a deeper understanding of the Polana civilization.</h5>
                    <br />
                    <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>Each bear is 100% uniquely created by combining different traits from different body categories to create unique NFTs. We have over xxx unique traits, that algorithmically forms over 70 million unique combinations</h5>
                    <br />
                    <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>Join our movement. Join our search. </h5>
                    <br />
                    <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>Join the #PolanaSeekers.</h5>
                    <br />
                    <h5 className="category category-absolute" style={cardStyling.fontSizeBody}>Take your shot. Get your own Polana Bear in <u><b>January 2022</b></u></h5>                   
                </div>
            </div>
        </Container>
        </>
    );
}

export default Story;