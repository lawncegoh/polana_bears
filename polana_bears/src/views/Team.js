import React from "react";
import Bear1 from "../assets/img/13.png";
import Bear2 from "../assets/img/14.jpg";
import Bear3 from "../assets/img/16.png";
import Bear4 from "../assets/img/23.png";
import Bear5 from "../assets/img/26.png";

import {
    Row,
    Col,
} from "reactstrap";

const titleStyling = {
    title:{
        color:"white",
        alignContent:"center",
        justifyContent:"center",
        display:"flex"
    }
}

function Team() {
    return (
        <div>
            <div style={titleStyling.title}>
                <h1 className="title">Our team</h1>
            </div>
            <section id="team">
                <div class="container">
                    <Row>
                        <Col>
                            <div class="member">
                            <div class="member-img">
                                <img src={Bear1} class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>POLARCapt</h4>
                                    <span>Lead Developer</span>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div class="member">
                            <div class="member-img">
                                <img src={Bear2} class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>POLARoids</h4>
                                    <span>Marketing/Artist</span>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div class="member">
                            <div class="member-img">
                                <img src={Bear3} class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>POLARised</h4>
                                    <span>Business Development</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="member">
                            <div class="member-img">
                                <img src={Bear4} class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>POLARoyal</h4>
                                    <span>Developer</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="member">
                            <div class="member-img">
                                <img src={Bear5} class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>POLARich</h4>
                                    <span>Developer</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section> 
        </div>
        
    );
  }
  
  export default Team;

