import React from 'react'
import {Flex, Heading,Box,Button,ButtonGroup,Spacer,Container,Image,Stack,Text,IconButton,HStack,Icon} from '@chakra-ui/react'
import{BiBell,BiExit} from 'react-icons/bi'


export default function Navbar() {
  return (
    <>
    <Flex h='10vh' minWidth='max-content' alignItems='center' gap='2' bg='#3386D3'>
      <Stack direction={['column', 'row']} spacing='24px' >
        <Box>
          <Image src="logo1.png" w='10vh' h='10vh' /> 
        </Box>
        <Box w='100vh' h='10vh'> 
        <Heading as='h2' size='xl' color="white "> iQuizUAnswer </Heading>
        <Text as="i" pl='20' color="white"> Let the Job find You.</Text>
        </Box>
        </Stack>
        <Spacer/>
        <HStack spacing='25px' pr='20px'>
          <Icon as={BiBell} w={8} h={8} color='white'_hover={{textDecor: 'none', backgroundColor:'#718096'}} borderRadius="full" />
          <Icon as={BiExit} w={8} h={8}  color='white' _hover={{textDecor: 'none', backgroundColor:'#718096'}}  />
        </HStack>
    </Flex>
    </>
    
  )
}



