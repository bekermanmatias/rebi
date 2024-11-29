// src/pages/LandingPage.js
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
            src="/builder.jpg" 
            alt="Hero Image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
          <Box 
            position="absolute" 
            top={0} 
            left={0} 
            width="100%" 
            height="100%" 
            bg="black" 
            opacity={0.5}
          />
        </Box>

        <VStack 
          spacing={6}
          justify="center" 
          align="center" 
          height="100%" 
          color="white" 
          textAlign="center"
          position="relative"
          zIndex={10}
          px={4}
        >
          <Heading 
            size="3xl" 
            fontWeight="bold" 
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
          >
            Transformando Espacios
          </Heading>
          <Text 
            fontSize="xl" 
            maxW="600px" 
            textShadow="1px 1px 2px rgba(0,0,0,0.5)"
          >
            Soluciones innovadoras en construcción y diseño que hacen realidad tus proyectos
          </Text>
          <Button 
            variant="outline"
            colorScheme="white"
            size="lg" 
            mt={4}
            borderWidth={2}
            color="white"
            _hover={{
              bg: "rgba(255, 255, 255, 0.2)",
              borderColor: "white"
            }}
          >
            Comenzar Proyecto
          </Button>
        </VStack>
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