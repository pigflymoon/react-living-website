import React from 'react';
import App from '../components/App';
import style from '../components/Layout.css';
import {Flex, Box} from 'reflexbox';
import {Avatar} from 'rebass';
import {CardImage} from 'rebass';

export default () => {
    return (
        <div>
            <App />
            <Flex
                align="center"
                justify="space-between"
            >
                <Box className={style.Box}
                     auto
                     p={3}
                >
                    Box auto
                    <Avatar
                        circle
                        size={48}
                        src="http://lorempixel.com/64/64/cats"
                    />
                </Box>
                <Box className={style.Box} p={3}>
                    Box
                </Box>
            </Flex>

            <Flex wrap>
                <Box
                    col={12}
                    lg={3}
                    sm={6}
                >
                    <div
                        style={{maxWidth: 192}}>
                        <CardImage src="http://placehold.it/320/08e/fff"/>
                    </div>
                </Box>
                <Box
                    col={12}
                    lg={3}
                    sm={6}
                >
                    <div
                        style={{maxWidth: 192}}>
                        <CardImage src="http://placehold.it/320/08e/fff"/>
                    </div>
                </Box>
                <Box
                    col={12}
                    lg={3}
                    sm={6}
                >
                    <div
                        style={{maxWidth: 192}}>
                        <CardImage src="http://placehold.it/320/08e/fff"/>
                    </div>
                </Box>
                <Box
                    col={12}
                    lg={3}
                    sm={6}
                >
                    <div
                        style={{maxWidth: 192}}>
                        <CardImage src="http://placehold.it/320/08e/fff"/>
                    </div>
                </Box>
            </Flex>
            <Flex>
                <div
                    style={{maxWidth: 192}}>
                    <CardImage src="http://placehold.it/320/08e/fff"/>
                </div>
                <div
                    style={{maxWidth: 192}}>
                    <CardImage src="http://placehold.it/320/08e/fff"/>
                </div>
                <div
                    style={{maxWidth: 192}}>
                    <CardImage src="http://placehold.it/320/08e/fff"/>
                </div>
                <div
                    style={{maxWidth: 192}}>
                    <CardImage src="http://placehold.it/320/08e/fff"/>
                </div>
            </Flex>
        </div>
    );
};