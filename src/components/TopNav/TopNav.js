import React from 'react';
import { TopNavSection, TopNavTitle, TopNavLink } from './TopNav.elements';


function TopNav() {
  return (
    <TopNavSection>
      <TopNavTitle href='/'>ELC</TopNavTitle>
      <TopNavLink href='/'>Home</TopNavLink>
      <TopNavLink href='/videos'>Videos</TopNavLink>
      <TopNavLink href='/research'>Research</TopNavLink>
    </TopNavSection>
  );
}

export default TopNav;