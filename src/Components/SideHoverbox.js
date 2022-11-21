import React from 'react'
import{Flex,Heading,Text,Icon} from '@chakra-ui/react'

export default function SideHoverbox( icon,title) {
  return (
   <>
   <Flex pos="absolute" mt="calc(100px-7.5px)" ml="-10px" w='0' h="0" borderTop="10px solid transparent" borderBottom="5px solid transparent" borderRight="10px solid #BEE3F8" />
   <Flex 
    h='50'
    w='30'
    flexDir='column'
    alignItems="center"
    justify="center"
    bg="#BEE3F8"
    borderRadius="10px"
    color="#fff"
    textAlign="center">

        {/* <Icon as={icon} fontSize="2xl" mb="4" />
        <Heading size="md" fontWeight="normal">{title}</Heading> */}

   </Flex>
   
   </>
  )
}
