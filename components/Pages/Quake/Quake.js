import React from 'react';
import {PropTypes} from 'react';
import Labels from '../../RangeSlider/label'
import {Flex, Box} from 'reflexbox'
import QuakeMap from '../../GoogleMap/QuakeMap'
import './Quake.scss';


const init_lng = 174.885971;
const init_lat = -40.900557;
let nps_url = "https://api.geonet.org.nz/quake?MMI=3";

export default class Quake extends React.Component {
    constructor(props, context) {
        super(props, context)
        // let geoUrl = "https://api.geonet.org.nz/quake?MMI=";

        this.state = {
            level: 6
            // url: geoUrl + this.level
        }
    }
    // componentDidMount() {
    //
    //     this.changeLevel()
    // }
    //
    changeLevel = (component,event) => {
        
        // this.setState({
        //     level: this.horizontal
        // });
        console.log(component.props.horizontal)

    }



    render() {
        return (
            <div className="bg-white">

                <Flex align='center' wrap justify="center" pb={6}>
                    <Box col={8}>
                        <Labels onClick={this.changeLevel}  />
                    </Box>
                    <Box col={8} className="map-container">
                        <QuakeMap init_lat={init_lat} init_lng={init_lng}
                                  nps_source={nps_url}/>
                    </Box>
                </Flex>
            </div>

        )
    }
}

