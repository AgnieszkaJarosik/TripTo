import React from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types"; 
import Marker from "components/Marker";


const apiKey = process.env.REACT_APP_MAPS_KEY;
 
const Map = (props) => {

  return (
      <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey}}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => props.onMapLoaded(map) }
      >
      </GoogleMapReact>
    );
}
 
export default Map;

Map.defaultProps = {
  center: {
    lat: 52.069167,
    lng: 19.480556
  },
  zoom: 6
};