import React from 'react';
import {PropTypes} from 'react';
import axios from 'axios';
import './QuakeMap.scss';


export default class QuakeMap extends React.Component {

    markers = [];

    render() {
        return <div className="quake-map" ref="mapdiv">
        </div>
    }

    componentWillReceiveProps(nextProps) {
        this.loadFeatures(nextProps)
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

    loadFeatures(nextProps) {
        let self = this
        let url = self.props.nps_source

        if (nextProps) {
            url = url + nextProps.level;
            self.map = self.createMap()
        } else {
            url = url + self.props.level;
        }
        let infoWindow = new google.maps.InfoWindow()
        console.log(url)
        axios.get(url)
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

        time = new Date(time)
        time = time.toString().split('GMT')[0]
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