import React,{useState} from 'react'
import {Box,Flex,Text,Image,Heading, Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Academycard from './Academycard'
import {academy} from "./academyhelper"
import { bot } from './academyhelper'

const Data=({children})=>{
  return(
       <Flex alignItems="center" gap="1px">
          <Text>{children}</Text><ChevronDownIcon fontSize="30px"  color="#00a4bd"/>
        </Flex>
  )
}

const Learn=({head,lorem})=>{
  return(
     <Box>
          <Heading fontSize="21px" mb="15px">{head} </Heading>
          <Text fontSize="18px">{lorem}</Text>
        </Box>
  )
}

const Academy = () => {

  return (
    <>

<Box pl={"100px"} display={"flex"} justifyContent={"space-between"} px="60px" alignItems={"center"} > 

<Box w={"200px"} h="100px" >
  <Image w={"70%"} src={"https://www.logo.wine/a/logo/HubSpot/HubSpot-Logo.wine.svg"}/>
</Box >
<Box >Courses
  <Button size={"5px"}> <ChevronDownIcon bg={"none"} /></Button>
</Box>
</Box>

<Flex m={0} p={0} >
  <Image src='https://i.ibb.co/TbjbHQG/Screenshot-2022-07-23-163725.png' w={"100%"}/>

  
</Flex>
    <Box backgroundColor="#eaf0f6" pb="5px">

      <Flex backgroundColor="#33475b" color="white" justifyContent="space-between" px="85px" py="25px" fontWeight="700">

        <Data>Categories</Data>
        <Data>Content Type</Data>
        <Data>Duration</Data>
        <Data>HubSpot Software</Data>
        <Data>Levels</Data>
        <Data>Language</Data>

      </Flex>

      <Box  width="90%"  margin="40px auto" display="grid" gridTemplateColumns="repeat(4,1fr)" gap="25px">
        {academy.map((e)=>{
          return <Academycard key={e.heading} e={e}/>
        })}
      </Box>
      
    </Box>

    <Flex direction="column" py="50px ">

      <Flex direction="column">
        <Box w="50px" h="50px" margin="20px auto" > <Image w="100%" src='https://cdn2.hubspot.net/hubfs/53/HubSpot_Logos/HSLogo_sprocket_color_png.png'/></Box>
       
        <Heading mb="30px" textAlign={"center"}>Why learn with HubSpot Academy?</Heading>
      </Flex>

      <Flex w="80%" margin="auto" textAlign="left" gap="40px">

       {bot.map((e)=>{
        return <Learn key={e.head} head={e.head} lorem={e.lorem} />
       })}

      </Flex>

    </Flex>

    <Box  h={"200px"} bg={"#3d5062"} textAlign={"center"} >
  <Text color={"white"} mt={"3.5rem"}> Copyright © 2022 HubSpot, Inc.</Text>
<Box display={"flex"} justifyContent={"center"}>


<Text color={"white"} p={"1rem"} >
Legal Stuff
</Text>
<Text color={"white"}  p={"1rem"}>
Privacy Policy 
</Text>
</Box>

 </Box>
    </>
  )
}

export default Academy