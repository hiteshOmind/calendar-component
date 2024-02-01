import { Avatar, Box, Card, Text } from '@chakra-ui/react'
import React from 'react'

function LastPurchasedCard({productName, orderDate , imgUrl = ""}) {
  return (
    <Card boxShadow={"none"} border={"1px solid rgba(234, 236, 240, 1)"}>
        <Box display={"flex"} gap={"12px"} padding={"12px 16px 12px 16px"}>
            <Box>
                <Avatar height={"40px"} borderRadius={"4px"} width={"40px"} src={imgUrl}>

                </Avatar>
            </Box>
            <Box>
                <Text fontSize={"14px"} fontWeight={500} color={"rgba(16, 24, 40, 1)"}>{productName}</Text>
                <Text fontSize={"13px"} fontWeight={500} color={"rgba(102, 112, 133, 1)"}>Order ID • {orderDate}</Text>
            </Box>
        </Box>
    </Card>
  )
}

export default LastPurchasedCard