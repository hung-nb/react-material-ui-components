import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    locationDetail: {
      title: '',
      address: ''
    },
  }

  onMarkerClick = (props, marker, e) => {
    const { locationList } = this.props
    const detail = locationList.find(element => element.title === props.name)

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      locationDetail: {
        title: detail.title,
        address: detail.address
      },
    })
  }

  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    const { locationDetail } = this.state
    const { locationList } = this.props
    const initialCoords = {
      lat: -37.7017,
      lng: 144.9537,
    }
    return (
      <Map
        item
        xs={12}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={9}
        initialCenter={initialCoords}
      >
        {locationList.map(item => {
          const coords = {
            lat: item.coords.lat,
            lng: item.coords.lon,
          }
          return (
            <Marker
              onClick={this.onMarkerClick}
              name={item.title}
              position={coords}
            />
          )
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <p className="o-label">{locationDetail.title}</p>
          <p>
            {locationDetail.address}
          </p>
          <button>
            More information
          </button>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCE2sJ1yCM19VSJb2kyeS-l-f5AtS2mBSc',
})(MapContainer)
