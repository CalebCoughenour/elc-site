import React from 'react';
import  { missionObjOne, missionObjTwo, missionObjThree, missionObjFour } from './Data';
import { BannerSection, MissionSection, MissionSectionRight } from '../../components';


const Home = () => {
  return (
    <>
      <BannerSection />
      <MissionSection {...missionObjOne} />
      <MissionSectionRight {...missionObjTwo} />
      <MissionSection {...missionObjThree} />
      <MissionSectionRight {...missionObjFour} />
    </>
  )
}

export default Home;