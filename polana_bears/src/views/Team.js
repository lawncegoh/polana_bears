import React from "react";

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
                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>Emma White</h4>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div class="member">
                            <div class="member-img">
                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>Bobby Robins</h4>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div class="member">
                            <div class="member-img">
                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>Gena lee</h4>
                                    <span>SEO Expert</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="member">
                            <div class="member-img">
                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>Noel Flantier</h4>
                                    <span>ISO Developer</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="member">
                            <div class="member-img">
                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" class="img-fluid" alt=""/>
                            </div>
                                <div class="member-info">
                                    <h4>Noel Flantier</h4>
                                    <span>ISO Developer</span>
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

