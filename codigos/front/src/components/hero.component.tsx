import React, { useState } from "react";
import { Box,
         Button, 
         Container, 
         Heading, 
         Stack, 
         Text, } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const [ setIsModalOpen] = useState(false);

  const handleClick = () => {
    navigate("/login");
  };

  const handleComoFunciona = () => {
    navigate("/comoFunciona");
    setIsModalOpen(false);
  };

  return (
    <Container maxW={"3xl"}>
      <Stack spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Box textAlign={"center"}>
          <Heading as="h1" fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
            SafeTrade <br />
            <Text as={"span"} color={"green.400"} fontSize="2xl">
              Sua plataforma de trocas seguras
            </Text>
          </Heading>
          <Text mt={3} color={"gray.500"} fontSize={{ base: "md", md: "lg" }}>
            Eleve a sua gameplay com a nossa plataforma de trocas seguras. A SafeTrade é a solução perfeita para quem deseja trocar skins de forma segura e rápida.
          </Text>
        </Box>

        <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"}>
          <Button
            colorScheme={"green"}
            bg={"green.500"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.600",
            }}
            onClick={handleClick}
          >
            Entrar
          </Button>
          <Button
            colorScheme={"blue"}
            bg={"green.500"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.600",
            }}
            onClick={handleComoFunciona}
          >
            Seja um Parceiro SafeTrade
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
