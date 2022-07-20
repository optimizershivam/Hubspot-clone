import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    useToast,
    FormHelperText,
    FormErrorMessage,
    
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
 
  
  export default function Forget() {
    const [isLoading,setIsloading] = useState(false)
    const toast = useToast()
    const [input, setInput] = useState('')
    const isError = input === ''
    const  navigate = useNavigate()

  const handleInputChange = (e) => setInput(e.target.value)
    return (
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}>
            You&apos;ll get an email with a reset link
          </Text>
          <FormControl id="email" isRequired="true" isInvalid={isError}>
            <Input isRequired ="true"
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange={handleInputChange}
            />

{!isError ? (
        <FormHelperText>
          Enter your Registered email here.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
          </FormControl>
          <Stack spacing={6}>
            {isError?(<Button bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }} disabled>Request Reset</Button>) : (
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={()=>{
                setIsloading(true)
                setTimeout(() => {
                    setIsloading(false)
                    toast({
                        title: 'Link Sent Successfully.',
                        description: "Reset Link has been Sent to Your Registered Email.",
                        status: 'info',
                        duration: 1500,
                        isClosable: true,
                        position:"top"
                      })
                      setTimeout(()=>{ navigate("/login",{replace:true})},1000)
                     
                },1500)
                
              }}
              isLoading={isLoading}
              
              >
              Request Reset
            </Button>
            )}
          </Stack>
        </Stack>
      </Flex>
    );
  }