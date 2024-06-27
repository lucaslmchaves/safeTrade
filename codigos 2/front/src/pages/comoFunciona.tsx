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
  Grid,
  GridItem,
  Divider,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function ComoFuncionaPage() {
  const [nome, setNome] = useState("");
  const [proposta, setProposta] = useState("");
  const [detalhamento, setDetalhamento] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/comoFunciona');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const novaParceria = {
      nome: nome,
      detalhamento: detalhamento,
      proposta: proposta,
    };

    try {
      const response = await fetch('http://localhost:8081/api/parceiro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaParceria)
      });

      if (response.ok) {
        try {
          const data = await response.json();
          console.log('Resposta do servidor:', data);
        } catch (e) {
          console.log('Resposta sem conteúdo JSON, ignorando...');
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
      <Box p="4" maxW="3xl" flex="1" mx="auto">
        <VStack spacing="8">
          <Heading size="xl">Como se tornar um parceiro?</Heading>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" bg={useColorModeValue("white", "gray.800")}>
                <Heading size="md" mb="2">1 - Parceria com a SafeTrade</Heading>
                <Text fontSize="md">
                  Estamos sempre em busca de parceiros que compartilham o nosso compromisso com a excelência e inovação no mercado. Na SafeTrade, acreditamos que as melhores soluções surgem da colaboração e da união de forças. Estamos em busca de parceiros que nos ajudem a tornar o mercado de skins cada vez melhor!
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" bg={useColorModeValue("white", "gray.800")}>
                <Heading size="md" mb="2">2 - Você se encaixa nesses requisitos?</Heading>
                <Text fontSize="md">
                  Estamos entusiasmados para conhecer você e explorar como podemos colaborar. Ao se tornar um parceiro SafeTrade, você se juntará a uma rede dedicada ao desenvolvimento contínuo e à implementação de tecnologias de ponta. Estamos quase lá.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" bg={useColorModeValue("white", "gray.800")}>
                <Heading size="md" mb="2">3 - Desejamos boa sorte!</Heading>
                <Text fontSize="md">
                  Agradecemos seu interesse em se tornar um parceiro da SafeTrade. Analisaremos sua proposta com atenção e esperamos que possamos formar uma parceria sólida e bem-sucedida. Em breve, entraremos em contato com nossa resposta. Até lá, desejamos boa sorte e esperamos poder colaborar juntos para alcançar grandes resultados!
                </Text>
              </Box>
            </GridItem>
          </Grid>
          <Divider mt={8} />
          <Box w="full" mt={10} p={5} borderWidth={1} borderRadius="lg" bg={useColorModeValue("white", "gray.800")}>
            <Heading size="lg" mb="4" textAlign="center" color="black.600">Estamos aqui por você</Heading>
            <Text fontSize="md" color="gray.500">
              A SafeTrade é mais do que uma simples plataforma de troca de skins. Nós oferecemos uma aplicação web segura e eficiente que conecta jogadores que desejam trocar skins de jogos. Nossa missão é criar um ambiente confiável e transparente para essas trocas, facilitando a comunicação e garantindo que todos os usuários tenham uma experiência satisfatória e segura.
            </Text>
            <Text fontSize="md" color="gray.500" mt={4}>
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
  );
}
