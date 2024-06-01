import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useParams, useNavigate, Link } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from '../components/AppContext'


interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
  }

const Conta = () => {
    const [userData, setuserData ] = useState<null | UserData>()

    const {isLoggedIn} = useContext(AppContext)

    const { id } = useParams()
    const navigate = useNavigate()
     
  !isLoggedIn && navigate ("/")

    useEffect(() => {
        const getData = async () => {
          const data: any | UserData = await api
          setuserData(data)
        }
    
        getData()
      }, [])



      if (userData && id !== userData.id) {
        navigate("/")
      }

      const actualData = new Date()
    return (
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
            {
                userData === undefined || userData === null ? (<Center>
                    <Spinner size="xl" color="blue"/>
                </Center>) : (
                   <>
                    <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>
                    <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`}/>
                    <Link to="/infoconta/1">
            <Text fontSize="3xl" fontWeight="bold"> Informações da Conta</Text>
         </Link>
                   </>
                )
}
            
        </SimpleGrid>
      </Center>
    );
}

export default Conta