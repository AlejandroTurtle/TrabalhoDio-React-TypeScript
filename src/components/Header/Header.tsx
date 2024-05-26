import { Box, Center, ChakraProvider, Input, Button } from '@chakra-ui/react'

export const Header = () =>{
    return (
        <ChakraProvider>
            <Box backgroundColor="#f8d117" color="#0a39ab" fontSize="30px" fontFamily="arial, sans-serif"> 
            <Center>
             Dio Bank 
             </Center>
            </Box>
             
        </ChakraProvider>
            
    )
}