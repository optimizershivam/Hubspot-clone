import React, { useState } from 'react'
import { Box,Button,Editable,EditablePreview,EditableTextarea,Flex,FormControl,FormLabel,HStack,Image, Input, InputGroup, Select, Spacer, Textarea, useToast } from '@chakra-ui/react'

import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import {
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const IMAGE ='https://offers.hubspot.com/hubfs/Calling@2x.png';
const IMAGE2 = "https://offers.hubspot.com/hubfs/Messages@2x.png";
const IMAGE3 = "https://offers.hubspot.com/hubfs/Date@2x.png"
const Contactsales = () => {
  const [isLoading,setIsloading] = useState(false)
    const toast = useToast()

    const [input, setInput] = useState('')
    const isError = input === ''
    const  navigate = useNavigate()
    const handleInputChange = (e) => setInput(e.target.value)
  return (
    <div> <Box pl={"100px"} display={"flex"} justifyContent={"space-between"} px="60px" alignItems={"center"} > 

    <Box w={"200px"} h="100px" >
      <Image w={"70%"} src={"https://www.logo.wine/a/logo/HubSpot/HubSpot-Logo.wine.svg"}/>
    </Box >
    <Box >+91 11 7127 9211
      <Button size={"5px"}> <ChevronDownIcon bg={"none"} /></Button>
    </Box>
  </Box>
  <Flex justifyContent={"flex-end"} >
<Image  src={image2}/>
  </Flex>
  <Flex  justifyContent={"center"}>
    <HStack justifyContent={"center"} spacing={"100px"}>
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'300px'}
        h={"300px"}
        bg={useColorModeValue('#f5f8fa', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        justifyContent={"center"}
        zIndex={1}>
        <Box mt={"3rem"} alignItems={"center"} display={"flex"} justifyContent={"center"} >
      
          <Image 
            rounded={'lg'}
            height={50}
            width={50}
            // objectFit={'cover'}
            src={IMAGE}
            justifyContent={"center"}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Call us Directly
          </Heading>
          <Stack direction={'row'} align={'center'}>
            
            <Text color={'gray.600'} mt={"1rem"}>
            +91 11 7127 9211
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
------2nd card
<Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'300px'}
        h={"300px"}
        bg={useColorModeValue('#f5f8fa', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        justifyContent={"center"}
        zIndex={1}>
        <Box mt={"3rem"} alignItems={"center"} display={"flex"} justifyContent={"center"} >
      
          <Image 
            rounded={'lg'}
            height={50}
            width={50}
            // objectFit={'cover'}
            src={IMAGE2}
            justifyContent={"center"}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            Contact with our sales team
          </Heading>
          <Stack direction={'row'} align={'center'}>
            
            <Text color={'white'} mt={"1rem"}>
            <Button bg={"#ff5c35"} >Chat with Sales</Button>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>

---------3rd

<Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'300px'}
        h={"300px"}
        bg={useColorModeValue('#f5f8fa', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        justifyContent={"center"}
        zIndex={1}>
        <Box mt={"3rem"} alignItems={"center"} display={"flex"} justifyContent={"center"} >
      
          <Image 
            rounded={'lg'}
            height={50}
            width={50}
            // objectFit={'cover'}
            src={IMAGE3}
            justifyContent={"center"}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            Get a product demo
          </Heading>
          <Stack direction={'row'} align={'center'}>
            
            <Text color={'white'} mt={"1rem"}>
            <Button bg={"#ff5c35"} >Chat with Sales</Button>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>

    </HStack>
  </Flex>
  
  <Flex justifyContent={"flex-end"} mt={"100px"} >
<Image  src={image3}/>
  </Flex>



  <Flex 
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'} textAlign={'center'}>
            Get a Demo
          </Heading>
          <Text fontSize={'sm'} color={'gray.600'}>
          Complete the form for a free demo of HubSpot’s software.
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
                <FormControl id="firstNam" isRequired isInvalid={isError}>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"  onChange={handleInputChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastNam" isInvalid={isError}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={handleInputChange} />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired isInvalid={isError}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email"  onChange={handleInputChange}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired isInvalid={isError}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="text" onChange={handleInputChange} />
                </FormControl>
              </Box>
            </HStack>

            <HStack>
              <Box>
                <FormControl id="first" isRequired isInvalid={isError}>
                  <FormLabel>Company Name</FormLabel>
                  <Input type="text" onChange={handleInputChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="last" isRequired isInvalid={isError}>
                  <FormLabel>Website url</FormLabel>
                  <Input type="url" onChange={handleInputChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl>
  <FormLabel isRequired>Employees</FormLabel>
  <Select placeholder='Please Select'>
    
    <option>1</option>
    <option>2 to 5</option>
    <option>6 to 10</option>
    <option>11 to 25</option>
    <option>26 to 50</option>
    <option>51 to 200</option>
    <option>201 to 1,000</option>
    <option>1001 to 10,000</option>
    <option>10,001 or more</option>
  
  </Select>
</FormControl>

<FormControl>
  <FormLabel isRequired>Country of Company Headquarters*
</FormLabel>
  <Select placeholder='Please Select'>
    
    <option>India</option>
    <option>USA</option>
    <option>UK</option>
    <option>Spain</option>
    <option>Brazil</option>
    <option>France</option>
    <option>Italy</option>
    <option>Australia</option>
    <option>Austria</option>
  
  </Select>
</FormControl>

        
          <FormControl>
     <FormLabel isRequired>What are you hoping to learn?*
       </FormLabel>
                <Textarea/>

                </FormControl>

                <Text color={"#3d5062"}>
                We're committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.
                </Text>
             
            <Stack spacing={10} pt={2}>
      
            {isError?(<Button bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }} disabled>Submit Form</Button>) : (
            <Button
              bg={'#ff5c35'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={()=>{
                setIsloading(true)
                setTimeout(() => {
                    setIsloading(false)
                    toast({
                        title: 'Demo Session Booked Successfully.',
                        description: "Shortly, You will receive an Confirmation email.",
                        status: 'info',
                        duration: 1500,
                        isClosable: true,
                        position:"top"
                      })
                      setTimeout(()=>{ navigate("/success",{replace:true})},1000)
                     
                },1500)
                
              }}
              isLoading={isLoading}
              
              >
              Submit Form
            </Button>
            )}
            </Stack>
            <Stack pt={6}>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
 
 <Box border={"1px solid black"} h={"200px"} bg={"#3d5062"} textAlign={"center"} >
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

  </div>
  )
}

export default Contactsales