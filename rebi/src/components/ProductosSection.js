import React from 'react';
import { 
  Box, 
  Container, 
  SimpleGrid, 
  Flex, 
  Heading, 
  Text, 
  Image,
  VStack,
  useColorModeValue,
  Tooltip
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Flex);

const ProductCard = ({ title, image, description }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const gradientBg = useColorModeValue(
    'linear-gradient(135deg, white 0%, gray.50 100%)',
    'linear-gradient(135deg, gray.700 0%, gray.800 100%)'
  );

  return (
    <MotionBox
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        y: 50 
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 10,
          duration: 0.7
        }
      }}
      viewport={{ once: true, amount: 0.3 }}
      direction="column"
      align="center"
      bg={cardBg}
      backgroundImage={gradientBg}
      borderRadius="2xl"
      boxShadow="2xl"
      p={6}
      height="100%"
      position="relative"
      overflow="hidden"
      border="1px solid"
      borderColor={useColorModeValue('gray.100', 'gray.600')}
      transition="all 0.3s ease"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      cursor="pointer"
    >
      <Tooltip label={description} aria-label="Product description">
        <VStack spacing={4} zIndex={2} position="relative" w="full">
          <Image 
            src={image} 
            alt={title}
            w="full"
            h="250px"  // Altura fija para mantener consistencia
            objectFit="cover"
            borderRadius="xl"
            filter="saturate(1.2) contrast(1.1)"
            transition="transform 0.3s ease"
            _groupHover={{ transform: 'scale(1.05)' }}
          />
          
          <Heading 
            size="md" 
            color="red.700" 
            textAlign="center"
            mt={4}
          >
            {title}
          </Heading>
        </VStack>
      </Tooltip>
    </MotionBox>
  );
};

const ProductosSection = () => {
  const productos = [
    {
      title: "NICOLL",
      image: "/nicoll.jpg",
      description: "Sistemas de conexión y tubería de alta calidad"
    },
    {
      title: "Sistema de Riego Tecnificado",
      image: "/riego1.jpg",
      description: "Soluciones avanzadas para riego eficiente"
    },
    {
      title: "Geosistémicos",
      image: "/geo.jpg",
      description: "Soluciones para estabilización y control de suelos"
    },
    {
      title: "Pegamentos",
      image: "/pegamento.png",
      description: "Adhesivos profesionales para diversas aplicaciones"
    },
    {
      title: "Cementos",
      image: "/cemento.png",
      description: "Materiales de construcción de primera calidad"
    },
    {
      title: "Ferretería",
      image: "/ferreteria.png",
      description: "Herramientas y accesorios para todo tipo de proyectos"
    },
    {
      title: "Tubos PVC",
      image: "/tubopvc.png",
      description: "Tuberías resistentes y duraderas"
    },
    {
      title: "Biodigestores",
      image: "/biodigestor.png", 
      description: "Sistemas sostenibles de tratamiento de residuos"
    },
    {
      title: "Tanques",
      image: "/tanque.png",
      description: "Almacenamiento y distribución de líquidos"
    }
  ];

  return (
    <Box 
      bg={useColorModeValue('gray.50', 'gray.900')}
      py={20} 
      px={4}
      id="productos"
    >
      <Container maxW="container.xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }}
          viewport={{ once: true }}
        >
          <Heading 
            textAlign="center" 
            mb={12} 
            color="red.600"
            fontSize={['2xl', '3xl', '4xl']}
          >
            Nuestros Productos
          </Heading>
        </motion.div>
        
        <SimpleGrid 
          columns={[1, 2, 3]} 
          spacing={8}
        >
          {productos.map((producto, index) => (
            <ProductCard 
              key={index}
              title={producto.title}
              image={producto.image}
              description={producto.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProductosSection;