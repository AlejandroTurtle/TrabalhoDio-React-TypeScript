import { Box, Button, Center, Input, VStack } from "@chakra-ui/react";
import { Card } from "../components/Card"
import { useContext, useState } from "react";
import { login } from "../services/Login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";


const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const { setisLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    const validateUser = async (email: string) => {
        const loggedIn = await login(email)
    

    if (!loggedIn){
     return alert("Email invalido")
    }
    setisLoggedIn(true)
    navigate("/conta/1")
  }
    return (
        <Box>
        <Card>
        <Box borderRadius="25px" padding="15px" backgroundColor="#f8d117" fontSize="14px" fontFamily="arial, sans-serif" >
            <Center color="#0a39ab" fontFamily="arial, sans-serif" fontSize="23px">
              <h1>Faça o login</h1>
            </Center>
            <h3>E-mail</h3>
            <VStack spacing={4} mt={4}>
              <Input htmlSize={50} width="auto" placeholder="Insira seu email" textAlign="center" value={email} onChange={(event) => setEmail(event.target.value)}/> 
              </VStack>
              <h3>Senha</h3>
              <VStack spacing={4} mt={4}>
              <Input htmlSize={50} width="auto" placeholder="Insira sua senha" textAlign="center" type="password"/>
              </VStack>
            <Center>
              <Button onClick={() => validateUser(email)} backgroundColor='#0a39ab' size='sm' marginTop="20px" width="100%" color="white">
                Entrar
              </Button>
            </Center>
          </Box>
        </Card>
        </Box>
    )
} 

export default Home