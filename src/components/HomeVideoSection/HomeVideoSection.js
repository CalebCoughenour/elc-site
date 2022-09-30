import React, { useEffect } from 'react';
import { VideoSec, YoutubeVideo, VideoButton, VideoTitle } from './HomeVideoSection.elements';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './HomeVideoSection.css';

const HomeVideoSection = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return(
    <>
      <VideoSec>
        <Container style={{ textAlign: 'center'}}>
          <div data-aos="fade-up">
            <Card style={{ background: '#1D1A1A', width: '100%', border: '1.5px solid black' }}>
              <Container>
                <VideoTitle>EVERYONE LEARNS CRYPTO</VideoTitle>
                <YoutubeVideo className="youtube-video" src="https://www.youtube.com/embed/7rWUIDRyUMg" title="Everyone Learns Crypto Intro Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></YoutubeVideo>
              </Container>
              <Container>
                <Link to='/videos'>
                  <VideoButton className='video-button'>View All Videos</VideoButton>
                </Link>
              </Container>
            </Card>
          </div>
        </Container>
      </VideoSec>
    </>
  )
};

export default HomeVideoSection;