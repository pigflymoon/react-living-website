import React from 'react';
import {PropTypes} from 'react';
import './QuakeMap.scss';


export default class QuakeMap extends React.Component {

    markers = [];

    render() {
        return <div className="quake-map" ref="mapdiv">
        </div>
    }


    componentDidMount() {
        this.map = this.createMap()
        this.loadFeatures("")
    }

    createMap() {
        let mapOptions = {
            zoom: 6,
            center: this.mapCenter()
        }
        return new google.maps.Map(this.refs.mapdiv, mapOptions)
    }

    mapCenter() {
        return new google.maps.LatLng(
            this.props.init_lat,
            this.props.init_lng
        )
    }

    loadFeatures() {
        // let self = this;
        this.map = this.createMap();

        let marker = this.createMarker(this.props.init_lat, this.props.init_lng, this.map)//self.map is  this.map = this.createMap() pass created map into here
        this.markers.push(marker)//add markers as a property in self


    }

    createMarker(lat, lng, map) {
        let pointval = new google.maps.LatLng(
            parseFloat(lat),
            parseFloat(lng));

        let marker = new google.maps.Marker({
            position: pointval,
            map: map
        });

        return marker
    }

}

QuakeMap.propTypes = {
    init_lat: React.PropTypes.number,
    init_lng: React.PropTypes.number
};