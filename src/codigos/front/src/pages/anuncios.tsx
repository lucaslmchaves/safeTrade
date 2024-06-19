import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
  useToast // Importar hook de feedback visual
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import logoSafeTrade from '../components/images/LogoSafeTrade.jpg';

export const AnunciosPage = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [editando, setEditando] = useState(null); // Novo estado para acompanhar se estamos editando
  const toast = useToast(); // Hook para feedback visual

  // Função para buscar os anúncios do backend
  const buscarAnuncios = async () => {
    try {
      const response = await fetch('http://localhost:8081/anuncios');
      if (response.ok) {
        const data = await response.json();
        setAnuncios(data);
      } else {
        console.error('Erro ao buscar anúncios:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao buscar anúncios:', error);
    }
  };

  // Chamando a função de busca dos anúncios ao carregar a página
  useEffect(() => {
    buscarAnuncios();
  }, []);

  const criarAnuncio = async () => {
    const novoAnuncio = {
      titulo: titulo,
      descricao: descricao,
    };

    try {
      const response = await fetch('http://localhost:8081/anuncios/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoAnuncio)
      });

      if (response.ok) {
        const data = await response.json();
        setAnuncios([...anuncios, data]);
        setTitulo('');
        setDescricao('');
        toast({
          title: "Anúncio criado com sucesso.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.error('Erro ao criar anúncio:', response.statusText);
        toast({
          title: "Erro ao criar anúncio.",
          description: "Por favor, tente novamente mais tarde.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Erro ao criar anúncio:', error);
      toast({
        title: "Erro ao criar anúncio.",
        description: "Por favor, tente novamente mais tarde.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const editarAnuncio = async (anuncioId) => {
    const anuncioAtualizado = {
      titulo: titulo,
      descricao: descricao,
    };

    try {
      const response = await fetch(`http://localhost:8081/anuncios/${anuncioId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(anuncioAtualizado)
      });

      if (response.ok) {
        const data = await response.json();
        setAnuncios(anuncios.map(anuncio => (anuncio.id === anuncioId ? data : anuncio)));
        setTitulo('');
        setDescricao('');
        setEditando(null); // Sai do modo de edição
        toast({
          title: "Anúncio atualizado com sucesso.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.error('Erro ao atualizar anúncio:', response.statusText);
        toast({
          title: "Erro ao atualizar anúncio.",
          description: "Por favor, tente novamente mais tarde.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Erro ao atualizar anúncio:', error);
      toast({
        title: "Erro ao atualizar anúncio.",
        description: "Por favor, tente novamente mais tarde.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const excluirAnuncio = async (anuncioId) => {
    try {
      const response = await fetch(`http://localhost:8081/anuncios/${anuncioId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setAnuncios(anuncios.filter(anuncio => anuncio.id !== anuncioId));
        toast({
          title: "Anúncio excluído com sucesso.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.error('Erro ao excluir anúncio:', response.statusText);
        toast({
          title: "Erro ao excluir anúncio.",
          description: "Por favor, tente novamente mais tarde.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Erro ao excluir anúncio:', error);
      toast({
        title: "Erro ao excluir anúncio.",
        description: "Por favor, tente novamente mais tarde.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="white"
          color="black"
          borderRadius="lg"
          boxShadow="md"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Anúncio</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                    Preencha o formulário para criar um anúncio
                  </Text>
                  <img src={logoSafeTrade} alt="SafeTrade" style={{width: '250px', marginRight:'10px'}} />
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="black">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Titulo</FormLabel>
                        <InputGroup borderColor="gray.200">
                          <Input
                            type="text"
                            size="md"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="description">
                        <FormLabel>Descrição</FormLabel>
                        <Textarea
                          borderColor="gray.200"
                          _hover={{
                            borderColor: 'green.300',
                          }}
                          placeholder="Descrição..."
                          value={descricao}
                          onChange={(e) => setDescricao(e.target.value)}
                        />
                      </FormControl>
                      <FormControl id="submit" float="right">
                        <Button
                          onClick={editando ? () => editarAnuncio(editando) : criarAnuncio}
                          variant="solid"
                          bg="green.400"
                          color="white"
                          _hover={{ bg: 'green.500' }}>
                          {editando ? 'Atualizar anúncio' : 'Criar anúncio'}
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
      <Box mt={8}>
        <Heading size="lg">Anúncios Criados</Heading>
        {anuncios.map(anuncio => (
          <Box key={anuncio.id} bg="gray.100" p={4} mt={4} borderRadius="lg">
            <Heading size="md">{anuncio.titulo}</Heading>
            <Text>{anuncio.descricao}</Text>
            <Button
              mt={2}
              mr={10}
              colorScheme="green"
              variant="outline"
              borderColor="green.400"
              _hover={{ bg: 'green.400', color: 'white' }}
              onClick={() => {
                setEditando(anuncio.id);
                setTitulo(anuncio.titulo);
                setDescricao(anuncio.descricao);
              }}
            >
              Editar
            </Button>
            <Button
              mt={2}
              colorScheme="red"
              variant="outline"
              borderColor="red.400"
              _hover={{ bg: 'red.400', color: 'white' }}
              onClick={() => excluirAnuncio(anuncio.id)}
            >
              Excluir
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default AnunciosPage;
