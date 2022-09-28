import React, { useEffect } from 'react';
import { VideoSec, YoutubeVideo } from './HomeVideoSection.elements';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomeVideoSection = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return(
    <>
      <VideoSec>
        <Container>
          <div data-aos="fade-up">
            <Card style={{ background: '#1D1A1A', alignItems: 'center', padding: '50px 0px', width: '100%' }}>
              <Container>
              <YoutubeVideo className="youtube-video" src="https://www.youtube.com/embed/7rWUIDRyUMg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></YoutubeVideo>
              </Container>
            </Card>
          </div>
        </Container>
      </VideoSec>
    </>
  )
};

export default HomeVideoSection;