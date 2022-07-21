import { Box, Button, Heading, Text ,Image} from '@chakra-ui/react';
import { CheckCircleIcon, ChevronDownIcon } from '@chakra-ui/icons';

export default function Success() {
  return (
    <>
    <Box pl={"100px"} display={"flex"} justifyContent={"space-between"} px="60px" alignItems={"center"} > 

<Box w={"200px"} h="100px" >
  <Image w={"70%"} src={"https://www.logo.wine/a/logo/HubSpot/HubSpot-Logo.wine.svg"}/>
</Box >
<Box >+91 11 7127 9211
  <Button size={"5px"}> <ChevronDownIcon bg={"none"} /></Button>
</Box>
</Box>


    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Your Demo Session is Confirmed.
      </Heading>
      <Text color={'gray.500'}>
       Thank you for booking  demo of our products and features. Hope you enjoy this. In Future you can purchase our products if you like our service. 
      </Text>
    </Box>
    </>
  );
}