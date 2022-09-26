import React, { useEffect } from "react";
import { MissionSec, MissionText, MissionTextSection, Media } from "./MissionSection.elements";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Aos from 'aos';
import 'aos/dist/aos.css';

const MissionSection = ({ sectionText, media }) => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return(
    <>
        <MissionSec>          
          <Container>
            <div data-aos="fade-left">
              <Card style={{ background: '#383232', padding: '50px 0px', border: 'none'}}>
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
            </div>
          </Container>
      </MissionSec>
    </>
  )
};

export default MissionSection;