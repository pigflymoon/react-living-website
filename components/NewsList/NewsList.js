import React from 'react'
import {Flex, Box} from 'reflexbox'
import {Heading, LinkBlock, Panel, PanelHeader, Text, PanelFooter} from 'rebass';

const NewsList = ({toggle}) => (

    <Flex
        align='center'
        wrap
        gutter={2}>
        <Box sm={6} p={2}>
            <Panel theme='success'>
                <PanelHeader>
                    PanelHeader
                </PanelHeader>
                <Text children='This is the Panel body'/>
                <PanelFooter>
                    <Text small children='PanelFooter is a good place for feet'/>
                </PanelFooter>
            </Panel>
        </Box>
    </Flex>

)

export default NewsList

