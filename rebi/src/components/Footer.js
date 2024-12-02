// components/Footer.js
import React from 'react';
import { 
  Box, 
  Container, 
  Flex, 
  Heading, 
  Text 
} from '@chakra-ui/react';

const Footer = () => {
  return (
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
  );
};

export default Footer;