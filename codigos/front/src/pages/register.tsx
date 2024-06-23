import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link as ChakraLink,
  Avatar
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import axios from "axios";

export function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorCpf, setErrorCpf] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      errorFirstName ||
      errorLastName ||
      errorEmail ||
      errorCpf ||
      errorPassword ||
      errorPasswordConfirm
    ) {
      console.log("Erro no preenchimento do formulário");
      return;
    }

    const usuarioData = {
      nome: firstName + " " + lastName,
      email: email,
      senha: password,
      cpf: cpf,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8081/api/usuarios/register",
        usuarioData
      );
      console.log("Usuário criado:", response.data);
      setMessage("Usuário criado com sucesso!");
      setIsLoading(false);
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      setMessage("Erro ao criar usuário. Tente novamente.");
      setIsLoading(false);
    }
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    setFirstName(valor);
    if (valor.trim().length < 3 || !/^[a-zA-ZÀ-ÿ\s]+$/.test(valor)) {
      setErrorFirstName("O nome deve ter ao menos 3 caracteres!");
    } else {
      setErrorFirstName("");
    }
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    setLastName(valor);
    if (valor.trim().length < 3 || !/^[a-zA-ZÀ-ÿ\s]+$/.test(valor)) {
      setErrorLastName("O sobrenome deve ter ao menos 3 caracteres!");
    } else {
      setErrorLastName("");
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    setEmail(valor);
    if (!valor || !/^\S+@\S+\.\S+$/.test(valor)) {
      setErrorEmail("Por favor, insira um e-mail válido");
    } else {
      setErrorEmail("");
    }
  };

  const handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    setCpf(valor);
    if (!valor || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor)) {
      setErrorCpf("Por favor, insira um CPF válido");
    } else {
      setErrorCpf("");
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    setPassword(valor);
    if (valor.length < 6) {
      setErrorPassword("A senha deve ter no mínimo 6 caracteres");
    } else {
      setErrorPassword("");
    }
  };

  const handlePasswordConfirmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    setPasswordConfirm(valor);
    if (valor !== password) {
      setErrorPasswordConfirm("As senhas não coincidem");
    } else {
      setErrorPasswordConfirm("");
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
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          width={"400px"}
        >
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Crie sua conta
          </Heading>
          {message && (
            <Text color={message.includes("sucesso") ? "green" : "red"} textAlign={"center"} mb={4}>
              {message}
            </Text>
          )}
          <form onSubmit={handleSubmit}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              {errorFirstName && <Text color="red">{errorFirstName}</Text>}
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>Sobrenome</FormLabel>
              <Input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
              />
              {errorLastName && <Text color="red">{errorLastName}</Text>}
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
              {errorEmail && <Text color="red">{errorEmail}</Text>}
            </FormControl>
            <FormControl id="cpf" isRequired>
              <FormLabel>CPF</FormLabel>
              <Input
                type="text"
                as={InputMask}
                mask="999.999.999-99"
                value={cpf}
                onChange={handleCpfChange}
              />
              {errorCpf && <Text color="red">{errorCpf}</Text>}
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {errorPassword && <Text color="red">{errorPassword}</Text>}
            </FormControl>
            <FormControl id="passwordConfirm" isRequired>
              <FormLabel>Confirmar senha</FormLabel>
              <Input
                type="password"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
              />
              {errorPasswordConfirm && (
                <Text color="red">{errorPasswordConfirm}</Text>
              )}
            </FormControl>
            <Button
              type="submit"
              mt={4}
              isLoading={isLoading}
              loadingText="Enviando"
              colorScheme="green"
            >
              Cadastrar
            </Button>
          </form>
          <Text align={"center"} pt={6}>
            Já possui uma conta?{" "}
            <ChakraLink as={Link} to="/login" color={"green.400"}>
              Faça login
            </ChakraLink>
          </Text>
        </Box>
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
