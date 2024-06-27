import React from "react";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <Container maxW="3xl" centerContent>
      <Box textAlign="center" py={{ base: 20, md: 36 }}>
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          color="green.700" 
          mb={4}
        >
          Proteja suas negociações com Safetrade
        </Text>
        <Text color="green.500" fontSize={{ base: "sm", md: "md" }} mb={8}>
          Safetrade é a principal plataforma para negociações seguras e confiáveis.{" "}
          <Text as="span">
            Proteja seus ativos com nossos recursos avançados e tecnologia de ponta.
          </Text>
        </Text>
        <Button
          colorScheme="green"
          bg="green.400"
          rounded="full"
          px={6}
          _hover={{
            bg: "green.500",
          }}
          onClick={handleClick}
        >
          Começar
        </Button>
      </Box>
    </Container>
  );
}
