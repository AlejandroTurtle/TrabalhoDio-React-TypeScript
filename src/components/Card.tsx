import { Box} from '@chakra-ui/react';



export const Card = ({ children }: any) => {


  

    return ( 
        <Box minHeight="100vh" backgroundColor="white" padding="25px" display="flex" alignItems="center" justifyContent="center">
          { children }
          
        </Box>
        
    )
}