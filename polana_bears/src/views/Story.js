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
                    <p style={cardStyling.p}>
                    It seems like the Polana Bears have formed their own governance systems. 10 mighty Royal Polana Bears rule PolanaLand, leading the Polana effort to fend off further attacks on their home. Which one of us #PolanaSeekers will receive top-secret information about these 10 Royal creatures?
                    </p>
                    <p style={cardStyling.p}>
                    Take your shot. Get your own Polana Bear in January 2021.
                    </p>
                    
                </div>
            </div>
        </Container>
        </>
    );
}

export default Story;