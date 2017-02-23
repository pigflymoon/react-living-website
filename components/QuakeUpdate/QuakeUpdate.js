import React from 'react';
import axios from 'axios';
import {Flex, Box} from 'reflexbox'
import {Panel, PanelHeader, Text, PanelFooter, LinkBlock, Heading} from 'rebass';


export default class QuakeUpdate extends React.Component {
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
        //https://api.geonet.org.nz/quake?MMI=3
        fetch("https://api.geonet.org.nz/quake?MMI=3").then(response => response.json())
            .then(res => {
                var location = {};
                const posts = res.features.map(function (item) {

                    if (item.geometry.coordinates) {
                        let latlng = item.geometry.coordinates;
                        location.latlng = latlng.toString().split(',').reverse().join(',');
                    }

                    return location;
                })
                // console.log("posts " + posts)
            }).then(data => console.log(data))
            .catch(e => console.log("Oops, error", e))
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
                        <Panel theme='success' key={index}>
                            <PanelHeader>
                                {post.published}
                            </PanelHeader>
                            <PanelFooter>
                                <LinkBlock
                                    href={post.link}
                                    is="a"
                                >
                                    <Text children={post.title}/>
                                </LinkBlock>
                            </PanelFooter>
                        </Panel>
                    )}

                </Box>
            </Flex>

        );
    }

    render() {
        return (
            <div>
                <h1>Quakes</h1>

                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        );
    }
}

