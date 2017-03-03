import React, {Component} from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './Labels.scss'

class Labels extends Component {
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

        const formatkg = value => value
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

export default Labels
