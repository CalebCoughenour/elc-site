import React from 'react';
import { BannerSection } from '../../components';
import { bannerObj } from './Data';
import TestComp from '../../components/TestComponent';

const Videos = () => {
  return (
    <>
      <BannerSection {...bannerObj} />
      <div style={{ background: '#383232' }} >
        <TestComp />
        <TestComp />
        <TestComp />
      </div>
    </>
  )
}

export default Videos;