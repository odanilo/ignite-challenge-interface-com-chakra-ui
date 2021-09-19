import Image from 'next/image';
import Link from 'next/link';
import { Flex } from '@chakra-ui/react';

interface LogoNavProps {
  isHomePage: boolean;
}

export function LogoNav({ isHomePage }: LogoNavProps) {
  return (
    <Flex
      mr={!isHomePage ? 'auto' : '0'}
      ml={!isHomePage ? '-4' : '0'}
      width={['81px', '184px']}
      height={['20px', '45px']}
      position="relative"
    >
      {isHomePage ? (
        <Image src="/logo-world-trip.svg" alt="worldtrip logo" layout="fill" />
      ) : (
        <Link href="/">
          <a>
            <Image
              src="/logo-world-trip.svg"
              alt="worldtrip logo"
              layout="fill"
            />
          </a>
        </Link>
      )}
    </Flex>
  );
}
