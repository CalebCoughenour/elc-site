import React from 'react';
import  { missionObjOne } from './Data';
import { BannerSection, MissionSection } from '../../components';


const Home = () => {
  return (
    <>
      <BannerSection />
      <MissionSection {...missionObjOne} />
    </>
  )
}

export default Home;