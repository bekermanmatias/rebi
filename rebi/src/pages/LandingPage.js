import React from 'react';
import { 
  Box, 
  Container, 
  Image, 
  Text, 
  Heading, 
  VStack, 
  Button,
  Flex,
  SimpleGrid,
  Icon 
} from '@chakra-ui/react';
import { 
  FaHardHat, 
  FaBuilding, 
  FaPaintRoller 
} from 'react-icons/fa';
import Header from '../components/Header';
import UbicacionSection from '../components/UbicacionSection';
import ContactoSection from '../components/ContactoSection';

const LandingPage = () => {
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
            src="/fierros1.avif" 
            alt="Hero Image"
            objectFit="cover"
            width="100%"
            height="100%"
            filter="brightness(0.7)"  // Oscurecimiento adicional
          />
          {/* Degradado oscuro translúcido */}
          <Box 
            position="absolute" 
            top={0} 
            left={0} 
            width="100%" 
            height="100%" 
            background="linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)"
          />
{/* Círculo rojo translúcido con contratista */}
<Box
  position="absolute"
  top="50%"
  right="-10%"
  transform="translate(-50%, -50%)"
  width="500px"
  height="500px"
  borderRadius="50%"
  bg="rgba(220, 20, 60, 0.3)"
  filter="blur(100px)"
  zIndex={2}  // Aumentado el z-index
>
</Box>


        </Box>

      {/* Contenido Hero */}

{/* Imagen del contratista */}
<Box
  position="absolute"
  top={["70%", "70%", "35%"]}  // Más abajo en móvil, normal en desktop
  right={["-100px", "-50px"]}  // Ajuste para móvil y desktop
  transform={["translateY(0%)", "translateY(-11%)"]}  // Diferente transformación
  width="auto"
  height={["400px", "500px", "700px"]}  // Tamaño responsivo
  zIndex={3}
  overflow="visible"
  display={["block", "block", "block"]}  // Asegura visibilidad en todos los tamaños
>
  <Image 
    src="/hombres.png" 
    alt="Contratista"
    objectFit="contain"
    maxWidth={["300px", "800px", "1500px"]}  // Ancho responsivo
    width="auto"
    height="100%"
    filter="drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.3))"
  />
</Box>
      </Box>


      {/* Sección Servicios */}
      <Box 
        id="servicios" 
        bg="gray.50" 
        py={20} 
        px={4}
      >
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={12}>Nuestros Servicios</Heading>
          <SimpleGrid columns={[1, null, 3]} spacing={10}>
            <Flex 
              direction="column" 
              align="center" 
              textAlign="center" 
              p={6} 
              bg="white" 
              borderRadius="md" 
              boxShadow="md"
            >
              <Icon as={FaHardHat} w={12} h={12} color="red.500" mb={4} />
              <Heading size="md" mb={4}>Construcción</Heading>
              <Text>Servicios integrales de construcción profesional.</Text>
            </Flex>
            <Flex 
              direction="column" 
              align="center" 
              textAlign="center" 
              p={6} 
              bg="white" 
              borderRadius="md" 
              boxShadow="md"
            >
              <Icon as={FaBuilding} w={12} h={12} color="blue.500" mb={4} />
              <Heading size="md" mb={4}>Diseño</Heading>
              <Text>Diseños innovadores y personalizados.</Text>
            </Flex>
            <Flex 
              direction="column" 
              align="center" 
              textAlign="center" 
              p={6} 
              bg="white" 
              borderRadius="md" 
              boxShadow="md"
            >
              <Icon as={FaPaintRoller} w={12} h={12} color="green.500" mb={4} />
              <Heading size="md" mb={4}>Remodelación</Heading>
              <Text>Transformamos y renovamos tus espacios.</Text>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
      
      <ContactoSection />
      
      <UbicacionSection />
    

      {/* Footer */}
      <Box 
        id="contacto"
        bg="red.600" 
        color="white" 
        py={12}
      >
        <Container maxW="container.xl">
          <Flex 
            direction={['column', null, 'row']} 
            justify="space-between" 
            align="center"
          >
            <Box mb={[6, null, 0]}>
              <Heading size="md" mb={4}>Constructora Innovación</Heading>
              <Text>Transformando sueños en realidad</Text>
            </Box>
            <Flex>
              <Text mr={6}>Contacto: (555) 123-4567</Text>
              <Text>Email: info@constructorainnovacion.com</Text>
            </Flex>
          </Flex>
          <Text textAlign="center" mt={6} fontSize="sm">
            © 2024 Constructora Innovación. Todos los derechos reservados.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;