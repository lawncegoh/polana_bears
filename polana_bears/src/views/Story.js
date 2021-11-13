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
            backgroundColor:"#647C90",
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
                    {/* <p style={cardStyling.p}>
                    On November 8 2021, 8 members of the isolated Polana Bear tribe finally made their first appearance in a century, hunting for fish in a village near the PolanaLand border. In 1921, a group of hunters infiltrated the tribe and massacred several elderly Polana Bears. Ever since then, the Polana Bears were never seen again as they grew aggressive to fend off further attacks on their home, building walls and fences to isolate themselves from the outside world.
                    </p> */}
                    <p style={cardStyling.p}>
                    This recent encounter has kickstarted a brand new investigation into the lives of the Polana Bears. We need to know more about the Polana Bears. This isn't just a zoology research study. This is us wanting to know more about one of the most profound breeds of lifeform in the entire history of the world.
                    </p>
                    {/* <CardContent>
                    Recent UAV footage found that the Polana Bears have developed as a civilization and have formed a community with social hierarchies. It can also be seen that the Polana Bears have biologically evolved to develop human-like features, ever since the attack in 1921. They have also managed to gather man-made tools and equipment that have flowed down the Polana River from neighboring villages and got washed up onto the shores of PolanaLand.
                    </CardContent>
                    <CardContent>
                    It is estimated that there resides 10,000 Polana Bears, with 5 distinct social classes - Royalty, Nobles, Commoners, Labourers and Peasants.  On December 25th 2021, we will release highly classified information on each of these 8,888 Polana Bears in an attempt to gain a deeper understanding of the Polana civilization.
                    </CardContent>
                    <CardContent>
                    Join our movement. Join our search. Join the #PolanaSeekers.
                    </CardContent> */}
                </div>
            </div>
        </Container>
        </>
    );
}

export default Story;