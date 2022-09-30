import React from 'react';
import { BannerImg, BannerSec } from './BannerSection.elements';


const BannerSection = ({ bannerSRC, bannerAlt }) => {
  return (
    <>
      <BannerSec>
        <BannerImg src={bannerSRC} alt={bannerAlt}/>
      </BannerSec>
    </>
  );
}

export default BannerSection;