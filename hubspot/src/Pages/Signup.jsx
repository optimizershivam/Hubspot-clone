import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Editable,
  EditableTextarea,
  EditablePreview,
  Container,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { Link as RouterLink} from 'react-router-dom';
import { useState,useReducer } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {register} from "../Redux/AuthReducer/action"
// import  "./Signup.module.css"
import { Image } from '@chakra-ui/react'
import image1 from "../assets/image1.png"

function reducer(state,action){
  switch(action.type){
    case "name":
       return {
        ...state,
        name:action.payload
       }
    case "email":
       return {
        ...state,
        email:action.payload
       }
    case "password":
       return {
        ...state,
        password:action.payload
       }
    case "username":
       return {
        ...state,
        username:action.payload
       }
    case "mobile":
       return {
        ...state,
        mobile:action.payload
       }
    case "description":
       return {
        ...state,
        description:action.payload
       }
       default:
        return state
  }
}
const initialstate={
  name:"",
  email:"",
  password:"",
  username:"",
  mobile:0,
  description:"",
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [state,setter]=useReducer(reducer,initialstate)
  console.log(state)
const navigate=useNavigate()
const dispatch=useDispatch()
const toast = useToast()
const loading=useSelector(state=>state.AuthReducer.isLoading)

const signuphandler=()=>{
  dispatch(register(state)).then((r)=>{
    // if(r===REGISTER_SUCCESS)
    console.log(r)
    if(r.payload.message === "Registration failed, user already exists")
    { 
      toast({
        title: 'Please fill the details.',
        description: "Input Feilds are required .",
        status: 'error',
        duration: 2500,
        isClosable: true,
        position:"top"
      })
     } else if (r.payload.message === "Registration Success")
      {
        toast({
          title: 'Account created.',
          description: "We've created your account for you. Please Login",
          status: 'success',
          duration: 2500,
          isClosable: true,
          position:"top"
        })
        setTimeout(()=>{ navigate("/login",{replace:true})},1000)
      }
    
  })
}
  return (
    <Container minWidth={"6xl"}>
   
    <Flex >
      <HStack spacing={"150px"}>
    <Flex
      minH={'100vh'}
      width={"lg"}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
          Create your free account
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool Products & features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input style={{border:"none",outline:"none",borderBottom:"2px solid #01a4bd", paddingBottom:"10px"}} type="text" value={state.name} onChange={(e)=>setter({type:'name',payload:e.target.value})}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="userName" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input  style={{border:"none",outline:"none",borderBottom:"2px solid #01a4bd", paddingBottom:"10px"}} type="text"  value={state.username} onChange={(e)=>setter({type:'username',payload:e.target.value})}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input style={{border:"none",outline:"none",borderBottom:"2px solid #01a4bd", paddingBottom:"10px"}} type="email" value={state.email} onChange={(e)=>setter({type:'email',payload:e.target.value})}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input  style={{border:"none",outline:"none",borderBottom:"2px solid #01a4bd", paddingBottom:"10px"}}type={showPassword ? 'text' : 'password'} value={state.password} onChange={(e)=>setter({type:'password',payload:e.target.value})}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
             <Box>
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile</FormLabel>
                  <Input  style={{border:"none",outline:"none",borderBottom:"2px solid #01a4bd", paddingBottom:"10px"}} type="number" value={state.mobile} onChange={(e)=>setter({type:'mobile',payload:e.target.value})}/>
                </FormControl>
              </Box>
              <Box>
                <Editable defaultValue='Description'>
                <EditablePreview />
                  <EditableTextarea value={state.description} onChange={(e)=>setter({type:'description',payload:e.target.value})} />
                </Editable>
              </Box>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={signuphandler} isLoading={loading}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
<Flex width={"lg"}>
  <Stack spacing={"100px"}>
    <Box  mt={'-88PX'} >
    <Heading align={'center'} >
                Already a user?<RouterLink to="/login" style={{color:"#4299e1"}} > Login</RouterLink>
              </Heading>
    </Box>
    <Box  >
      
      <Image src={image1}></Image>

    </Box>
  </Stack>

</Flex>
</HStack>
    </Flex>
    </Container>
  );
  
}