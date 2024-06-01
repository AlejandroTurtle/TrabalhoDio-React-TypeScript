import { Box, Text } from "@chakra-ui/react";

interface InfoConta {
  Content: string;
}

const ContaInfo = ({ Content }: InfoConta) => {
  return (
    <Box
      backgroundColor={"blue"}
      width={320}
      minHeight="120px"
      padding={8}
      color={"white"}
      borderRadius="25px"
    >
        <Text fontSize="2xl" fontWeight="bold">{Content}</Text>
    </Box>
  );
};

export default ContaInfo;
