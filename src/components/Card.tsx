import { Layout } from "../components/Layout";
import { Box, Center, ChakraProvider, Input, Button, VStack } from '@chakra-ui/react';
import { BoasVindas } from "../services/boasVindas";
import { Header } from "../components/Header/Header";

export const Card = () => {
    return ( 
        <ChakraProvider>
        <Header />
        <Box minHeight="100vh" backgroundColor="white" padding="25px" display="flex" alignItems="center" justifyContent="center">
          <Box borderRadius="25px" padding="15px" backgroundColor="#f8d117" fontSize="14px" fontFamily="arial, sans-serif" >
            <Center color="#0a39ab" fontFamily="arial, sans-serif" fontSize="23px">
              <h1>Faça o login</h1>
            </Center>
            <h3>E-mail</h3>
            <VStack spacing={4} mt={4}>
              <Input htmlSize={50} width="auto" placeholder="Insira seu email" textAlign="center" /> 
              </VStack>
              <h3>Senha</h3>
              <VStack spacing={4} mt={4}>
              <Input htmlSize={50} width="auto" placeholder="Insira sua senha" textAlign="center"/>
              </VStack>
            <Center>
              <Button onClick={BoasVindas} backgroundColor='#0a39ab' size='sm' marginTop="20px" width="100%" color="white">
                Entrar
              </Button>
            </Center>
          </Box>
        </Box>
      </ChakraProvider>
        
    )
}