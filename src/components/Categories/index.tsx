import { Flex } from '@chakra-ui/react';
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
    <Flex
      as="section"
      maxW={1160}
      mx="auto"
      mt={['9', '24']}
      px={['4', '7']}
      justifyContent="center"
    >
      <CategoriesList categories={data} />
    </Flex>
  );
}
