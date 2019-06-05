import React from 'react'
import './Location.scss';
import Map from '../../commons/Map';


const Location = ({ location }) => {
  const latitude = 43.2935862
  const longitude = -2.25313
  return (
    <div className="localitation">
      <div className="container localitation__container">
        <div className="localitation__title">
          <h2>{location.name}</h2>
        </div>
        <div className="localitation__text--container">
          <p dangerouslySetInnerHTML={{ __html: location.body }}></p>

        </div>
        <div className="localitation__container--map">
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTxauB_VWpo0_8hWELlE3pN59uuHzxD-8&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            link={location.mapsLink}
            latitude={latitude}
            longitude={longitude} />
        </div>
      </div>
    </div>
  )
}


export default Location