import { Icon } from '@chakra-ui/icons'
import React from 'react'
import{ HiMail, HiPhone} from 'react-icons/hi'
import{FaHeadphonesAlt} from 'react-icons/fa' 
import{MdFeedback} from 'react-icons/md'
import {Flex,Heading,Container,Text,Spacer,HStack,Box,FormControl,Stack,Textarea,Button,
    FormLabel,Input} from "@chakra-ui/react"

export default function Help() {
  return (
    <>
    <Flex h='auto' w='150vh' bg="gray.800">
      <Container bg='white' maxW="container.xl" h='auto'pt="10" >
        <Stack direction={['column', 'row']} spacing="20vh" >
        <Box p="5">
            <Stack isInline spacing="2vh">
                <Icon as={FaHeadphonesAlt} w={12} h={12} color='blue.700' pt="2"/>
                <Heading color="blue.700" pt="1">Help & Support</Heading>
            </Stack>
            <Text ml="20">24/7 customer service</Text>
        </Box>
        <Box pt="8vh">
        <Stack isInline spacing="3vh">
        <Icon as={HiPhone} w={7} h={7} color='Black'/><Text>Call</Text>
        <Icon as={HiMail} w={7} h={7} color='Black'/><Text>Mail</Text>
        <Icon as={MdFeedback} w={7} h={7} color='Black'/><Text>Send Feedback</Text>
        </Stack>
        </Box>
        </Stack>

        <Spacer/>
        
        <Box h='auto' w='auto' bg="white" mt="5" pt="10" borderRadius="auto" >
            <FormControl isRequired p="3">
                    <FormLabel>Your name:</FormLabel>
                    <Input placeholder='First name' w="50vh" />
            </FormControl>

            <FormControl isRequired p="3">
                
                    <FormLabel>Registered Email id:</FormLabel>
                    <Input placeholder='email' w="50vh" />
              
            </FormControl>
         

           
            <FormControl isRequired p="3">
                
                    <FormLabel>Mobile Number:</FormLabel>
                    <Input type='tel' placeholder='MobileNo.' w="50vh" />
               
            </FormControl>
           
            
            <FormControl isRequired p="3">
               
                    <FormLabel>Problem Description:</FormLabel>
                    <Textarea placeholder='Description' w="50vh" />
              
            </FormControl>
            <Box pl="17vh">
            <Button bg='blue.100' size='lg'><Icon as={HiMail} w={8} h={8} color='black' pr="2" />Send</Button>
            </Box>

          </Box>
        
    </Container>
    </Flex>
    </>
  )
}
