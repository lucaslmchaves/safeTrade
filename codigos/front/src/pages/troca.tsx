import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  useToast,
  HStack,
  Flex,
  Avatar,
  Link as ChakraLink
} from '@chakra-ui/react';
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';

const TrocasPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const socket = useRef<WebSocket | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:8081/app');

    socket.current.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.current.onmessage = (event) => {
      console.log('Message received:', event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socket.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (inputValue.trim() && username.trim()) {
      const message = `${username}: ${inputValue}`;
      console.log('Sending message:', message);
      socket.current?.send(message);
      setInputValue('');
    }
  };

  const handleEvaluationSubmit = () => {
    if (rating.trim() && comment.trim()) {
      console.log('Rating:', rating);
      console.log('Comment:', comment);
      toast({
        title: "Avaliação registrada com sucesso!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    } else {
      toast({
        title: "Erro na avaliação",
        description: "Por favor, preencha todas as opções de avaliação.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" minH="100vh">
      <Flex as="header" align="center" justify="space-between" p={4} bg="white" boxShadow="md" color="green.700">
        <Flex align="center">
          <img src="/images/LogoSafeTrade.jpg" alt="SafeTrade Logo" className="h-8" />
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
        <Box bg="green.400" p={4} borderRadius="md" maxW="600px" mx="auto" mt={10}>
          <Heading as="h1" size="lg" textAlign="center" mb={4} color="white">
            Chat de Troca
          </Heading>
          <VStack spacing={4}>
            <Box
              bg="white"
              w="100%"
              h="400px"
              p={4}
              borderRadius="md"
              overflowY="auto"
              border="1px solid"
              borderColor="gray.200"
            >
              {messages.map((msg, index) => (
                <Text key={index}>{msg}</Text>
              ))}
            </Box>
            <Input
              placeholder="Digite seu nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              bg="white"
              mb={2}
            />
            <Box display="flex" w="100%">
              <Input
                placeholder="Digite sua mensagem"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                bg="white"
                mr={2}
              />
              <Button
                onClick={sendMessage}
                bg="green.500"
                color="white"
                _hover={{ bg: 'green.600' }}
              >
                Enviar
              </Button>
            </Box>
            <Button
              onClick={onOpen}
              bg="green.600"
              color="white"
              _hover={{ bg: 'green.700' }}
              mt={4}
            >
              Avaliar Troca
            </Button>
          </VStack>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Avaliação da Troca</ModalHeader>
              <ModalBody>
                <VStack spacing={4}>
                  <RadioGroup onChange={setRating} value={rating}>
                    <Stack direction="row" spacing={5}>
                      <Radio value="Ótimo">
                        <HStack spacing={2}>
                          <FaSmile color="green" />
                          <Text>Ótimo</Text>
                        </HStack>
                      </Radio>
                      <Radio value="Regular">
                        <HStack spacing={2}>
                          <FaMeh color="yellow" />
                          <Text>Regular</Text>
                        </HStack>
                      </Radio>
                      <Radio value="Ruim">
                        <HStack spacing={2}>
                          <FaFrown color="red" />
                          <Text>Ruim</Text>
                        </HStack>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <Textarea
                    mt={4}
                    placeholder="Escreva seu comentário"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button bg="green.500" color="white" _hover={{ bg: 'green.600' }} mr={3} onClick={handleEvaluationSubmit}>
                  Concluir
                </Button>
                <Button variant="ghost" onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
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
};

export default TrocasPage;
