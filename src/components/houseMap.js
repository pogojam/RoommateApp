import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { inherits } from 'util';


export class MapContainer extends Component {
constructor(props) {
  super(props)
  const location = props.location
  this.state = {

     lat:null,
     lng:null
  }
}

render() {
    const mapStyle = {
        height:'35vh',
        width:'20vw'
    }
    return (
      <Map 
      className='mapDashboard'
      google={this.props.google}
      style={mapStyle}
      zoom={14} 
      initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}

      >
      
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{'sdfs'}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAE510k_5uXwTaxAshHJWMuYy6z1YKgbi4")
})(MapContainer)