import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Wrapper } from '../Wrapper';
import { HeaderNav } from './HeaderNav';
import { LogoNav } from './LogoNav';

export function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === '/';

  return (
    <Wrapper align="center" justify="center" py={['4', '7']}>
      {!isHomePage && <HeaderNav />}
      <LogoNav isHomePage={isHomePage} />
    </Wrapper>
  );
}
