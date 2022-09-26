import React from 'react';
import  { missionObjOne, missionObjTwo, missionObjThree } from './Data';
import { BannerSection, MissionSection, MissionSectionRight } from '../../components';


const Home = () => {
  return (
    <>
      <BannerSection />
      <MissionSection {...missionObjOne} />
      <MissionSectionRight {...missionObjTwo} />
      <MissionSection {...missionObjThree} />
      <MissionSectionRight {...missionObjTwo} />
    </>
  )
}

export default Home;