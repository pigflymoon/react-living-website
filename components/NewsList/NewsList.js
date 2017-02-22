import React from 'react'
import {Flex, Box} from 'reflexbox'
import {Heading, LinkBlock, Panel, PanelHeader, Text, PanelFooter} from 'rebass';

const NewsList = ({ }) => (

    <Flex
        align='center'
        wrap
    >
        <Box sm={3} p={2}>
            <Panel theme='success'>
                <PanelHeader>
                    01 September
                </PanelHeader>
                <Text children='This is the Panel body'/>
                <PanelFooter>
                    <Text small children='PanelFooter is a good place for feet'/>
                </PanelFooter>
            </Panel>
            <Panel theme='success'>
                <PanelHeader>
                    01 September
                </PanelHeader>
                <Text children='This is the Panel body'/>
                <PanelFooter>
                    <Text small children='PanelFooter is a good place for feet'/>
                </PanelFooter>
            </Panel>
            <Panel theme='success'>
                <PanelHeader>
                    01 September
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

