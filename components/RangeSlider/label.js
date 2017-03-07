import React, {Component} from 'react'
import Slider from './rangeSlider'

class HorizontalCustomLabels extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            horizontal: 10,
            vertical: 50
        }
    }

    handleChangeHorizontal = (value) => {
        this.setState({
            horizontal: value
        })
    }

    handleChangeVertical = (value) => {
        this.setState({
            vertical: value
        })
    }

    render() {
        const {horizontal, vertical} = this.state
        const horizontalLabels = {
            30: 'Weak+',
            40: 'Light+',
            50: 'Moderate+',
            60: 'Strong+',
            70: 'Severe+'
        }

        const verticalLabels = {
            10: 'Getting started',
            50: 'Half way',
            90: 'Almost done'
        }

        const formatkg = value => 'Magnitude : ' +(value / 10 )
        const formatPc = p => p + '%'

        return (
            
            <div className='slider custom-labels'>
                <Slider
                    min={0}
                    max={100}
                    value={horizontal}
                    labels={horizontalLabels}
                    format={formatkg}
                    onChange={this.handleChangeHorizontal}
                />
                <div className='value'>{formatkg(horizontal)}</div>
            </div>
        )
    }
}

export default HorizontalCustomLabels
