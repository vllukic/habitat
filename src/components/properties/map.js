import React from 'react';
import {
  withGoogleMap, GoogleMap, Marker, withScriptjs,
} from 'react-google-maps';

const PropertiesMap = withScriptjs(withGoogleMap((props) => {
  const { isMarkerShown } = props;
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 44.74667, lng: 19.69 }}
      center={{ lat: 44.74667, lng: 19.69 }}
    >
      {isMarkerShown && <Marker position={{ lat: 44.74667, lng: 19.69 }} />}
    </GoogleMap>
  );
}));

export default PropertiesMap;
