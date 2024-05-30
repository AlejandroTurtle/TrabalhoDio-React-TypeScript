import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'


export const Header = () =>{
    const { isLoggedIn, setisLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    const logout = () => {
        changeLocalStorage({ login: false })
        setisLoggedIn(false)
        navigate("/")
    }

    return (
        <Flex backgroundColor="#f8d117" color="#0a39ab" padding="5px" >
            <Box > 
            <Center >
                <Text fontSize="30px" fontFamily="arial, sans-serif">
                Dio Bank 
                 </Text>
             </Center>
            </Box>
            {
                isLoggedIn && (
                    <>
                    <Spacer />
                    <Button onClick={() => logout()}>
                        Sair
                    </Button>
                    </>
                )
            }
        </Flex>

    )
}