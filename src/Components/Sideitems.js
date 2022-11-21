import React from 'react'
import {Flex,
Text,
Icon,
Link,
Menu,
MenuButton,
MenuList} from '@chakra-ui/react'
import Privacy from './Privacy'
import SideHoverbox from './SideHoverbox'


export default function Sideitems({navSize,title,icon,active}) {
  return (
    <Flex mt="30" flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"} >
        <Menu placement="right">
            <Link 
            backgroundColor={active && "#BEE3F8"}
            p='3'
            borderRadius={8}
            _hover={{textDecor: 'none', backgroundColor:'#BEE3F8'}}
            w={navSize == "large" && "100%"} >
            <MenuButton w="100%">
                <Flex>
                    <Icon as={icon} fontSize="xl" color={active ? "#171923" : "gray.900"} />
                    <Text ml="5" display={navSize == "small" ? "none" : "flex"} >{title}</Text>
                </Flex>
            </MenuButton>
            </Link>
            <MenuList 
            py="0" border="none" w="20" h="10" ml="5"
            >
                {/* <SideHoverbox title={title} icon={icon}  /> */}
            </MenuList>
    
        </Menu>
    </Flex>
  )
}
