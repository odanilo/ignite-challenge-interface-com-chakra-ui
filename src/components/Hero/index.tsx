import Image from 'next/image';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import { HeroText } from './HeroText';
import { HeroIllustration } from './HeroIllustration';
import { Wrapper } from '../Wrapper';

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
      <Wrapper justifyContent="space-between">
        <HeroText />
        <HeroIllustration isVisible={shouldShowAirplane} />
      </Wrapper>
    </Flex>
  );
}
