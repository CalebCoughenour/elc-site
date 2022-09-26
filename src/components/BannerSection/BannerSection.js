import React from 'react';
import { BannerImg, BannerSec } from './BannerSection.elements';


const BannerSection = () => {
  return (
    <>
      <BannerSec>
        <BannerImg src='images/homepage/elc-banner.webp' alt="Everyone Loves Crypto Banner" />
      </BannerSec>
    </>
  );
}

export default BannerSection;