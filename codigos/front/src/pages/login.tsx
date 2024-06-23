import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Link as ChakraLink,
  Avatar
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (!email) {
      setEmailError("Por favor, insira um e-mail.");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Por favor, insira um e-mail válido.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Por favor, insira uma senha.");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres.");
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/api/usuarios/login", {
        email: email,
        senha: password,
      });

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      } else {
        setEmailError("Erro ao fazer login, por favor, verifique suas credenciais.");
      }
    } catch (error) {
      setEmailError("Erro ao fazer login, por favor, tente novamente.");
    }
  };

  return (
    <Flex direction="column" minH="100vh">
      <Flex as="header" align="center" justify="space-between" p={4} bg="white" boxShadow="md" color="green.700">
        <Flex align="center">
          <img src="/placeholder.svg" alt="SafeTrade Logo" className="h-8" />
          <Text ml={2} fontSize="xl" fontWeight="bold">SafeTrade</Text>
        </Flex>
        <Flex as="nav" spacing={4}>
          <ChakraLink as={Link} to="/" mx={2} fontWeight="bold">Home</ChakraLink>
          <ChakraLink as={Link} to="/" mx={2} fontWeight="bold">Resources</ChakraLink>
          <ChakraLink as={Link} to="/" mx={2} fontWeight="bold">Pricing</ChakraLink>
          <ChakraLink as={Link} to="/" mx={2} fontWeight="bold">About</ChakraLink>
          <ChakraLink as={Link} to="/" mx={2} fontWeight="bold">Contact</ChakraLink>
          <ChakraLink as={Link} to="/" mx={2} fontWeight="bold">Exchange</ChakraLink>
        </Flex>
        <Button as={Link} to="/user" colorScheme="green" variant="outline">
          <Flex align="center">
            <Avatar size="sm" name="John Doe" src="/placeholder.svg" />
            <Text ml={2}>John Doe</Text>
          </Flex>
        </Button>
      </Flex>

      <Flex
        minH={"calc(100vh - 72px)"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Entre na sua conta</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl isInvalid={!!emailError}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormErrorMessage>{emailError}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!passwordError}>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{passwordError}</FormErrorMessage>
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Permanecer conectado</Checkbox>
                  <Text color={"green.400"}>Esqueceu sua senha?</Text>
                </Stack>

                <Button
                  onClick={handleLogin}
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Entrar
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Não possui uma conta?{" "}
                  <ChakraLink as={Link} to="/register" color={"green.400"}>
                    Faça seu cadastro
                  </ChakraLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Flex as="footer" justify="space-between" align="center" p={4} bg="white" boxShadow="md" color="green.700" mt="auto">
        <Text>© 2024 SafeTrade. Todos os direitos reservados.</Text>
        <Flex>
          <ChakraLink href="#" mx={2} variant="link" fontWeight="bold">Terms of Service</ChakraLink>
          <ChakraLink href="#" mx={2} variant="link" fontWeight="bold">Privacy Policy</ChakraLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
