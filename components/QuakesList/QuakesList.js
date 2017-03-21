import React from 'react';
import axios from 'axios';
import {Flex, Box} from 'reflexbox'
import{
    Grid,
    Heading,
    Space,
    Badge,
    Panel,
    PanelHeader,
    Text,
    NavItem,
    Divider,
    Tooltip,
    PanelFooter,
    LinkBlock
} from 'rebass';
import QuakeMap from '../../QuakeMap/QuakeMap'
const init_lng = 174.885971;
const init_lat = -40.900557;

export default class QuakesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // Remove the 'www.' to cause a CORS error (and see the error state)
        var filterData = [];

        axios.get(`https://api.geonet.org.nz/quake?MMI=0`)
            .then(res => {
                const filterData = [];
                var posts = res.data.features.reduce((array, value) => {
                    // if condition is our filter
                    if (value.properties.mmi >= 2) {
                        // what happens inside the filter is the map
                        let time = value.properties.time;

                        time = new Date(time);
                        time = time.toString().split('GMT')[0];
                        time = time.split(".")[0].replace(/-/g, '/').replace(/T/g, '  ');
                        value.properties.time = time;
                        value.properties.magnitude = value.properties.magnitude.toFixed(1);
                        value.properties.depth = value.properties.depth.toFixed(1) + ' km';
                        array.push(value);
                    }

                    return array;
                }, filterData)

                // Update state to trigger a re-render.
                // Clear any errors, and turn off the loading indiciator.
                this.setState({
                    posts,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                // Something went wrong. Save the error in state and re-render.
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return (
            <div>
                Uh oh: {this.state.error.message}
            </div>
        );
    }

    renderPosts() {
        if (this.state.error) {
            return this.renderError();
        }

        return (

            <div>
                {this.state.posts.map((post, index) =>
                    <Flex align="center" key={index}>
                        <Box col={3} lg={3} sm={3} px={3}>


                            <QuakeMap init_lat={post.geometry.coordinates[1]} init_lng={post.geometry.coordinates[0]}/>
                        </Box>
                        < Box col={3} lg={3} sm={9} px={3}>
                            <Panel>
                                <PanelHeader>
                                    Magnitude
                                    <Space auto/>
                                    <NavItem small children={post.properties.magnitude}/>
                                </PanelHeader>
                                <Flex align='baseline'>
                                    <Tooltip
                                        title='Oh hello! You found the Tooltip!'>
                                        <Text small children='Depth'/>
                                    </Tooltip>
                                    <Space auto/>
                                    <Text small children={post.properties.depth}/>
                                </Flex>
                                <Divider />
                                <Flex align='baseline'>
                                    <Text small children='locality'/>
                                    <Space auto/>
                                    <Text small children={post.properties.locality}/>
                                </Flex>
                                <Divider />
                                <Flex align='baseline'>
                                    <Text small children='NZST'/>
                                    <Space auto/>
                                    <Text small children={post.properties.time}/>
                                </Flex>

                            </Panel>
                        </Box>
                    </Flex>
                )}
            </div>

        );
    }

    render() {
        return (
            <div>
                <h1>{`${this.props.subreddit}`}</h1>

                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        );
    }
}

