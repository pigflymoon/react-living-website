import React from 'react'
import {Flex, Box} from 'reflexbox'
import {
    Section,

    Text,

    Panel,
    PanelHeader
} from 'rebass';
import './Category.scss';

const Category = ({toggle}) => (
    <Section>
        <Flex
            align='center'
            wrap
            gutter={2}>
            <Box px={2} sm={6}>
                <Panel m={0} theme='primary'>
                    <PanelHeader>
                        Property
                    </PanelHeader>
                    <Text>
                        A flat or curved component, typically rectangular, that forms or is set into the surface of a
                        door, wall, or ceiling
                    </Text>

                </Panel>
            </Box>
            <Box px={2} sm={6}>
                <Panel m={0} theme='primary'>
                    <PanelHeader>
                        Motors
                    </PanelHeader>
                    <Text>
                        A flat or curved component, typically rectangular, that forms or is set into the surface of a
                        door, wall, or ceiling
                    </Text>

                </Panel>
            </Box>
            <Box px={2} sm={6}>
                <Panel m={0} theme='primary'>
                    <PanelHeader>
                        Health and Beauty
                    </PanelHeader>
                    <Text>
                        A flat or curved component, typically rectangular, that forms or is set into the surface of a
                        door, wall, or ceiling
                    </Text>

                </Panel>
            </Box>
            <Box px={2} sm={6}>
                <Panel m={0} theme='primary'>
                    <PanelHeader>
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
