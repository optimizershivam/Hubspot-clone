import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Container,
  HStack,
  Image
} from '@chakra-ui/react';
import { useSelector,useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { login } from '../Redux/AuthReducer/action';
import image1 from "../assets/image1.png"

export default function Login() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const isLoading=useSelector(state=>state.AuthReducer.isLoading)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const toast = useToast()

  const loginhandler=()=>{
    if(username && password){
      const params={
        username,password
      }
      dispatch(login(params)).then(res=>{
        // if(res===LOGIN_SUCCESS){
          console.log(res)
          if(res.type === "LOGIN_SUCCESS")
          { 

            toast({
              title: 'Logged in Successfull.',
              description: "Welcome",
              status: 'success',
              duration: 2000,
              isClosable: true,
              position:"top"
            })
            navigate("/")

           } else 
            {
              toast({
                title: 'Login Failed.',
                description: "Please enter correct Details.",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:"top"
              })
            }
          
        

        
      })
    }
    else{
      toast({
        title: 'Plz fill the details.',
        description: "Username and Password is Required",
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position:"top-left"
      })
    }
  }
  return (
    <Container minWidth={"6xl"}>
   
    <Flex >
      <HStack spacing={"150px"}>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>Products</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input style={{border:"none",outline:"none",borderBottom:"2px solid #01a4bd", paddingBottom:"5px"}} type="text" value={username} onChange={e=>setusername(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input style={{border:"none",outline:"none",borderBottom:"2px solid #01a4bd", paddingBottom:"5px"}} type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <RouterLink style={{color:"#4299e1"}} to="/forget">Forgot password?</RouterLink>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={loginhandler} isLoading={isLoading}>
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>

              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>



    <Flex width={"lg"}>
  <Stack spacing={"50px"}>
    <Box  mt={'35px'} >
    <Heading fontSize={'3xl'}align={'center'} >
    Don't have an account?<RouterLink to="/register" style={{color:"#4299e1"}} > Signup</RouterLink>
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