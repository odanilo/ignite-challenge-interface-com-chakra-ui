import { Flex } from '@chakra-ui/react';
import { Wrapper } from '../Wrapper';
import { CategoriesList } from './CategoriesList';

const data = [
  {
    title: 'vida noturna',
    icon: '/icon-vida-noturna.svg',
  },
  {
    title: 'praia',
    icon: '/icon-praia.svg',
  },
  {
    title: 'moderno',
    icon: '/icon-moderno.svg',
  },
  {
    title: 'clássico',
    icon: '/icon-classico.svg',
  },
  {
    title: 'e mais...',
    icon: '/icon-more.svg',
  },
];

export function Categories() {
  return (
    <Wrapper as="section" justifyContent="center" mt={['9', '24']}>
      <CategoriesList categories={data} />
    </Wrapper>
  );
}
