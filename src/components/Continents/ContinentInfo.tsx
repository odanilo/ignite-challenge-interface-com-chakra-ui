import { Flex } from '@chakra-ui/react';
import { Continent } from '../../pages/continentes/[slug]';
import { City } from '../../services/mirage/cities';
import { ContinentDescription } from './ContinentDescription';
import { ContinentStats } from './ContinentStats';

interface ContinentInfoProps {
  continent: Continent;
  cities: City[];
}

export function ContinentInfo({ continent, cities }: ContinentInfoProps) {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      px={['4', '4', '7']}
      maxW={1160}
      mx="auto"
      mt={['6', '6', '20']}
      justify={['flex-start', 'flex-start', 'space-between']}
    >
      <ContinentDescription description={continent.description} />
      <ContinentStats
        countriesAmount={continent.countries_amount}
        languagesAmount={continent.languages_amount}
        topCitiesAmount={cities.length}
      />
    </Flex>
  );
}
