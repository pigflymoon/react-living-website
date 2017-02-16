import React from 'react'
import {Flex, Box} from 'reflexbox'
import {
    Section,

    Text,

    Panel,
    PanelHeader
} from 'rebass';
import './Category.scss';


const primary = '#ec96a4'
// const primary = '#ec96a4'
// const primary = '#ec96a4'
const Category = ({toggle}) => (

    <Section>
        <Flex
            align='center'
            wrap
            gutter={2}>
            <Box px={2} sm={6}>
                <Panel m={0}>
                    <PanelHeader  style={{backgroundColor:"#eae2d6"}}>
                        Property
                    </PanelHeader>
                    <Text>
                        A flat or curved component, typically rectangular, that forms or is set into the surface of a
                        door, wall, or ceiling
                    </Text>

                </Panel>
            </Box>
            <Box px={2} sm={6}>
                <Panel m={0} >
                    <PanelHeader  style={{backgroundColor:"#d5c3aa"}}>
                        Motors
                    </PanelHeader>
                    <Text>
                        A flat or curved component, typically rectangular, that forms or is set into the surface of a
                        door, wall, or ceiling
                    </Text>

                </Panel>
            </Box>
            <Box px={2} sm={6}>
                <Panel m={0} >
                    <PanelHeader  style={{backgroundColor:"#867666"}}>
                        Health and Beauty
                    </PanelHeader>
                    <Text>
                        A flat or curved component, typically rectangular, that forms or is set into the surface of a
                        door, wall, or ceiling
                    </Text>

                </Panel>
            </Box>
            <Box px={2} sm={6}>
                <Panel m={0} >
                    <PanelHeader  style={{backgroundColor:"#e1b80d"}}>
                        Food and Drink
                    </PanelHeader>
                    <Text>
                        A flat or curved component, typically rectangular, that forms or is set into the surface of a
                        door, wall, or ceiling
                    </Text>

                </Panel>
            </Box>
        </Flex>

    </Section>
)

export default Category
