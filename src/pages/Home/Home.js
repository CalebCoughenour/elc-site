import React from 'react';
import  { missionObjOne, missionObjTwo, missionObjThree, missionObjFour, bannerObj } from './Data';
import { BannerSection, MissionSection, MissionSectionRight, HomeVideoSection } from '../../components';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <>
      <BannerSection {...bannerObj} />
      <div style={{ background: '#383232' }} >
        <Container>
          <Card style={{ border: 'none', background: '#383232' }}>
            <MissionSection {...missionObjOne} />
            <MissionSectionRight {...missionObjTwo} />
            <MissionSection {...missionObjThree} />
            <MissionSectionRight {...missionObjFour} />
          </Card>
        </Container>
        
      </div>
      <HomeVideoSection />
    </>
  )
}

export default Home;