import React from "react";
import { MissionSec, MissionTitle, MissionText, MissionSecVideo, MissionTextSec } from "./MissionSection.elements";
import { AboutSec, BannerTextWrapper, BannerText, AboutTextSection, AboutTextTitle, Img, AboutParagraph, Video, VideoSection } from './MissionSection.elements';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MissionSection = () => {
  return(
    <>
      {/* <MissionSec>
        <Container>
          <MissionTitle>Our Mission</MissionTitle>
          <Row>
            <Col md={true}>
              <MissionTextSec>
                <Container>
                  <MissionText>We believe global adoption of crypto and web3 is right around the corner.</MissionText>
                  <MissionSecVideo src="https://assets.mixkit.co/videos/preview/mixkit-world-map-in-a-digital-world-12748-large.mp4" autoPlay muted loop />
                </Container>
              </MissionTextSec>
            </Col>
          </Row>

          
        </Container>
      </MissionSec> */}


``````<AboutSec>
        <Container>
          <Row>
            <Col md={true}>
              <AboutTextSection>
                <Container>                 
                  <Video src='https://assets.mixkit.co/videos/preview/mixkit-world-map-in-a-digital-world-12748-large.mp4' autoPlay muted loop />
                  <AboutParagraph>
                    We believe global adoption of crypto and web3 is right around the corner.
                  </AboutParagraph>
                </Container>
              </AboutTextSection>
            </Col>
          </Row>
        </Container>
      </AboutSec>
    </>
  )
};

export default MissionSection;