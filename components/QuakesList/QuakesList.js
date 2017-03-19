import React from 'react';
import axios from 'axios';
import {Flex, Box} from 'reflexbox'
import{
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
                        array.push(value);
                    }

                    return array;
                }, filterData)

                console.log(posts)

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
            <Flex align='center' wrap>
                <Box sm={3}>
                    {this.state.posts.map((post, index) =>
                        <Panel m={0} theme='success'>
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
                    )}
                </Box>

            </Flex>

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

