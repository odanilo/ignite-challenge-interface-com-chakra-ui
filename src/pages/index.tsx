import { Box } from '@chakra-ui/react';
import { Categories } from '../components/Categories';
import { ContinentSlider } from '../components/ContinentSlider';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Box as="main" mb={['6', '10']}>
        <Hero />
        <Categories />
        <ContinentSlider />
      </Box>
    </>
  );
}
