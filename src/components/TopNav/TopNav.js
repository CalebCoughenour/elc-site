import React from 'react';
import { TopNavSection, SocialIconLink, TopNavLink } from './TopNav.elements';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTwitter, FaYoutube } from 'react-icons/fa';


function TopNav() {
  return (
    <TopNavSection>
      <Container style={{ background: '#1D1A1A'}}>
        <Row style={{ background: '#1D1A1A', textAlign: 'center'}}>

          <Col>
            {/* Nav links */}
            <TopNavLink href='/'>Home</TopNavLink>
            <TopNavLink href='/videos'>Videos</TopNavLink>
            <TopNavLink href='/research'>Research</TopNavLink>
            <TopNavLink href='/news'>News</TopNavLink>

            {/* Social Links */}
            <SocialIconLink href={'//www.twitter.com/belaccoke'} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter style={{ background: '#1D1A1A'}} />
            </SocialIconLink>
            <SocialIconLink href={'//www.youtube.com/channel/UCMsqHdA66Awh_ljOYV8iKkQ'} target="_blank" rel="noopener noreferrer" aria-label="Youtube">
              <FaYoutube style={{ background: '#1D1A1A'}} />
            </SocialIconLink>
          </Col>


        </Row>
      </Container>
    </TopNavSection>
  );
}

export default TopNav;