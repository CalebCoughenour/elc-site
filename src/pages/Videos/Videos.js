import React from 'react';
import { BannerSection } from '../../components';
import { bannerObj } from './Data';
import { VideoCardSection } from '../../components';

const Videos = () => {
  return (
    <>
      <BannerSection {...bannerObj} />
      <div style={{ background: '#383232' }} >
        <VideoCardSection />  
      </div>
    </>
  )
}

export default Videos;