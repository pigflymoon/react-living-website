import React from 'react';
import App from '../components/App';
import style from '../components/Layout.css';
import {Flex, Box} from 'reflexbox';
import {Avatar} from 'rebass';

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
        </div>
    );
};