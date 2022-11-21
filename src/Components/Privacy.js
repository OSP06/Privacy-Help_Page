import React from 'react'

import {Flex,Heading,Text,Icon,Box,Container,Stack,Spacer,Divider,Switch,FormControl,FormLabel} from '@chakra-ui/react'
import {} from '@chakra-ui/icons'

export default function Privacy(icon,title,navSize) {
  return (
    <>
    {/* {HEADING} */}
    {/* <Divider orientation="vertical"  /> */}
    <Flex h='auto' w='auto' bg="gray.800">
      <Container bg='white' w="auto" h='auto'pt="30px" >
        <Heading pl="40px" color="blue.700" >Privacy & Security</Heading>

        {/* {PRIVATE ACCOUNT} */}

        <Box h='8vh' w='150vh' bg="white" mt="10px" pt="20px" borderRadius="full" >
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='private_account-alerts' mb='0' pl="40px" fontSize="xl">
              Private Account
            </FormLabel>
            <Spacer/>
            <Switch size="lg" id='Private Account' />
          </FormControl>
          </Box>
        <Divider orientation='horizontal' />

        {/* {CHANGE PASSWORD} */}

        <Spacer/>
        <Box h='8vh' w='150vh' bg="white" mt="10px" pt="20px" borderRadius="full" >
          <FormControl display='flex' alignItems='center'>
            <FormLabel mb='0' pl="40px" fontSize="xl">
              Change Password
            </FormLabel>
            {/* <Spacer/>
            <Switch size="lg" id='Private Account' /> */}
          </FormControl>
          </Box>
        <Divider orientation='horizontal' />

        {/* {PASSWORD RECOVERY QUESTIONS} */}

        <Spacer/>
        <Box h='8vh' w='150vh' bg="white" mt="10px" pt="20px" borderRadius="full" >
          <FormControl display='flex' alignItems='center'>
            <FormLabel mb='0' pl="40px" fontSize="xl">
              Password Recovery Questions
            </FormLabel>
            {/* <Spacer/>
            <Switch size="lg" id='Private Account' /> */}
          </FormControl>
          </Box>
        <Divider orientation='horizontal' />

        {/* {LOGIN ACTIVITY} */}

        <Spacer/>
        <Box h='8vh' w='150vh' bg="white" mt="10px" pt="20px" borderRadius="full" >
          <FormControl display='flex' alignItems='center'>
            <FormLabel mb='0' pl="40px" fontSize="xl">
              Login Activity
            </FormLabel>
            {/* <Spacer/>
            <Switch size="lg" id='Private Account' /> */}
          </FormControl>
          </Box>
        <Divider orientation='horizontal' />

        {/* {RECRUITERS SEEING YOU.} */}

        <Spacer/>
        <Box h='8vh' w='150vh' bg="white" mt="10px" pt="20px" borderRadius="full" >
          <FormControl display='flex' alignItems='center'>
            <FormLabel mb='0' pl="40px" fontSize="xl">
              Allow Recruiters to see your Profile photo
            </FormLabel>
            <Spacer/>
            <Switch size="lg" id='Allow' />
          </FormControl>
          </Box>
        <Divider orientation='horizontal' />

        {/* {RECRUITERS SEEING UR Email} */}

        <Spacer/>
        <Box h='8vh' w='150vh' bg="white" mt="10px" pt="20px" borderRadius="full" >
          <FormControl display='flex' alignItems='center'>
            <FormLabel mb='0' pl="40px" fontSize="xl">
              Allow Recruiters to see your Email
            </FormLabel>
            <Spacer/>
            <Switch size="lg" id='Allow' />
          </FormControl>
          </Box>
        <Divider orientation='horizontal' />

        {/* {RECRUITERS SEEING UR MOBILE NO.} */}

        <Spacer/>
        <Box h='8vh' w='150vh' bg="white" mt="10px" pt="20px" borderRadius="full" >
          <FormControl display='flex' alignItems='center'>
            <FormLabel mb='0' pl="40px" fontSize="xl">
              Allow Recruiters to see your Mobile No.
            </FormLabel>
            <Spacer/>
            <Switch size="lg" id='Allow' />
          </FormControl>
          </Box>
        <Divider orientation='horizontal' />

        {/* {DARK MODE} */}

        {/* {RECRUITERS SEEING UR MOBILE NO.} */}

        <Spacer/>
        <Box h='8vh' w='150vh' bg="white" mt="10px" pt="20px" borderRadius="full" >
          <FormControl display='flex' alignItems='center'>
            <FormLabel mb='0' pl="40px" fontSize="xl">
              Dark Mode
            </FormLabel>
            <Spacer/>
            <Switch size="lg" id='Mode' />
          </FormControl>
          </Box>
        <Divider orientation='horizontal' />





      </Container>
    </Flex>
    </>
  )
}
