import React from 'react';
import { number, func } from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import ExternalUrl from '../../../constants/ExternalUrl';

const GoogleMapCustom = compose(
  withProps({
    googleMapURL: ExternalUrl.googleMapURL,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(({
  zoom,
  latitude,
  longitude,
  onMounted,
  onMarkerChange,
  onZoomChange
}) => (
  <GoogleMap
    ref={onMounted}
    defaultZoom={zoom}
    defaultCenter={{
      lat: latitude,
      lng: longitude
    }}
    onZoomChanged={onZoomChange}
  >
    <Marker
      draggable
      position={{ lat: latitude, lng: longitude }}
      onDragEnd={onMarkerChange}
    />
  </GoogleMap>
));

GoogleMapCustom.propTypes = {
  zoom: number.isRequired,
  latitude: number.isRequired,
  longitude: number.isRequired,
  onMounted: func.isRequired,
  onMarkerChange: func.isRequired,
  onZoomChange: func.isRequired
};

export default GoogleMapCustom;
