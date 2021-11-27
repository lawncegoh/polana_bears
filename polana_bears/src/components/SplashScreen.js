import React, { useEffect } from "react";
import Bear from "../assets/img/splash_bear.jpg";

function SplashScreen() {
    const style = {
        img: {
            alignContent:"center",
            margin:"0 auto",
            width:"300px",
            height: "300px",
            objectFit:"block"
        }
    }

    useEffect(() => {
        document.body.style.backgroundColor = "#061133"
    })
    return (
    <>
        <div>
            <h1>Find your bear today!</h1>
            <img src={Bear} style={style.img} alt=""/>
        </div>
    </>
  );
}

export default SplashScreen;