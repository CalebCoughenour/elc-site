import React, { useEffect } from "react";
import { MissionSec, MissionText, MissionTextSection, Media } from "./MissionSectionRight.elements";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Aos from 'aos';
import 'aos/dist/aos.css';

const MissionSectionRight = ({ sectionText, media, alt }) => {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return(
    <>
        <MissionSec>          
          <Container>
            <div data-aos='fade-right'>
              <Row>
                <Col md={true}>
                  <MissionTextSection style={{ position: 'relative'}}>                 
                    <Media src={media} alt={alt} autoPlay muted loop />
                    <Container>
                      <MissionText>
                        {sectionText}
                      </MissionText>
                    </Container>
                  </MissionTextSection>
                </Col>  
              </Row>
            </div>
          </Container>
      </MissionSec>
    </>
  )
};

export default MissionSectionRight;