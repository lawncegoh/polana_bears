import React from "react";
import Bear from "../assets/img/26.png";

function SplashScreen() {
    const style = {
        body : {
            backgroundColor:"#061133"
        },
        img: {
            alignContent:"center",
            margin:"0 auto",
            width:"300px",
            height: "300px",
            objectFit:"cover"
        }
    }
    return (
    <>
        <div style= {{backgroundColor:"#061133"}}>
            <h1>Find your bear today!</h1>
            <img src={Bear} style={style.img} alt=""/>
        </div>
    </>
  );
}

export default SplashScreen;