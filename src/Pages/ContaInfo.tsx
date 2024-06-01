import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";
import InfoConta from "../components/InfoConta";

interface UserData {
    name: string
    email: string
    id: string
}



const ContaInfo = () => {

    const [userData, setuserData] = useState<null | UserData>()
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setuserData(data)
        }
        getData()
    }, [])

    if(userData && id !== userData.id){
        navigate("/")
    }
    
    return (
        <>
        <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {
                userData === undefined || userData === null ? (<Center>
                    <Spinner size="xl" color="blue"/>
                </Center>) : (
                    <InfoConta Content={`Olá ${userData?.name} seu email cadastrado é ${userData?.email}`}/>
                )
            }
         <Link to="/conta/1">
            <Text fontSize="3xl" fontWeight="bold"> Acessar minha conta</Text>
         </Link>
        
         </SimpleGrid>
         </Center>
        </>

    )
}

export default ContaInfo