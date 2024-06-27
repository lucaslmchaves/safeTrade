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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
    } else if (password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      valid = false;
    }

    if (!valid) {
      return;
    }

    // Indicador de desempenho: tempo de resposta da autenticação
    const startTime = performance.now();

    // Chamada de API para autenticar o usuário
    try {
      const response = await fetch('http://localhost:8081/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const endTime = performance.now();
      console.log(`Tempo de resposta da autenticação: ${endTime - startTime}ms`);

      if (response.ok) {
        const data = await response.json();
        // Armazene o ID do usuário no localStorage
        localStorage.setItem('userId', data.id);
        navigate('/');
      } else {
        setEmailError("Erro ao fazer login, por favor, verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setEmailError("Erro ao fazer login, por favor, tente novamente mais tarde.");
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Flex
      minH={"100vh"}
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
                <Link to="/register">
                  <Text color={"green.400"}>Faça seu cadastro</Text>
                </Link>
              </Text>
            </Stack>

            <Stack pt={6}>
              <Button
                onClick={handleGoHome}
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                Voltar para a página inicial
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
