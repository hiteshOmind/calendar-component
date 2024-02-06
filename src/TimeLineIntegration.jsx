import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import TimelineComponent from './TimelineComponent'

function TimeLineIntegration({TimeLineData, canExpand = true}) {
  return (
    <Box display={"flex"} flexDir={"column"} gap={"24px"}>

        <Box display={"flex"} gap={"4px"} flexDir={"column"}>
            <Text fontSize={16} color={"#344054"} fontWeight={500}>
                Activity
            </Text>
            <Text fontSize={14} fontWeight={400} color={"#667085"}>
            This contains user activities across multiple sources and gets updated dynamically with event and its respective attributes.
            </Text>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>

            <Box>
                search component here
            </Box>
            <Box display={"flex"} gap={"16px"} alignItems={"center"} >
                <Box>month</Box>
                <Box>source</Box>
            </Box>

        </Box>

        <Box>
            <TimelineComponent canExpand={true} TimeLineData={TimeLineData}/>
        </Box>

    </Box>
  )}


export default TimeLineIntegration