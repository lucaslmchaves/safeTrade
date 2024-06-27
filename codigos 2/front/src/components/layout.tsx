import { ReactNode, useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Importe a imagem do logo diretamente aqui
import LogoSafeTrade from '../components/images/LogoSafeTrade.jpg';

// Componente ImageUploadInput (presumindo que seja implementado corretamente)
const ImageUploadInput = ({ onChange }: { onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <input type="file" accept="image/*" onChange={onChange} />
);

const Links = [
  { name: "Início", link: '/' },
  { name: "Anunciar", link: '/anuncios' },
  { name: "Parceiros", link: '/comoFunciona' },
  { name: "Trocas", link: '/trocas' },
  { name: "Indicadores", link: '/indicadores' },
];

const NavLink = ({ children, link }: { children: ReactNode, link: string }) => (
  <RouterLink to={link}>
    <ChakraLink
      px={2}
      py={1}
      rounded={'md'}
      fontSize="sm"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}>
      {children}
    </ChakraLink>
  </RouterLink>
);

type Props = {
  children: ReactNode;
}

export default function WithNavbar({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const [profileImage, setProfileImage] = useState<string>('/placeholder.svg');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        onModalClose();
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const adjustFooterPosition = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const isPageBigger = window.innerHeight > document.body.scrollHeight;
        footer.style.position = isPageBigger ? 'fixed' : 'relative';
        footer.style.bottom = isPageBigger ? '0' : 'unset';
      }
    };

    adjustFooterPosition();
    window.addEventListener('resize', adjustFooterPosition);
    return () => window.removeEventListener('resize', adjustFooterPosition);
  }, []);

  return (
    <Flex direction="column" minH="100vh">
      {/* Navbar */}
      <Box bg={useColorModeValue('white', 'gray.900')} px={4} boxShadow="md">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Logo and Title */}
          <HStack spacing={2} alignItems={'center'}>
            <img src={LogoSafeTrade} alt="Logo SafeTrade" width="40px" height="40px" />
            <Text fontSize="lg" fontWeight="bold" color="green.500">SafeTrade</Text>
          </HStack>
          {/* Navigation Links */}
          <HStack
            as={'nav'}
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
            flex="1"
            justifyContent="center"
          >
            {Links.map((link) => (
              <NavLink key={link.name} link={link.link}>{link.name}</NavLink>
            ))}
          </HStack>
          {/* Profile and Account */}
          <Flex alignItems={'center'}>
            <Button
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              onClick={onModalOpen}
            >
              <Avatar size={'sm'} src={profileImage} />
            </Button>
            <RouterLink to="/account">
              <Button
                ml={4}
                variant="outline"
                colorScheme="green"
                size="sm"
              >
                Minha Conta
              </Button>
            </RouterLink>
          </Flex>
          {/* Hamburger Icon for Mobile */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {/* Mobile Navigation */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Flex direction="column" alignItems="center">
              {Links.map((link) => (
                <NavLink key={link.name} link={link.link}>{link.name}</NavLink>
              ))}
            </Flex>
          </Box>
        ) : null}
      </Box>

      {/* Main Content Area */}
      <Box flex="1" p={4}>
        {/* Container flexível para todo o conteúdo da página */}
        <Flex direction="column" flex="1">
          {children}
        </Flex>
      </Box>

      {/* Footer */}
      <Flex
        as="footer"
        justify="space-between"
        align="center"
        py={4}
        px={4}
        bg="white"
        boxShadow="md"
        color="green.700"
        width="100%"
        id="footer"
        position="relative"  // Garante que o footer esteja posicionado corretamente
      >
        <Text>© 2024 SafeTrade. Todos os direitos reservados.</Text>
        <Flex>
          <ChakraLink as={RouterLink} to="/terms" mx={2}>
            Termos de Serviço
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/privacy" mx={2}>
            Política de Privacidade
          </ChakraLink>
          <ChakraLink href="#" mx={2}>
            <FaTwitter size="24" />
          </ChakraLink>
          <ChakraLink href="#" mx={2}>
            <FaLinkedin size="24" />
          </ChakraLink>
          <ChakraLink href="#" mx={2}>
            <FaInstagram size="24" />
          </ChakraLink>
        </Flex>
      </Flex>

      {/* Profile Image Upload Modal */}
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
}
