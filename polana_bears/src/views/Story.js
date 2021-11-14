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
            borderRadius:"2px",
            margin:"15px 15px",
            color:"#fff",
            padding:"40px",
            justifyContent:"center"
        }, line: {
            width:"100%",
            height:"5px",
            marginTop:"10px",
            backgroundColor:"#0ebeff",
            alignContent:"center",
            flexWrap:"wrap"
        }, p: {
            color:"white",
            fontSize:"25px",
            marginTop:"15px",
        }
    }

    const titleStyling = {
        title:{
            alignContent:"center"
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
                    Take your shot. Get your own Polana Bear on December 28th, 2021.
                    </p>
                    
                </div>
            </div>
        </Container>
        </>
    );
}

export default Story;