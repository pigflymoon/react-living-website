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
            level: '4'
        }

    }

    changeLevel = (value) => {
        console.log('level ', value)
        // this.setState({
        //     level: value
        // })
    }



    render() {
        const {level} = this.state
        return (
            <div className="bg-white">

                <Flex align='center' wrap justify="center" pb={6}>
                    <Box col={8}>
                        <Labels onChoose={this.changeLevel} />
                    </Box>
                    <Box col={8} className="map-container">
                        <QuakeMap init_lat={init_lat} init_lng={init_lng}
                                  nps_source={nps_url}  quake_level={level} />
                    </Box>

                </Flex>
            </div>

        )
    }
}

