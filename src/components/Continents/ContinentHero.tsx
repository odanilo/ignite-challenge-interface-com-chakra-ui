import Image from 'next/image';
import { Heading, Flex, Box } from '@chakra-ui/react';
import { Continent } from '../../pages/continentes/[slug]';

interface ContinentHeroProps {
  continent: Continent;
}

export function ContinentHero({ continent }: ContinentHeroProps) {
  return (
    <Flex position="relative" minH={[150, 150, 500]} w="100%">
      <Box pos="absolute" w="100%" height="100%" left="0" top="0">
        <Image
          src={`/continents/page/${continent.slug}.jpg`}
          layout="fill"
          alt={`Cidades da ${continent.name}`}
          objectFit="cover"
        />
        <Flex bg="black" pos="absolute" w="100%" h="100%" opacity="0.5"></Flex>
      </Box>
      <Flex
        pos="relative"
        align={['center', 'center', 'flex-end']}
        justify={['center', 'center', 'flex-start']}
        w="100%"
      >
        <Heading
          as="h1"
          color="white"
          w="100%"
          maxW={1160}
          mx="auto"
          px={['4', '4', '7']}
          py={['4', '4', '16']}
          fontSize={['3xl', '3xl', '5xl']}
          textAlign={['center', 'center', 'left']}
        >
          {continent.name}
        </Heading>
      </Flex>
    </Flex>
  );
}
