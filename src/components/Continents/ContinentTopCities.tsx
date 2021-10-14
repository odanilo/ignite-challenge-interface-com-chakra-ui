import { Heading, Box, List, ListItem, Grid } from '@chakra-ui/react';
import { City } from '../../services/mirage/cities';
import { ContinentCityCard } from './ContinentCityCard';

interface ContinentTopCitiesProps {
  cities: City[];
}

export function ContinentTopCities({ cities }: ContinentTopCitiesProps) {
  const citiesDesktopBoxPerRow = 4;
  const citiesDesktopBoxAlign =
    cities.length < citiesDesktopBoxPerRow ? 'flex-start' : 'space-between';

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
          justifyContent={['center', 'center', citiesDesktopBoxAlign]}
        >
          {cities.map(({ country, name, photo }) => (
            <ListItem key={name}>
              <ContinentCityCard country={country} name={name} photo={photo} />
            </ListItem>
          ))}
        </Grid>
      </List>
    </Box>
  );
}
