import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Forget from './Forget'

const Forgetpage = () => {
  return (
    <div> <Box pl={"100px"} display={"flex"} justifyContent={"space-between"} px="60px" alignItems={"center"} > 

    <Box w={"200px"} h="100px" >
    <Image w={"70%"} src={"https://www.logo.wine/a/logo/HubSpot/HubSpot-Logo.wine.svg"}/>

    </Box >
    <Box >Don't Have an account?<Link style={{color:"#4299e1"}} to={"/register"}>Sign up</Link>.</Box>
  </Box>
  <Forget/>
  </div>
  )
}

export default Forgetpage