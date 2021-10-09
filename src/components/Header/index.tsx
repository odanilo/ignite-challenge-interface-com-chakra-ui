import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HeaderNav } from './HeaderNav';
import { LogoNav } from './LogoNav';

export function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === '/';

  return (
    <Flex p={['4', '7']} align="center" justify="center" maxW={1160} mx="auto">
      {!isHomePage && <HeaderNav />}
      <LogoNav isHomePage={isHomePage} />
    </Flex>
  );
}
