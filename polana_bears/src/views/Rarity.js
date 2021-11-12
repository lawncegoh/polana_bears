import React from "react";

// reactstrap components
import {
    Container,
    Card,
    CardBody,
  } from "reactstrap";

function BearyInformation() {
  return (
    <>
      <Container>
      <h1>Beary Information</h1>
        <h2>Rarity Explanation</h2>
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