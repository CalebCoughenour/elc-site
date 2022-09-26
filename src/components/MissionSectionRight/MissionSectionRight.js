import React from "react";
import { MissionSec, MissionText, MissionTextSection, Media } from "./MissionSectionRight.elements";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const MissionSectionRight = ({ sectionText, media }) => {
  return(
    <>
        <MissionSec>          
          <Container>
           <Card style={{ background: '#383232', padding: '100px 0px', border: 'none' }}>
            <Row>
              <Col md={true}>
                <MissionTextSection style={{ position: 'relative'}}>
                  <Container>                 
                    <Media src={media} autoPlay muted loop />
                    <MissionText>
                      {sectionText}
                    </MissionText>
                  </Container>
                </MissionTextSection>
              </Col>  
            </Row>
           </Card>
          </Container>
      </MissionSec>
    </>
  )
};

export default MissionSectionRight;