import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Heading, Text, Avatar, Progress, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { ImageUploadInput } from '../components/image-upload.component';
import axios from 'axios';

const AccountPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatar, setAvatar] = useState('/placeholder.svg');
  const [rating, setRating] = useState('Regular'); 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId'); 
        const response = await axios.get(`http://localhost:8081/usuario/${userId}`);
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Erro ao buscar dados do usuário");
        setIsLoading(false);
      }
    };

    const fetchRating = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/avaliacao');
        setRating(response.data.rating);
      } catch (error) {
        console.error("Erro ao buscar avaliação:", error);
      }
    };

    fetchUserData();
    fetchRating();
  }, []);

  const getColorScheme = (rating) => {
    switch (rating) {
      case 'Ótimo':
        return 'green';
      case 'Ruim':
        return 'red';
      case 'Regular':
      default:
        return 'yellow';
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (error) {
    return <Text color="red">{error}</Text>;
  }

  if (!user) {
    return <Text>Nenhum usuário encontrado</Text>;
  }

  return (
    <Flex direction="column" minH="100vh">
      <Container maxW="md" centerContent>
        <Box p={6} mt={8} borderWidth={1} borderRadius="lg" boxShadow="md" overflow="hidden">
          <Avatar
            size="2xl"
            name={user.nome}
            src={avatar}
            mb={4}
            cursor="pointer"
            onClick={() => setIsModalOpen(true)}
          />
          <Heading as="h1" size="lg" mb={2}>{user.nome}</Heading>
          <Text fontSize="md" color="gray.600" mb={1}>Email: {user.email}</Text>
          <Text fontSize="md" color="gray.600" mb={4}>Senha: ••••••••</Text>
          <Text fontSize="lg" mb={2}>Reputação</Text>
          <Progress value={100} size="lg" colorScheme={getColorScheme(rating)} borderRadius="lg" />
        </Box>
      </Container>

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Carregar Imagem de Perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify="center" align="center" w="full">
              <ImageUploadInput onChange={handleImageUpload} />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onModalClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default AccountPage;
