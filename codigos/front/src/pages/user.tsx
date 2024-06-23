import React, { useState } from 'react';
import { Box, Button, Container, Heading, Stack, Text, Avatar, Progress, Flex, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { ImageUploadInput } from '../components/image-upload.component'; // Certifique-se de que o caminho está correto

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatar, setAvatar] = useState('/placeholder.svg'); // Default avatar

  const reputation = 75; // Example reputation score
  const user = {
    name: "John Doe",
    cpf: "123.456.789-00",
    email: "john.doe@safetrade.com"
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

  return (
    <Flex direction="column" minH="100vh">
      <Flex as="header" align="center" justify="space-between" p={4} bg="white" boxShadow="md" color="green.700">
        <Flex align="center">
          <img src="/placeholder.svg" alt="SafeTrade Logo" className="h-8" />
          <Text ml={2} fontSize="xl" fontWeight="bold">SafeTrade</Text>
        </Flex>
        <Flex as="nav" spacing={4}>
          <Link href="/" mx={2} fontWeight="bold">Home</Link>
          <Link href="/" mx={2} fontWeight="bold">Resources</Link>
          <Link href="/" mx={2} fontWeight="bold">Pricing</Link>
          <Link href="/" mx={2} fontWeight="bold">About</Link>
          <Link href="/" mx={2} fontWeight="bold">Contact</Link>
          <Link href="/" mx={2} fontWeight="bold">Exchange</Link>
        </Flex>
        <Button as="a" href="/user" colorScheme="green" variant="outline">
          <Flex align="center">
            <Avatar size="sm" name="John Doe" src={avatar} />
            <Text ml={2}>{user.name}</Text>
          </Flex>
        </Button>
      </Flex>

      <Container maxW="md" centerContent>
        <Box p={6} mt={8} borderWidth={1} borderRadius="lg" boxShadow="md" overflow="hidden">
          <Avatar
            size="2xl"
            name="John Doe"
            src={avatar}
            mb={4}
            cursor="pointer"
            onClick={() => setIsModalOpen(true)}
          />
          <Heading as="h1" size="lg" mb={2}>{user.name}</Heading>
          <Text fontSize="md" color="gray.600" mb={1}>CPF: {user.cpf}</Text>
          <Text fontSize="md" color="gray.600" mb={1}>Email: {user.email}</Text>
          <Text fontSize="md" color="gray.600" mb={4}>Password: ••••••••</Text>
          <Text fontSize="lg" mb={2}>Reputation</Text>
          <Progress value={reputation} size="lg" colorScheme="green" borderRadius="lg" />
        </Box>
      </Container>

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Carregar Imagem de Perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Flex justify="center" align="center" w="full">
              <ImageUploadInput onChange={handleImageUpload} />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onModalClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex as="footer" justify="space-between" align="center" p={4} bg="white" boxShadow="md" color="green.700" mt="auto">
        <Text>© 2024 SafeTrade. All rights reserved.</Text>
        <Flex>
          <Link href="#" mx={2} variant="link" fontWeight="bold">Terms of Service</Link>
          <Link href="#" mx={2} variant="link" fontWeight="bold">Privacy Policy</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserPage;
