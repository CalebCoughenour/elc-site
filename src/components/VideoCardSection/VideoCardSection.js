import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import VideoCard from '../VideoCard/VideoCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './VideoCardSection.css';
import '../../App.css';

const CardLinkSection = () => {
  return (
    <>
      <div className="card-link-section">
        <hr className="styled-hr" />
          <Container>
            <Tabs
              defaultActiveKey="wallets"
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="wallets" title="Wallets">
                <Container>
                <Row>
                  <Col lg={true}>
                    <VideoCard 
                      cardImg=''
                      cardImgAlt='A couch and chair with lights dangling above'
                      cardTitle='Wallets'
                      cardSubText='Take A Look At All The Different Styles'
                      linkPath='/designs'
                    />
                  </Col>
                  <Col lg={true}>
                    <VideoCard 
                      cardImg=''
                      cardImgAlt='A couch that is covered in pillows, with pillows overflowing on to the floor and rug'
                      cardTitle='DeFi'
                      cardSubText='Pillows, Lighting, Decor & More!'
                      linkPath='/accessories'
                    />
                  </Col>
                  <Col lg={true}>
                    <VideoCard 
                      cardImg=''
                      cardImgAlt='A pink couch with decorative throw pillows and a mirrow hanging above'
                      cardTitle='Project Specific'
                      cardSubText='Bedroom, Living Room, Dining Room'
                      linkPath='/sets'
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={true}>
                    <VideoCard 
                      cardImg=''
                      cardImgAlt='A couch and chair with lights dangling above'
                      cardTitle='Wallets'
                      cardSubText='Take A Look At All The Different Styles'
                      linkPath='/designs'
                    />
                  </Col>
                  <Col lg={true}>
                    <VideoCard 
                      cardImg=''
                      cardImgAlt='A couch that is covered in pillows, with pillows overflowing on to the floor and rug'
                      cardTitle='DeFi'
                      cardSubText='Pillows, Lighting, Decor & More!'
                      linkPath='/accessories'
                    />
                  </Col>
                  <Col lg={true}>
                    <VideoCard 
                      cardImg=''
                      cardImgAlt='A pink couch with decorative throw pillows and a mirrow hanging above'
                      cardTitle='Project Specific'
                      cardSubText='Bedroom, Living Room, Dining Room'
                      linkPath='/sets'
                    />
                  </Col>
                </Row>
              </Container>
              </Tab>
              <Tab eventKey="defi" title="DeFi">
                <Container>
                  <Row>
                    <Col lg={true}>
                      <VideoCard 
                        cardImg=''
                        cardImgAlt='A couch and chair with lights dangling above'
                        cardTitle='Wallets'
                        cardSubText='Take A Look At All The Different Styles'
                        linkPath='/designs'
                      />
                    </Col>
                    <Col lg={true}>
                      <VideoCard 
                        cardImg=''
                        cardImgAlt='A couch that is covered in pillows, with pillows overflowing on to the floor and rug'
                        cardTitle='DeFi'
                        cardSubText='Pillows, Lighting, Decor & More!'
                        linkPath='/accessories'
                      />
                    </Col>
                    <Col lg={true}>
                      <VideoCard 
                        cardImg=''
                        cardImgAlt='A pink couch with decorative throw pillows and a mirrow hanging above'
                        cardTitle='Project Specific'
                        cardSubText='Bedroom, Living Room, Dining Room'
                        linkPath='/sets'
                      />
                    </Col>
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey="Projects" title="Projects">
                <Container>
                  <Row>
                    <Col lg={true}>
                      <VideoCard 
                        cardImg=''
                        cardImgAlt='A couch and chair with lights dangling above'
                        cardTitle='Wallets'
                        cardSubText='Take A Look At All The Different Styles'
                        linkPath='/designs'
                      />
                    </Col>
                    <Col lg={true}>
                      <VideoCard 
                        cardImg=''
                        cardImgAlt='A couch that is covered in pillows, with pillows overflowing on to the floor and rug'
                        cardTitle='DeFi'
                        cardSubText='Pillows, Lighting, Decor & More!'
                        linkPath='/accessories'
                      />
                    </Col>
                    <Col lg={true}>
                      <VideoCard 
                        cardImg=''
                        cardImgAlt='A pink couch with decorative throw pillows and a mirrow hanging above'
                        cardTitle='Project Specific'
                        cardSubText='Bedroom, Living Room, Dining Room'
                        linkPath='/sets'
                      />
                    </Col>
                  </Row>
                </Container>
              </Tab>
            </Tabs>
          </Container>
        <hr className="bottom-styled-hr" />
      </div>
    </>
  )
};

export default CardLinkSection;