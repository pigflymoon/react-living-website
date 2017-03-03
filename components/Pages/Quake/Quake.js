import React from 'react';
import {PropTypes} from 'react';
import axios from 'axios';
import Labels from '../../RangeSlide/Labels'
import './Quake.scss';


class QuakeMap extends React.Component {
    markers = [];

    render() {
        return <div className="quake-map" ref="mapdiv">
        </div>
    }

    componentDidMount() {
        this.map = this.createMap()
        this.loadFeatures()
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
        let self = this
        let infoWindow = new google.maps.InfoWindow()
        axios.get(self.props.nps_source)
            .then(function (result) {
                for (let val of result.data.features) {
                    let marker = self.createMarker(val, self.map)//self.map is  this.map = this.createMap() pass created map into here

                    marker.addListener('click', function () {
                        infoWindow.close()
                        let title = this.title
                        let infoContent = title
                        infoWindow.setContent(infoContent)
                        infoWindow.open(self.map, this)
                    });

                    self.markers.push(marker)//add markers as a property in self

                } // for
            }); //then
    }

    createMarker(val, map) {
        let pointval = new google.maps.LatLng(
            parseFloat(val['geometry']['coordinates'][1]),
            parseFloat(val['geometry']['coordinates'][0]));
        let locality = val['properties']['locality']
        let time = val['properties']['time']
        time = time.split(".")[0].replace(/-/g, '/').replace(/T/g, '  ')
        let titleText = locality + '<br/>' + time
        let marker = new google.maps.Marker({
            position: pointval,
            map: map,
            title: titleText
        });

        return marker
    }

}

QuakeMap.propTypes = {
    np_url: React.PropTypes.string,
    init_lat: React.PropTypes.number,
    init_lng: React.PropTypes.number
};

const init_lng = 174.885971;
const init_lat = -40.900557;
let nps_url = "https://api.geonet.org.nz/quake?MMI=3";

export default class Quake extends React.Component {
    render() {
        return (
            <div className="bg-white">
                <hr />
                <hr />
                <Labels />
                <hr />
                <hr />
                <QuakeMap init_lat={init_lat} init_lng={init_lng} nps_source={nps_url}/>
            </div>
        )
    }
}

