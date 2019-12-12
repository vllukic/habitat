import React from 'react';
import { Card, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Body = styled.div`
  padding: 0 0 1rem 0;
`;

const Property = styled(Card)`
&:hover{
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

const TextRow = styled(Row)`
padding: 0 1rem;
justify-content: space-between;
`;

const PropertyItem = ({ onClick, property }) => (
  <Body onClick={onClick} className="">
    <Property>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card bg="secondary" text="white">
        <Card.Body>
          <Card.Title>{property.address}</Card.Title>
          <Card.Text>{property.city}</Card.Text>
        </Card.Body>
      </Card>
      <Card.Body>
        <TextRow>
          <Card.Text>Bathrooms</Card.Text>
          <Card.Text>{property.bathrooms}</Card.Text>
        </TextRow>
        <TextRow>
          <Card.Text>Bedrooms</Card.Text>
          <Card.Text>{property.bedrooms}</Card.Text>
        </TextRow>
        <TextRow>
          <Card.Text>Area</Card.Text>
          <Card.Text>{property.area}</Card.Text>
        </TextRow>
        <TextRow>
          <Card.Text>Garages</Card.Text>
          <Card.Text>{property.garages}</Card.Text>
        </TextRow>
      </Card.Body>
    </Property>
  </Body>
);

export default PropertyItem;
