import Image from 'next/image';
import { Flex } from '@chakra-ui/react';

interface HeroIllustrationProps {
  isVisible: boolean | undefined;
}

export function HeroIllustration({ isVisible }: HeroIllustrationProps) {
  return (
    <>
      {isVisible && (
        <Flex flexBasis="40%" mb="-3%" alignSelf="flex-end">
          <Image
            src="/airplane.svg"
            width="834px"
            height="541.48px"
            alt="Avião"
          />
        </Flex>
      )}
    </>
  );
}
