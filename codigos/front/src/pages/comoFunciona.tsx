import React, { useState } from 'react';
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
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
  Link as ChakraLink,
  Avatar
} from "@chakra-ui/react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

export function ComoFuncionaPage() {
  const [nome, setNome] = useState("");
  const [proposta, setProposta] = useState("");
  const [detalhamento, setDetalhamento] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novaParceria = {
      nome: nome,
      detalhamento: detalhamento,
      proposta: proposta,
    };

    try {
      const response = await fetch('http://localhost:8081/parceiro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaParceria)
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const data = await response.json();
          console.log('Resposta do servidor:', data);
        }
        setNome('');
        setDetalhamento('');
        setProposta('');
        toast({
          title: "Proposta enviada com sucesso.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.error('Erro ao enviar proposta:', response.statusText);
        toast({
          title: "Erro ao enviar proposta.",
          description: "Por favor, tente novamente mais tarde.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Erro ao enviar proposta:', error);
      toast({
        title: "Erro ao enviar proposta.",
        description: "Por favor, tente novamente mais tarde.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
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
          <ChakraLink as={RouterLink} to="/" mx={2} fontWeight="bold">Início</ChakraLink>
          <ChakraLink as={RouterLink} to="/anuncios" mx={2} fontWeight="bold">Anunciar</ChakraLink>
          <ChakraLink as={RouterLink} to="/parceiros" mx={2} fontWeight="bold">Parceiros</ChakraLink>
          <ChakraLink as={RouterLink} to="/trocas" mx={2} fontWeight="bold">Trocas</ChakraLink>
          <ChakraLink as={RouterLink} to="/indicadores" mx={2} fontWeight="bold">Indicadores</ChakraLink>
          <ChakraLink as={RouterLink} to="/sobre" mx={2} fontWeight="bold">Sobre</ChakraLink>
        </Flex>
        <Button as={RouterLink} to="/user" colorScheme="green" variant="outline">
          <Flex align="center">
            <Avatar size="sm" name="John Doe" src="/placeholder.svg" />
            <Text ml={2}>John Doe</Text>
          </Flex>
        </Button>
      </Flex>

      <Flex justify="center" bg={useColorModeValue("gray.50", "gray.800")} flex="1">
        <Box p="4" maxW="3xl">
          <VStack spacing="8">
            <Heading size="xl">Como se tornar um parceiro?</Heading>
            <Divider />
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" bg={useColorModeValue("white", "gray.800")}>
                  <Heading size="md" mb="2">1 - Parceria com a SafeTrade</Heading>
                  <Text fontSize="md" mb="4">
                    Estamos sempre em busca de parceiros que compartilham o nosso compromisso com a excelência e inovação no mercado. Na SafeTrade, acreditamos que as melhores soluções surgem da colaboração e da união de forças. Estamos em busca de parcereiros que nos ajudem a tornar o mercado de skins cada vez melhor!
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" bg={useColorModeValue("white", "gray.800")}>
                  <Heading size="md" mb="2">2 - Você se encaixa nesses requisitos?</Heading>
                  <Text fontSize="md" mb="4">   
                    Estamos entusiasmados para conhecer você e explorar como podemos colaborar. Ao se tornar um parceiro SafeTrade, você se juntará a uma rede dedicada ao desenvolvimento contínuo e à implementação de tecnologias de ponta. Estamos quase lá
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" bg={useColorModeValue("white", "gray.800")}>
                  <Heading size="md" mb="2">3 - Desejamos uma boa sorte !!</Heading>
                  <Text fontSize="md" mb="4">
                    Agradecemos seu interesse em se tornar um parceiro da SafeTrade. Analisaremos sua proposta com atenção e esperamos que possamos formar uma parceria sólida e bem-sucedida. Em breve, entraremos em contato com a nossa resposta. Até lá, desejamos boa sorte e esperamos poder colaborar juntos para alcançar grandes resultados!
                  </Text>
                </Box>
              </GridItem>
            </Grid>
            <Divider mt={8} />
            <Box w="full" mt={10} p={5} borderWidth={1} borderRadius="lg" bg={useColorModeValue("white", "gray.800")}>
              <Heading size="lg" mb="4" textAlign="center" color="black.600">Estamos aqui por você</Heading>
              <Text color={"gray.500"} mb={4}>
                A SafeTrade é mais do que uma simples plataforma de troca de skins. Nós oferecemos uma aplicação web segura e eficiente que conecta jogadores que desejam trocar skins de jogos. Nossa missão é criar um ambiente confiável e transparente para essas trocas, facilitando a comunicação e garantindo que todos os usuários tenham uma experiência satisfatória e segura.
              </Text>
              <Text color={"gray.500"} mb={4}>
                Os poucos sites que disponibilizam esse tipo de serviço, infelizmente, negligenciam suporte aos seus clientes, são ultrapassados, confusos e não transmitem confiança para seus usuários. A SafeTrade, por outro lado, é apaixonada por tecnologia e games. Decidimos criar uma plataforma inovadora que promove maior visibilidade, tanto para o comprador encontrar e adquirir o produto/serviço desejado, quanto para o vendedor conseguir alavancar suas vendas e receber com segurança. Utilizando-se de tecnologias de ponta e layout intuitivo, garantimos a melhor experiência de compra e venda para seus usuários. A SafeTrade irá cuidar das partes cruciais da negociação para que tudo ocorra perfeitamente, assim você não precisará se preocupar com mais nada.
              </Text>
            </Box>
            <Box w="full" mt={10} p={5} borderWidth={1} borderRadius="lg" bg={useColorModeValue("white", "gray.800")}>
              <Heading size="lg" mb={4} textAlign="center" color="black.600">Torne-se nosso parceiro</Heading>
              <form onSubmit={handleFormSubmit}>
                <Stack spacing={4}>
                  <FormControl id="company-name">
                    <FormLabel>Nome da Empresa</FormLabel>
                    <Input 
                      type="text" 
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required 
                    />
                  </FormControl>
                  <FormControl id="proposal">
                    <FormLabel>Proposta de Parceria</FormLabel>
                    <Textarea 
                      placeholder="Descreva sua proposta de parceria" 
                      value={proposta}
                      onChange={(e) => setProposta(e.target.value)}
                      required 
                    />
                  </FormControl>
                  <FormControl id="proposal-details">
                    <FormLabel>Detalhamento da Proposta</FormLabel>
                    <Textarea 
                      placeholder="Explique em detalhes como será a parceria" 
                      value={detalhamento}
                      onChange={(e) => setDetalhamento(e.target.value)}
                      required 
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="green" bg="green.600" _hover={{ bg: "green.700" }}>
                    Enviar Proposta
                  </Button>
                </Stack>
              </form>
            </Box>
          </VStack>
        </Box>
      </Flex>

      <Flex as="footer" justify="space-between" align="center" p={4} bg="white" boxShadow="md" color="green.700" mt="auto">
        <Text>© 2024 SafeTrade. Todos os direitos reservados.</Text>
        <Flex>
          <ChakraLink as={RouterLink} to="/terms" mx={2} variant="link" fontWeight="bold">Terms of Service</ChakraLink>
          <ChakraLink as={RouterLink} to="/privacy" mx={2} variant="link" fontWeight="bold">Privacy Policy</ChakraLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
