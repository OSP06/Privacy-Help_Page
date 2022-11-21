import React from 'react'
import {Flex, Heading,Box,Button,ButtonGroup,Spacer,Container,Wrap,WrapItem} from '@chakra-ui/react'

import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Privacy from './Components/Privacy'
import Help from './Components/Help'

export default function App() {
  return (
    <>
    <Navbar/>
    <Wrap>
    <WrapItem>
    <Sidebar />
    </WrapItem>
    <WrapItem>
      <Help/>
    </WrapItem>

    </Wrap>

    
    </>
  )
}
