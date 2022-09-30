import React from 'react';
import  { missionObjOne, missionObjTwo, missionObjThree, missionObjFour, bannerObj } from './Data';
import { BannerSection, MissionSection, MissionSectionRight, HomeVideoSection } from '../../components';


const Home = () => {
  return (
    <>
      <BannerSection {...bannerObj} />
      <div style={{ background: '#383232' }} >
        <MissionSection {...missionObjOne} />
        <MissionSectionRight {...missionObjTwo} />
        <MissionSection {...missionObjThree} />
        <MissionSectionRight {...missionObjFour} />
      </div>
      <HomeVideoSection />
    </>
  )
}

export default Home;