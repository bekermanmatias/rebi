import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const { 
    isOpen: isMenuOpen, 
    onOpen: onMenuOpen, 
    onClose: onMenuClose 
  } = useDisclosure();
  const { 
    isOpen: isProductosOpen, 
    onToggle: onProductosToggle 
  } = useDisclosure();

  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const DesktopMenu = () => (
    <Flex align="center" justify="flex-end" flexGrow={1}>
      <ScrollLink to="nosotros">
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
      
      <Text 
        fontSize="lg"
        fontWeight="medium"
        color="white" 
        mx={4} 
        cursor="pointer" 
        _hover={{ color: 'red.100' }}
      >
        Ubicación
      </Text>

      <ScrollLink to="contacto">
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
    </Flex>
  );

  const MobileMenu = () => (
    <Drawer isOpen={isMenuOpen} placement="right" onClose={onMenuClose}>
      <DrawerOverlay />
      <DrawerContent bg="red.500" color="white">
        <DrawerCloseButton />
        <DrawerHeader>Menú</DrawerHeader>
        <DrawerBody>
          <VStack align="stretch" spacing={4}>
            <ScrollLink to="nosotros" onClick={onMenuClose}>
              <Text fontWeight="medium">Nosotros</Text>
            </ScrollLink>
            
            <Box>
              <Flex 
                justify="space-between" 
                align="center" 
                onClick={onProductosToggle}
                cursor="pointer"
              >
                <Text fontWeight="medium">Productos</Text>
                <ChevronDownIcon 
                  transform={isProductosOpen ? 'rotate(180deg)' : 'rotate(0)'}
                  transition="transform 0.3s"
                />
              </Flex>
              {isProductosOpen && (
                <VStack align="stretch" mt={2} pl={4} spacing={2}>
                  <Text>Construcción Residencial</Text>
                  <Text>Proyectos Comerciales</Text>
 <Text>Remodelaciones Integrales</Text>
                  <Text>Diseño de Interiores</Text>
                </VStack>
              )}
            </Box>
            
            <Text fontWeight="medium">Ubicación</Text>

            <ScrollLink to="contacto" onClick={onMenuClose}>
              <Text fontWeight="medium">Contacto</Text>
            </ScrollLink>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
      <Box 
        position="fixed" 
        top={0} 
        left={0} 
        right={0} 
        zIndex={1000} 
        bg={isVisible ? "rgba(220, 20, 60, 0.9)" : "transparent"}
        transition="background-color 0.5s ease"
        height="80px"
        display="flex"
        alignItems="center"
        px={6}
      >
        <Flex 
          align="center" 
          justify="space-between" 
          maxW="container.xl" 
          mx="auto"
          width="100%"
        >
          <ScrollLink to="inicio" style={{ cursor: 'pointer' }}>
            <img 
              src="/logo.svg" 
              alt="Logo" 
              style={{ 
                height: '70px', // Aumentado el tamaño del logo
                filter: 'brightness(0) invert(1)' 
              }} 
            />
          </ScrollLink>

          {isMobile ? (
            <IconButton 
              icon={<HamburgerIcon />} 
              variant="outline" 
              colorScheme="whiteAlpha" 
              onClick={onMenuOpen} 
              aria-label="Open Menu"
              ml="auto"
            />
          ) : (
            <DesktopMenu />
          )}
        </Flex>
      </Box>

      {isMobile && <MobileMenu />}
    </>
  );
};

export default Header;