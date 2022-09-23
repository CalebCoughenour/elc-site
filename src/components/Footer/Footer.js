import React from 'react';
import { FooterSection, SocialIconLink, FooterLink, FooterName } from './Footer.elements';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaTwitter, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <FooterSection>
      <Container style={{ background: '#A4A5A5', textAlign: 'center'}}>
        <Row style={{ background: '#A4A5A5'}}>

          {/* Footer links */}
          {/* <FooterLink href='/'>Home</FooterLink>
          <FooterLink href='/videos'>Videos</FooterLink>
          <FooterLink href='/research'>Research</FooterLink> */}

          {/* Footer Text */}
          <FooterName>Created By: BelacCoke</FooterName>

          {/* Social Links */}
          <SocialIconLink href={'//www.twitter.com/belaccoke'} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter style={{ background: '#A4A5A5'}} />
          </SocialIconLink>
          <SocialIconLink href={'//www.youtube.com/channel/UCMsqHdA66Awh_ljOYV8iKkQ'} target="_blank" rel="noopener noreferrer" aria-label="Youtube">
            <FaYoutube style={{ background: '#A4A5A5'}} />
          </SocialIconLink>


        </Row>
      </Container>
    </FooterSection>
  );
}

export default Footer;