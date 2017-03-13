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

    render() {
        const {horizontal} = this.state
        const horizontalLabels = {
            30: 'Weak+',
            40: 'Light+',
            50: 'Moderate+',
            60: 'Strong+',
            70: 'Severe+'
        }

        const formatValue = value => 'Magnitude : ' + (value / 10 )
        return (

            <div className='slider custom-labels'>
                <Slider
                    min={0}
                    max={100}
                    value={horizontal}
                    labels={horizontalLabels}
                    format={formatValue}
                    onChange={this.handleChangeHorizontal}
                />
                <div className='label-value' ref="myValue"
                     onClick={this.props.onClick.bind(null, this)}>{formatValue(horizontal)}</div>
            </div>
        )
    }
}

export default HorizontalCustomLabels
