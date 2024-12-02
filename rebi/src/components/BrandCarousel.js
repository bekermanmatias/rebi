import React from 'react';
import { Box, Flex, Image, keyframes, useBreakpointValue } from '@chakra-ui/react';

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const BrandCarousel = () => {
  const animationDuration = useBreakpointValue({ base: '15s', md: '20s' });

  return (
    <Box overflow="hidden" py={10}>
      <Flex 
        animation={`${scrollAnimation} ${animationDuration} linear infinite`}
        whiteSpace="nowrap"
      >
        <Image src="/chema.png" alt="Marca 1" boxSize={["100px", "120px", "150px"]} mx={4} />
        <Image src="/pacasmayo.png" alt="Marca 2" boxSize={["100px", "120px", "150px"]} mx={4} />
        <Image src="/rotoplas.png" alt="Marca 3" boxSize={["100px", "120px", "150px"]} mx={4} />
        <Image src="/sika.png" alt="Marca 4" boxSize={["100px", "120px", "150px"]} mx={4} />
        <Image src="/stanley.png" alt="Marca 5" boxSize={["100px", "120px", "150px"]} mx={4} />
        <Image src="/chema.png" alt="Marca 1" boxSize={["100px", "120px", "150px"]} mx={4} />
        <Image src="/pacasmayo.png" alt="Marca 2" boxSize={["100px", "120px", "150px"]} mx={4} />
        <Image src="/rotoplas.png" alt="Marca 3" boxSize={["100px", "120px", "150px"]} mx={4} />
        <Image src="/sika.png" alt="Marca 4" boxSize={["100px", "120px", "150px"]} mx={4} />
        <Image src="/stanley.png" alt="Marca 5" boxSize={["100px", "120px", "150px"]} mx={4} />
      </Flex>
    </Box>
  );
};

export default BrandCarousel;