import React from 'react';
import { 
  Box, 
  Container, 
  Image, 
  Text, 
  Heading, 
  Button,
  Flex,
  SimpleGrid,
  Icon,
  keyframes,
  useBreakpointValue
} from '@chakra-ui/react';
import { 
  FaHardHat, 
  FaBuilding, 
  FaPaintRoller 
} from 'react-icons/fa';
import Header from '../components/Header';
import BrandCarousel from '../components/BrandCarousel';
import ProductosSection from '../components/ProductosSection';
import UbicacionSection from '../components/UbicacionSection';
import ContactoSection from '../components/ContactoSection';
import Footer from '../components/Footer';
import './LandingPage.css'; // Importa el archivo CSS

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const LandingPage = () => {
  const animationDuration = useBreakpointValue({ base: '15s', md: '20s' });

  return (
    <Box position="relative" width="100%" overflowX="hidden">
      <Header />
      
      {/* Sección Hero */}
      <Box 
        id="inicio"
        position="relative" 
        width="100%" 
        height="100vh"
        overflow="hidden"
      >
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          width="100%" 
          height="100%" 
          zIndex={-1}
        >
          <Image 
            src="/techo.jpg" 
            alt="Hero Image"
            objectFit="cover"
            width="100%"
            height="100%"
            filter="brightness(0.7)"
          />
          {/* Degradado oscuro translúcido */}
          <Box 
            position="absolute" 
            top={0} 
            left={0} width="100%" 
            height="100%" 
            background="linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)"
          />
          
          {/* Texto y botones */}
          <Box className="hero-text">
            <Heading as="h1" className="hero-heading">
              Todo lo Necesario para Construir con Calidad
            </Heading>
            <Text className="hero-description">
              Especializados en la distribución de las mejores marcas 
            </Text>
            <Flex justify="center" colorScheme="white" mt={4}>
              <Button className="hero-button" mr={4}>
                   Hablar con un Asesor
              </Button>
              <Button className="hero-button"  colorScheme="white">
              Ver Productos
              </Button>
            </Flex>
          </Box>
          {/* Ícono de flecha centrado en la parte inferior */}
          <Box
            position="absolute"
            bottom="5%"
            left="50%"
            transform="translateX(-50%)"
            zIndex={4}
          >
            <Image 
              src="/flecha3.svg" 
              alt="Scroll Down" 
              width={["40px", "50px", "60px"]}
              height={["40px", "50px", "60px"]}
              color="white"
              filter="invert(1)"
              cursor="pointer"
              animation={`${bounce} 2s infinite`}
              _hover={{
                transform: "translateY(10px)",
                transition: "transform 0.3s ease"
              }}
            />
          </Box>
        </Box>
      </Box>

      <BrandCarousel />

      <ProductosSection />

      <ContactoSection />
      
      <UbicacionSection />
    
      <Footer />
      
    </Box>
  );
};

export default LandingPage;