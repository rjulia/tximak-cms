import React, { Component } from "react";
import PropTypes from "prop-types";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import LocationIcon from "../../img/icon-map.svg";

class Map extends Component {
  render() {
    if (!this.props.latitude || !this.props.longitude || !this.props.link) {
      return null;
    }
    return (
      <GoogleMap
        defaultOptions={{ styles: '' }}
        defaultZoom={16}
        defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
      >
        {console.log(Marker.icon)}
        <Marker
          position={{ lat: this.props.latitude, lng: this.props.longitude }}
          icon={{
            url: LocationIcon,
            scaledSize: { height: 60, width: 60 },
          }}
          class="hello"
          options={{ "className": "icon" }}
          onClick={() => window.open(this.props.link)}
        />
      </GoogleMap>
    );
  }
}

Map.propTypes = {
  link: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default withScriptjs(withGoogleMap(Map));

