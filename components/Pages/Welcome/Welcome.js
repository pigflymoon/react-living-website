import React from 'react';
import axios from 'axios';
import {Flex, Box} from 'reflexbox'
import {Panel, PanelHeader, Text, PanelFooter, LinkBlock, Heading} from 'rebass';
import './Welcome.scss';

class FetchDemo extends React.Component {
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
        axios.get(`https://api.geonet.org.nz/${this.props.subreddit}/geonet`)
            .then(res => {
                console.log(res.data.feed);
                // Transform the raw data by extracting the nested posts
                const posts = res.data.feed.map(function (item) {

                    if (item.published) {
                        item.published = item.published.slice(0, 10).replace(/-/g, "-")
                    }

                    return item;
                });

                console.log(posts);
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
                <h1>{`${this.props.subreddit}`}</h1>

                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        );
    }
}


export default class Welcome extends React.Component {
    render() {
        return (
            <div className="bg-white">
                <FetchDemo subreddit="news"/>
            </div>
        )
    }
}