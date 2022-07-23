import React from 'react'
import {Flex,Text,Button,Heading, useToast, useColorModeValue} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Academycard = ({e}) => {
  const toast = useToast()
  const navigate = useNavigate()
  return (
    <Flex direction="column" w="250px"  textAlign="left" p="55px 15px 15px 15px" backgroundColor="white"  position="relative" bg={useColorModeValue('#f5f8fa', 'gray.800')}
    boxShadow={'2xl'}
    rounded={'lg'}>
        <Heading size="md" mb="40px">{e.heading}</Heading>
        <Heading fontSize="13px" mb="10px">{e.short}</Heading>
        <Flex fontSize="11px" fontWeight="650" mb="20px" gap="4px"> <Text >{e.length} lessons </Text><Text color="#40baa9">{e.hour}</Text></Flex>
       
        <Text fontSize='12px'>{e.detail}</Text>
        <a href={e.href} target="_blank" rel="noreferrer"><Text fontSize='12px' color="#00a4bd" fontWeight="650" mb="60px">Read more</Text></a>
        <Button position="absolute" bottom="5" color="white" backgroundColor="#33475b" onClick={()=>{toast({
      title: 'Course Selected Successfully.',
      description: "Congratulations, You are enrolled in this course now .",
      status: 'warning',
      duration: 1500,
      isClosable: true,
      position:"top"
    })
    setTimeout(()=>{ navigate("/",{replace:true})},1500)}} 

    
    _hover={{
      background: "#ff5c35",
    color: "white",
    }}>{e.button}</Button>
      </Flex>
  )
}

export default Academycard
