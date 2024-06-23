import React from 'react';
import { Box, Button, Container, Heading, Stack, Text, Link as ChakraLink, Flex } from '@chakra-ui/react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function InstagramIcon(props) {
  return <FaInstagram {...props} />;
}

function LinkedinIcon(props) {
  return <FaLinkedin {...props} />;
}

function TwitterIcon(props) {
  return <FaTwitter {...props} />;
}

export default function HeroSection() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleUserClick = () => {
    navigate('/user');
  };

  return (
    <Flex direction="column" minH="100vh">
      <Flex as="header" align="center" justify="space-between" p={4} bg="white" boxShadow="md" color="green.700">
        <Flex align="center">
          <img src="/images/LogoSafeTrade.jpg" alt="SafeTrade Logo" className="h-8" />
          <Text ml={2} fontSize="xl" fontWeight="bold">SafeTrade</Text>
        </Flex>
        <Flex as="nav" spacing={4}>
          <ChakraLink as={RouterLink} to="/" mx={2}>Início</ChakraLink>
          <ChakraLink as={RouterLink} to="/anuncios" mx={2}>Anunciar</ChakraLink>
          <ChakraLink as={RouterLink} to="/comoFunciona" mx={2}>Parceiros</ChakraLink>
          <ChakraLink as={RouterLink} to="/troca" mx={2}>Trocas</ChakraLink>
          <ChakraLink as={RouterLink} to="/indicadores" mx={2}>Indicadores</ChakraLink>
          <ChakraLink as={RouterLink} to="/sobre" mx={2}>Sobre</ChakraLink>
        </Flex>
        <Button colorScheme="green" variant="solid" onClick={handleUserClick}>
          <Flex align="center">
            <img src="/placeholder.svg" alt="User Avatar" className="h-8 w-8 rounded-full" />
            <Text ml={2}>John Doe</Text>
          </Flex>
        </Button>
      </Flex>

      <Flex as="main" flex="1" direction="column" align="center" justify="center" bg="white" color="green.700" textAlign="center" p={8}>
        <Heading as="h1" size="2xl" mb={4}>Proteja suas Negociações com SafeTrade</Heading>
        <Text fontSize="lg" mb={6}>
          SafeTrade é a principal plataforma para negociações seguras e confiáveis. Proteja seus ativos com nossos
          recursos avançados de segurança e tecnologia de ponta.
        </Text>
        <Button colorScheme="green" size="lg" onClick={handleLoginClick}>Começar</Button>
      </Flex>

      <Flex as="footer" justify="space-between" align="center" p={4} bg="white" boxShadow="md" color="green.700">
        <Text>© 2024 SafeTrade. Todos os direitos reservados.</Text>
        <Flex>
          <ChakraLink as={RouterLink} to="/terms" mx={2}>Termos de Serviço</ChakraLink>
          <ChakraLink as={RouterLink} to="/privacy" mx={2}>Política de Privacidade</ChakraLink>
          <ChakraLink href="#" mx={2}><TwitterIcon size="24" /></ChakraLink>
          <ChakraLink href="#" mx={2}><LinkedinIcon size="24" /></ChakraLink>
          <ChakraLink href="#" mx={2}><InstagramIcon size="24" /></ChakraLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
