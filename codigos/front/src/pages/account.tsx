import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Grid,
  GridItem,
  Divider,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

export function AccountPage() {
  const navigate = useNavigate();
  const [reputation, setReputation] = useState(0); // initial reputation value

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); 
  };

  // informações do usuário (exemplo estático)
  const user = {
    username: "usuário",
    ggPoints: 0,
    trocasLiberar: 0,
    trocasDisponiveis: 0,
    perfilCompleto: 17,
    vendasHoje: 0,
    vendasOntem: 0,
    vendasSemana: 0,
    vendasMes: 0,
  };

  const getReputationColor = () => {
    if (reputation > 66) return "green";
    if (reputation > 33) return "yellow";
    return "red";
  };

  const getReputationIcon = () => {
    if (reputation > 66) return <FaSmile color="green" />;
    if (reputation > 33) return <FaMeh color="yellow" />;
    return <FaFrown color="red" />;
  };

  return (
    <Flex minH={"100vh"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Box w={"20%"} p={4} bg={useColorModeValue("white", "gray.700")}>
        <VStack align={"start"} spacing={4}>
          <Heading size={"md"}>MENU</Heading>
          <Divider />
          <Link>Resumo</Link>
          <Link>Transações</Link>
          <Link>Meus anúncios</Link>
          <Link>Skins trocadas</Link>
          <Link>Skins disponíveis para troca</Link>
          <Link>Minhas perguntas</Link>
          <Link>Perguntas recebidas</Link>
          <Link>Minhas retiradas</Link>
          <Heading size={"md"}>CONFIGURAÇÕES</Heading>
          <Divider />
          <Link>Minha conta</Link>
          <Link>Meus dados</Link>
          <Link>Verificações</Link>
          <Link>Segurança</Link>
          <Link>Notificações</Link>
          <Button
            onClick={handleLogout}
            bg={"red.400"} 
            color={"white"} 
            _hover={{
              bg: "red.500", 
            }}
          >
            Sair
          </Button>
        </VStack>
      </Box>
      <Box flex={"1"} p={8} bg={useColorModeValue("gray.100", "gray.900")}>
        <Stack spacing={8}>
          <Flex justify={"space-between"} align={"center"}>
            <Text fontSize={"2xl"}>Olá {user.username}, bem-vindo a sua conta safeTrade</Text>
            <Button
              bg={"green.400"} 
              color={"white"} 
              _hover={{ bg: "green.500" }} 
            >
              Ver meu perfil
            </Button>
          </Flex>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <GridItem>
              <Box p={4} bg={"gray.200"} rounded={"md"}>
                <Text>safeTrade Point(s)</Text>
                <Heading>{user.ggPoints}</Heading>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} bg={"gray.200"} rounded={"md"}>
                <Text>Trocas a liberar</Text>
                <Heading>{user.trocasLiberar}</Heading>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} bg={"gray.200"} rounded={"md"}>
                <Text>Trocas disponíveis</Text>
                <Heading>{user.trocasDisponiveis}</Heading>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} bg={"gray.200"} rounded={"md"}>
                <Button
                  bg={"green.400"} 
                  color={"white"} 
                  _hover={{ bg: "green.500" }}
                >
                  Retirar Skin
                </Button>
              </Box>
            </GridItem>
          </Grid>
          <Box p={4} bg={"gray.200"} rounded={"md"}>
            <Text>Complete seu perfil</Text>
            <Text>
              Preencha seus{" "}
              <Link color={"green.400"}>dados pessoais</Link>, assim você ganhará
              maior confiabilidade dentro da nossa plataforma!
            </Text>
            <Text>{user.perfilCompleto}% completo.</Text>
          </Box>
          <Box p={4} bg={"gray.200"} rounded={"md"}>
            <Text>Resumo de vendas</Text>
            <HStack spacing={4}>
              <Button variant={"outline"}>Hoje</Button>
              <Button variant={"outline"}>Ontem</Button>
              <Button variant={"outline"}>Esta semana</Button>
              <Button variant={"outline"}>Este mês</Button>
            </HStack>
            <Text mt={4}>0 trocas (nenhuma skin trocada)</Text>
          </Box>
          {/* New Reputation Section */}
          <Box p={4} bg={"gray.200"} rounded={"md"}>
            <Text>Minha Reputação</Text>
            <HStack spacing={4} mt={4}>
              <Box flex="1" bg={getReputationColor()} height="8px" rounded={"md"} />
              <Box>
                {getReputationIcon()}
              </Box>
            </HStack>
            <HStack spacing={4} mt={4}>
              <Button onClick={() => setReputation(100)}>Ótimo</Button>
              <Button onClick={() => setReputation(50)}>Regular</Button>
              <Button onClick={() => setReputation(10)}>Ruim</Button>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default AccountPage;
