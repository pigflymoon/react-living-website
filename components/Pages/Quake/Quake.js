import React from 'react';
import {PropTypes} from 'react';
import Labels from '../../RangeSlider/label'
import {Flex, Box} from 'reflexbox'
import QuakeMap from '../../GoogleMap/QuakeMap'
import './Quake.scss';


const init_lng = 174.885971;
const init_lat = -40.900557;
let nps_url = "https://api.geonet.org.nz/quake?MMI=";

export default class Quake extends React.Component {

    constructor() {
        super()
        this.state = {
            level: 4
        }
        this.handleChooseLevel = this.handleChooseLevel.bind(this)

    }

    handleChooseLevel(stat) {
        console.log('hi', stat)
        if (stat <= 3) {
            this.setState({level: 3})
        } else if (stat <= 4) {
            this.setState({level: 4})
        } else if (stat <= 5) {
            this.setState({level: 5})
        } else if (stat <= 6) {
            this.setState({level: 6})
        } else {
            this.setState({level: 7})
        }

    }


    render() {

        return (
            <div className="bg-white">

                <Flex align='center' wrap justify="center" pb={6}>
                    <Box col={8}>
                        <Labels onChooseLevel={this.handleChooseLevel}></Labels>
                    </Box>


                    <Box col={8} className="map-container">
                        <QuakeMap init_lat={init_lat} init_lng={init_lng}
                                  nps_source={nps_url} level={this.state.level}/>
                    </Box>

                </Flex>
            </div>

        )
    }
}

