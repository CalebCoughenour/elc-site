import React from 'react';
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';
import { CardText,CardTitle } from './ResearchCard.elements';

const ResearchCard = (props) => {
  return (
    <>
      <Card style={{ width: '90%', margin: '15px 0px 15px 0px'}}>
        <CardTitle>{props.cardTitle}</CardTitle>
        <CardText>
          {props.cardText}
        </CardText>
      </Card>
    </>
  )
};

ResearchCard.propTypes = {
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  cardTextTwo: PropTypes.string,
}

export default ResearchCard;