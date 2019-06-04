import React, { Component } from "react";
import PropTypes from "prop-types";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import LocationIcon from "../../img/location.svg";

class Map extends Component {
  render() {
    console.log(this.props)
    if (!this.props.latitude || !this.props.longitude || !this.props.link) {
      return null;
    }
    return (
      <GoogleMap
        defaultOptions={{ styles: '' }}
        defaultZoom={16}
        defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
      >
        <Marker
          position={{ lat: this.props.latitude, lng: this.props.longitude }}
          icon={{ url: LocationIcon }}
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

