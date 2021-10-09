import { Heading, Box, List, Grid } from '@chakra-ui/react';
import { City } from '../../services/mirage/cities';
import { ContinentCityCard } from './ContinentCityCard';

interface ContinentTopCitiesProps {
  cities: City[];
}

export function ContinentTopCities({ cities }: ContinentTopCitiesProps) {
  return (
    <Box
      as="main"
      px={['4', '4', '7']}
      maxW={1160}
      mx="auto"
      mt={['8', '8', '20']}
      mb={['4', '4', '9']}
      w="100%"
    >
      <Heading
        as="h2"
        fontSize={['2xl', '2xl', '4xl']}
        fontWeight="medium"
        lineHeight="1.5"
      >
        Cidades +100
      </Heading>
      <List mt="5">
        <Grid
          gap={['5', '5', '6']}
          templateColumns="repeat(auto-fit, 256px)"
          justifyContent={['center', 'center', 'space-between']}
        >
          {cities.map(({ country, name }) => (
            <ContinentCityCard key={name} country={country} name={name} />
          ))}
        </Grid>
      </List>
    </Box>
  );
}
