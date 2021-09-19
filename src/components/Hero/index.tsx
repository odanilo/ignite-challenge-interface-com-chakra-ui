import Image from 'next/image';
import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { HeroText } from './HeroText';
import { HeroIllustration } from './HeroIllustration';

export function Hero() {
  const shouldShowAirplane = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as="section" position="relative" bg="body.dark">
      <Box pointerEvents="none">
        <Image src="/background-hero.jpg" layout="fill" alt="background" />
      </Box>
      <Flex
        maxW={1160}
        mx="auto"
        px={['4', '7']}
        width="100%"
        justifyContent="space-between"
      >
        <HeroText />
        <HeroIllustration isVisible={shouldShowAirplane} />
      </Flex>
    </Flex>
  );
}
