import Image from 'next/image';
import Link from 'next/link';
import { Flex, Link as ChakraLink } from '@chakra-ui/react';

export function HeaderNav() {
  return (
    <Flex as="nav" mr="auto">
      <Link href="/" passHref>
        <ChakraLink
          w="4"
          height="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            width={['4px', '8px']}
            height={['8px', '16px']}
            position="relative"
          >
            <Image src="/arrow-left.svg" alt="Voltar" layout="fill" />
          </Flex>
        </ChakraLink>
      </Link>
    </Flex>
  );
}
