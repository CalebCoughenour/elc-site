import React from "react";
import { MissionSec, MissionText, MissionTextSection, Media } from "./MissionSection.elements";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const MissionSection = ({ sectionText, media }) => {
  return(
    <>
        <MissionSec>          
            <Container>
              <Row>
                <Col md={true}>
                  <MissionTextSection>
                    <Container>                 
                      <Media src={media} autoPlay muted loop />
                      <MissionText>
                        {sectionText}
                      </MissionText>
                    </Container>
                  </MissionTextSection>
                </Col>
              </Row>
            </Container>
      </MissionSec>
    </>
  )
};

export default MissionSection;