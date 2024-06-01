import { Box, Button, Center, Input, VStack } from "@chakra-ui/react";
import { Card } from "../components/Card"
import { useContext, useState } from "react";
import { login } from "../services/Login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";


const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setSenha ] = useState<string>('')
    const { setisLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    const validateUser = async (email: string, password: string) => {
      const loggedIn = await login(email, password)

    if (!loggedIn || !email || !password){
     return alert("Email invalido ou senha invalido")
    }
    setisLoggedIn(true)
    changeLocalStorage({ login: true})
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
              <Input htmlSize={50} width="auto" placeholder="Insira sua senha" textAlign="center" value={password} onChange={(event) => setSenha(event.target.value)} type="password"/>
              </VStack>
            <Center>
              <Button onClick={() => validateUser(email, password)} backgroundColor='#0a39ab' size='sm' marginTop="20px" width="100%" color="white">
                Entrar
              </Button>
            </Center>
          </Box>
        </Card>
        </Box>
    )
} 

export default Home