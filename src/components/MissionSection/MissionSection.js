import React from "react";
import { MissionSec, MissionTitle, MissionText } from "./MissionSection.elements";
import Container from "react-bootstrap/Container";


const MissionSection = () => {
  return(
    <>
      <MissionSec>
        <Container>
          <MissionTitle>Our Mission</MissionTitle>
          <MissionText></MissionText>
        </Container>
      </MissionSec>
    </>
  )
};

export default MissionSection;