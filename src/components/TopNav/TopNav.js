import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { SocialIconLink} from './TopNav.elements';

function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" style={{ background: '#1D1A1A', textAlign: 'center' }} >
      <Container>
        <Navbar.Brand href="/" style={{ color: '#ffffff' }}>Everyone Learns Crypto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: '#ffffff' }}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/" style={{ color: '#ffffff' }}>Home</Nav.Link>
            <Nav.Link href="/videos" style={{ color: '#ffffff' }}>Videos</Nav.Link>
            <Nav.Link href="/research" style={{ color: '#ffffff' }}>Research</Nav.Link>
            <Nav.Link href="/News" style={{ color: '#ffffff' }}>News</Nav.Link>
            <SocialIconLink href={'//www.twitter.com/belaccoke'} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter style={{ background: '#1D1A1A'}} />
            </SocialIconLink>
            <SocialIconLink href={'//www.youtube.com/channel/UCMsqHdA66Awh_ljOYV8iKkQ'} target="_blank" rel="noopener noreferrer" aria-label="Youtube">
              <FaYoutube style={{ background: '#1D1A1A'}} />
            </SocialIconLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;