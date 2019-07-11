import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.location}
  >
    {props.isMarkerShown && <Marker position={props.location } />}
  </GoogleMap>
))

export default Map;