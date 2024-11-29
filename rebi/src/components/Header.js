import React, { useState, useEffect } from 'react';
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
  
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [logoSize, setLogoSize] = useState(500);
  const [logoPosition, setLogoPosition] = useState('absolute');

  // Determinar si es móvil
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500;
      
      const opacity = Math.min(scrollPosition / maxScroll, 1);
      setScrollOpacity(opacity);
  
      const initialSize = isMobile ? 250 : 500;  // Tamaño inicial más pequeño en móvil
      const finalSize = 40;
      const newSize = Math.max(finalSize, initialSize - (scrollPosition * (initialSize - finalSize) / maxScroll));
      setLogoSize(newSize);
  
      setLogoPosition(scrollPosition > 250 ? 'relative' : 'absolute');
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);  // Agrega isMobile como dependencia

  const scrollSettings = {
    smooth: true,
    duration: 500,
    offset: -80
  };
  // Componente de menú para escritorio
  const DesktopMenu = () => (
    <Flex align="center" justify="center" flexGrow={1}>
      <ScrollLink to="nosotros" {...scrollSettings}>
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
      
      <ScrollLink to="contacto" {...scrollSettings}>
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
      >
        Ubicación
      </Text>
    </Flex>
  );

  // Componente de menú móvil
  const MobileMenu = () => (
    <Drawer isOpen={isMenuOpen} placement="right" onClose={onMenuClose}>
      <DrawerOverlay />
      <DrawerContent bg="red.500" color="white">
        <DrawerCloseButton />
        <DrawerHeader>Menú</DrawerHeader>
        <DrawerBody>
          <VStack align="stretch" spacing={4}>
            <ScrollLink to="nosotros" {...scrollSettings} onClick={onMenuClose}>
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
            
            <ScrollLink to="contacto" {...scrollSettings} onClick={onMenuClose}>
              <Text fontWeight="medium">Contacto</Text>
            </ScrollLink>
            
            <Text fontWeight="medium">Ubicación</Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
 {/* Logo grande inicial */}
{logoPosition === 'absolute' && (
  <Box
    position="absolute"
    top="150px"
    left={["5%", "10%"]}
    zIndex={1001}
    transition="all 0.5s ease"
    width={[`${logoSize * 0.5}px`, `${logoSize * 0.7}px`, `${logoSize}px`]}  // Tamaño responsivo
    height={[`${logoSize * 0.5}px`, `${logoSize * 0.7}px`, `${logoSize}px`]}  // Tamaño responsivo
  >
    <ScrollLink to="inicio" {...scrollSettings} style={{ cursor: 'pointer' }}>
      <img 
        src="/logo.svg" 
        alt="Logo" 
        style={{ 
          width: '100%', 
          height: '100%',
          filter: 'brightness(0) invert(1)',
          objectFit: 'contain' 
        }} 
      />
    </ScrollLink>
  </Box>
)}

      {/* Header */}
      <Box 
        position="fixed" 
        top={0} 
        left={0} 
        right={0} 
        zIndex={1000} 
        bg={`rgba(220, 20, 60, ${scrollOpacity * 0.7})`}
        backdropFilter={`blur(${scrollOpacity * 10}px)`}
        transition="all 0.5s ease"
        height="80px"  // Altura fija
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
          {/* Logo en header */}
          {logoPosition === 'relative' && (
            <ScrollLink to="inicio" {...scrollSettings} style={{ cursor: 'pointer' }}>
              <img 
                src="/logo.svg" 
                alt="Logo" 
                style={{ 
                  height: '50px', 
                  filter: 'brightness(0) invert(1)' 
                }} 
              />
            </ScrollLink>
          )}

          {/* Menú móvil o desktop */}
          {isMobile ? (
            <IconButton 
              icon={<HamburgerIcon />} 
              variant="outline" 
              colorScheme="whiteAlpha" 
              onClick={onMenuOpen} 
              aria-label="Open Menu"
              ml="auto"  // Alinea el botón a la derecha
            />
          ) : (
            <DesktopMenu />
          )}
        </Flex>
      </Box>

      {/* Menú móvil */}
      {isMobile && <MobileMenu />}
    </>
  );
};

export default Header;