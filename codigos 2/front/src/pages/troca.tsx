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
  HStack
} from '@chakra-ui/react';
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

const TrocasPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [rating, setRating] = useState<string>(''); 
  const [comment, setComment] = useState<string>(''); 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:8081/chat');

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

  const handleEvaluationSubmit = async () => {
    if (rating.trim() && comment.trim()) {
      try {
        const response = await fetch('http://localhost:8081/api/avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            rating,
            comment,
          }),
        });
  
        if (response.ok) {
          toast({
            title: "Avaliação registrada com sucesso!",
            status: "success",
            duration: 2000,
            isClosable: true,
            onCloseComplete: () => {
              toast({
                title: "Troca concluída com sucesso!",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
            }
          });
          onClose();
        } else {
          throw new Error('Erro ao registrar avaliação');
        }
      } catch (error) {
        toast({
          title: "Erro na avaliação",
          description: "Houve um problema ao registrar sua avaliação.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
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
    <Box bg="green.400" p={4} borderRadius="md" maxW="600px" mx="auto" mt={10}>
      <Heading as="h1" size="lg" textAlign="center" mb={4}>
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
  );
};

export default TrocasPage;
