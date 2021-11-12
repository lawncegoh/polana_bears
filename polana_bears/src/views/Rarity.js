import React from "react";

// reactstrap components
import {
    Container
  } from "reactstrap";

function BearyInformation() {
  return (
    <>
      <Container>
      <h1>Our collection of bears</h1>
        <h2>Learn more about rarities here</h2>
        <Container className="rarity-container">
            <div class="gallery-wrap">
                <div class="item item-1"></div>
                <div class="item item-2"></div>
                <div class="item item-3"></div>
                <div class="item item-4"></div>
                <div class="item item-5"></div>
            </div>
        </Container>
        </Container>
    </>
  );
}

export default BearyInformation;