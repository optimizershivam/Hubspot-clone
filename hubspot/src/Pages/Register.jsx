import { Box } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import Signup from './Signup'
import { Link } from 'react-router-dom'
const Register = () => {
  return (

    <div> <Box pl={"100px"} display={"flex"} justifyContent={"space-between"} px="60px" alignItems={"center"} > 

    <Box w={"200px"} h="100px" ><Link to="/">
    <Image w={"70%"} src={"https://www.logo.wine/a/logo/HubSpot/HubSpot-Logo.wine.svg"}/>
</Link>
    </Box >
    <Box >Have an account?<Link style={{color:"#4299e1"}} to={"/login"}>Sign in</Link>.</Box>
  </Box>
  <Signup></Signup>
  </div>
  )
}

export default Register