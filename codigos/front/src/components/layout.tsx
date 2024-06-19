import { ReactNode, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from "react-router-dom";
import { ImageUploadInput } from './image-upload.component'

const Links = [
  {
    name: "Anúncios",
    link: '/anuncios'
  }, 
  {
    name: "Trocas",
    link: "/trocas"
  }
];

const NavLink = ({ children, link }: { children: ReactNode, link: string }) => (
  <RouterLink to={link}>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}>
      {children}
    </Link>
  </RouterLink>
);

type Props = {
  children: ReactNode;
}

export default function WithNavbar({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const [profileImage, setProfileImage] = useState<string>('');

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

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <RouterLink to="/">
              <Box>SafeTrade</Box>
            </RouterLink>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} link={link.link}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              onClick={onModalOpen}>
              <Avatar size={'sm'} src={profileImage} />
            </Button>
            <RouterLink to="/account">
              <Text ml={2} cursor="pointer">Minha Conta</Text>
            </RouterLink>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} link={link.link}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        {children}
      </Box>

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
    </>
  );
}
