import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import PropertyItem from './property';
import PropertiesLocation from './map';
import { ReactCreateContext } from '../../utils/app-context';

const Page = styled.div`
  padding: 2rem 1rem 1rem 1rem;
`;
const PaddedMap = styled.div`
  padding: 0 0 2rem 0;
`;

const PropertiesList = () => {
  const { properties } = useContext(ReactCreateContext);
  console.log('Properties', properties);
  return (
    <Page>
      <PaddedMap>
        <PropertiesLocation
          isMarkerShown
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        />
      </PaddedMap>
      <Row>
        {properties.map(property => (
          <Col md={2} key={property.id}>
            <PropertyItem onClick={() => alert('OnClick')} property={property} />
          </Col>
        ))}
      </Row>
    </Page>
  );
};

export default PropertiesList;
