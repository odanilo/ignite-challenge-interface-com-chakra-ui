import { Flex } from '@chakra-ui/react';
import { Continent } from '../../pages/continentes/[slug]';
import { City } from '../../services/mirage/cities';
import { Wrapper } from '../Wrapper';
import { ContinentDescription } from './ContinentDescription';
import { ContinentStats } from './ContinentStats';

interface ContinentInfoProps {
  continent: Continent;
  cities: City[];
}

export function ContinentInfo({ continent, cities }: ContinentInfoProps) {
  return (
    <Wrapper
      direction={['column', 'column', 'row']}
      justify={['flex-start', 'flex-start', 'space-between']}
      mt={['6', '6', '20']}
    >
      <ContinentDescription description={continent.description} />
      <ContinentStats
        countriesAmount={continent.countries_amount}
        languagesAmount={continent.languages_amount}
        topCitiesAmount={cities.length}
      />
    </Wrapper>
  );
}
