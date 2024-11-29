// src/components/ContactoSection.js
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  Button,
  Flex,
  Text,
  Icon,
  useToast
} from '@chakra-ui/react';
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn 
} from 'react-icons/md';

const ContactoSection = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!nombre || !email || !mensaje) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Lógica de envío de formulario
    console.log('Formulario enviado:', { nombre, email, mensaje });
    
    // Mostrar mensaje de éxito
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos, pronto responderemos",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Limpiar formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <Box 
      id="contacto" 
      bg="gray.100" 
      py={16}
    >
      <Container maxW="container.xl">
        <VStack spacing={10} align="stretch">
          <Heading 
            textAlign="center" 
            mb={8}
            color="gray.700"
          >
            Contáctanos
          </Heading>

          <Flex 
            direction={['column', 'row']} 
            justify="space-between"
          >
            {/* Información de Contacto */}
            <Box 
              flex={1} 
              mr={[0, 10]} 
              mb={[8, 0]}
            >
              <VStack 
                spacing={6} 
                align="start"
                bg="white" 
                p={8} 
                borderRadius="xl"
                boxShadow="md"
              >
                <Flex align="center">
                  <Icon 
                    as={MdEmail} 
                    color="red.500" 
                    mr={4} 
                    boxSize={6} 
                  />
                  <Text>info@constructorainnovacion.com</Text>
                </Flex>
                <Flex align="center">
                  <Icon 
                    as={MdPhone} 
                    color="red.500" 
                    mr={4} 
                    boxSize={6} 
                  />
                  <Text>+51 999 888 777</Text>
                </Flex>
                <Flex align="center">
                  <Icon 
                    as={MdLocationOn} 
                    color="red.500" 
                    mr={4} 
                    boxSize={6} 
                  />
                  <Text>Av. Construcción 123, Ciudad Innovación</Text>
                </Flex>
              </VStack>
            </Box>

            {/* Formulario de Contacto */}
            <Box 
              flex={1} 
              as="form" 
              onSubmit={handleSubmit}
            >
              <VStack 
                spacing={6} 
                bg="white" 
                p={8} 
                borderRadius="xl"
                boxShadow="md"
              >
                <FormControl>
                  <FormLabel>Nombre</FormLabel>
                  <Input 
                    type="text" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea 
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Escribe tu mensaje"
                    rows={4}
                  />
                </FormControl>

                <Button 
                  colorScheme="red" 
                  type="submit" 
                  width="full"
                >
                  Enviar Mensaje
                </Button>
              </VStack>
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactoSection;