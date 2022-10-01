import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { CardOverlay, CardTitle, CardText, CardButton, YTVideo } from './VideoCard.elements';
import './VideoCard.css';

const VideoCard = (props) => {
  return (
    <>            
      <Card className='video-card' style={{ border: '1px solid black'}}>
        <CardOverlay className='card-overlay'/>
        <YTVideo className='video-card-video' src={props.cardSrc} alt={props.cardAlt} />
        <CardText>
          <CardTitle>{props.cardTitle}</CardTitle>
          <Link to={props.linkPath}>
            <CardButton className='card-link-button'>
              VIEW
            </CardButton>
          </Link>
        </CardText>
      </Card>
    </>
  )
};

VideoCard.propTypes = {
  cardImg: PropTypes.string,
  cardImgAlt: PropTypes.string,
  cardTitle: PropTypes.propsstring,
  linkPath: PropTypes.string
};

export default VideoCard;