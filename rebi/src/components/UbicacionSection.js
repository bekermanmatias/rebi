import React from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  VStack, 
  Container,
  Icon,
  Flex,
  Button
} from '@chakra-ui/react';
import { MdLocationOn, MdMap } from 'react-icons/md';

const UbicacionSection = () => {
  return (
    <Box 
      id="ubicacion" 
      bg="gray.100" 
      py={30} 
      textAlign="center"
    >
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading 
            as="h2" 
            size="xl" 
            mb={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon 
              as={MdLocationOn} 
              mr={3} 
              color="red.500" 
              boxSize={8} 
            />
            Nuestra Ubicación
          </Heading>
          
          <Flex 
            direction="column" 
            align="center" 
            justify="center" 
            bg="white" 
            p={10} 
            borderRadius="xl" 
            boxShadow="md"
            maxW="1300px"
            w="full"
          >
            <Icon 
              as={MdMap} 
              boxSize={20} 
              color="gray.300" 
              mb={6}
            />
            
            <Text 
              fontSize="2xl" 
              fontWeight="bold" 
              color="gray.700" 
              mb={4}
            >
              Mapa Próximamente
            </Text>
            
            <Text 
              color="gray.500" 
              mb={6} 
              textAlign="center"
            >
              Estamos trabajando para mostrar nuestra ubicación exacta. 
              Próximamente podrás ver nuestro mapa interactivo.
            </Text>
            
            <Button 
              colorScheme="red" 
              variant="outline"
              leftIcon={<MdLocationOn />}
            >
              Contactar Ubicación
            </Button>
          </Flex>

          <VStack 
            spacing={4} 
            textAlign="center" 
            color="gray.700"
          >
            <Text fontWeight="bold">
              Dirección: Av. Ejemplo 123, Ciudad, País
            </Text>
            <Text>
              Teléfono: +51 999 888 777
            </Text>
            <Text>
              Email: contacto@tuempresa.com
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default UbicacionSection;