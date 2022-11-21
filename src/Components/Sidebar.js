import React,{ReactNode, useState} from 'react';
import {IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,SidebarContent,Heading,Divider,Wrap,WrapItem
} from "@chakra-ui/react"
import{ HiInformationCircle,
    HiShieldCheck,
    HiGlobeAlt,
    HiNewspaper,
    HiSupport,
    HiChevronDown,
    HiMenu,} from 'react-icons/hi';
import { IconType } from 'react-icons/lib';
import { ReactText } from 'react';
import Sideitems from './Sideitems';

export default function Sidebar(){
    const [navSize, changeNavSize]= useState("large")
    return(
        // {------------MAIN SIDEBAR-------------}
        
        <Wrap>
        <WrapItem>
            <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="0.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "210px"}
            flexDir="column"
            justifyContent="space-between"
            >
            
                {/* {------------CONTENTS IN SIDE BAR------------} */}
                <Flex 
                p="5%"
                flexDir='column'
                alignItems="flex-start"
                as="nav">
                    <IconButton 
                    background="none"
                    mt='5'
                    _hover={{ background: 'none'}}
                    icon={<HiMenu />}
                    onClick={() => {
                        if(navSize == "small")
                        changeNavSize("large")
                        else
                        changeNavSize("small")
                    }} 
                    />
                    <Sideitems navSize={navSize} icon={HiInformationCircle} title="Personal Information" />
                    <Sideitems navSize={navSize} icon={HiShieldCheck} title="Privacy & Security"/>
                    <Sideitems navSize={navSize} icon={HiGlobeAlt} title="Acceptance Policy"/>
                    <Sideitems navSize={navSize} icon={HiNewspaper} title="My Plans"/>
                    <Sideitems navSize={navSize} icon={HiSupport} title="Help & Support"/>
                </Flex>
                {/* {DOWN PROFILE} */}

                <Flex 
                p='5%'
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb='4'>

                <Divider display={navSize == "small" ? "none" : "flex"} />
                {/* {AVATAR AND HEADING IN TEXT TEXT } */}
                <Flex mt="4" align='center' >
                    <Avatar size='sm' src="logo1.png"/>
                    <Flex flexDir="column" ml='4' display={navSize == "small" ? "none" : "flex"} >
                        <Heading as="h3" size='sm'>Anusha Jogi</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
                </Flex>

            </Flex>
        </WrapItem>
        <WrapItem>
        
        </WrapItem>
        </Wrap>

    
    )
}