// src/components/Header.js
import React from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon  // Añade esta importación si no está
} from '@chakra-ui/react';
import { 
  ChevronDownIcon 
} from '@chakra-ui/icons';
import { MdLocationOn } from 'react-icons/md';  // Importa un ícono de ubicación de react-icons
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const scrollSettings = {
    smooth: true,
    duration: 500,
    offset: -80
  };

  return (
    <>
      <Box 
        position="fixed" 
        top={0} 
        left={0} 
        right={0} 
        zIndex={1000} 
        bg="rgba(220, 20, 60, 0.7)" 
        backdropFilter="blur(10px)"
        py={4}
        px={6}
      >
        <Flex align="center" justify="space-between" maxW="container.xl" mx="auto">
          {/* Logo */}
          <ScrollLink 
            to="inicio" 
            {...scrollSettings}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src="/logo.svg" 
              alt="Logo" 
              style={{ 
                height: '50px', 
                filter: 'brightness(0) invert(1)' 
              }} 
            />
          </ScrollLink>

          {/* Menú */}
          <Flex align="center" justify="center" flexGrow={1}>
            <ScrollLink 
              to="nosotros" 
              {...scrollSettings}
            >
              <Text 
                fontSize="lg"
                fontWeight="medium"
                color="white" 
                mx={4} 
                cursor="pointer" 
                _hover={{ color: 'red.100' }}
              >
                Nosotros
              </Text>
            </ScrollLink>
            
            <Menu>
              <MenuButton 
                as={Text}
                fontSize="lg"
                fontWeight="medium"
                color="white"
                mx={4}
                cursor="pointer"
                _hover={{ color: 'red.100' }}
                display="flex"
                alignItems="center"
              >
                Productos <ChevronDownIcon ml={2} />
              </MenuButton>
              <MenuList>
                <MenuItem>Construcción Residencial</MenuItem>
                <MenuItem>Proyectos Comerciales</MenuItem>
                <MenuItem>Remodelaciones Integrales</MenuItem>
                <MenuItem>Diseño de Interiores</MenuItem>
              </MenuList>
            </Menu>
            
            
            
            <ScrollLink 
              to="contacto" 
              {...scrollSettings}
            >
              <Text 
                fontSize="lg"
                fontWeight="medium"
                color="white" 
                mx={4} 
                cursor="pointer" 
                _hover={{ color: 'red.100' }}
              >
                Contacto
              </Text>
            </ScrollLink>
            <Text 
          fontSize="lg"
          fontWeight="medium"
          color="white" 
          mx={4} 
          cursor="pointer" 
          _hover={{ color: 'red.100' }}
          onClick={onOpen}
          display="flex"
          alignItems="center"
        >
           Ubicación
        </Text>
          </Flex>
        </Flex>
      </Box>

      
    </>
  );
};

export default Header;