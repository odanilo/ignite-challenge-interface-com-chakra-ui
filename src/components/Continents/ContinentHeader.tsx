import { Box } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { ContinentHero } from '../../components/Continents/ContinentHero';
import { ContinentInfo } from '../../components/Continents/ContinentInfo';
import { Continent } from '../../pages/continentes/[slug]';
import { City } from '../../services/mirage/cities';

interface ContinentHeaderProps {
  continent: Continent;
  cities: City[];
}

export function ContinentHeader({ cities, continent }: ContinentHeaderProps) {
  return (
    <Box as="header">
      <Header />
      <Box pos="relative">
        <ContinentHero continent={continent} />
        <ContinentInfo continent={continent} cities={cities} />
      </Box>
    </Box>
  );
}
