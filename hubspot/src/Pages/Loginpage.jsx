import { Box ,Image} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Loginpage = () => {
  return (
    <div> <Box pl={"100px"} display={"flex"} justifyContent={"space-between"} px="1" alignItems={"center"} > 

    <Box w={"200px"} h="100px" >
      <Image w={"100%"} src={"https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg"}/>
    </Box >
    <Box >Don't Have an account?<Link style={{color:"#4299e1"}} to={"/register"}>Sign up</Link>.</Box>
  </Box>
  <Login/>
  </div>
  )
}

export default Loginpage