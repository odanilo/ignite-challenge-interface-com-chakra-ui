import { Box } from '@chakra-ui/react';
import { ContinentCityImage } from './ContinentCityImage';
import { ContinentCityInfo } from './ContinentCityInfo';

interface ContinentCityCardProps {
  name: string;
  country: {
    name: string;
    flag: string;
  };
  photo: string;
}

export function ContinentCityCard({
  name,
  country,
  photo,
}: ContinentCityCardProps) {
  return (
    <Box
      key={name}
      as="article"
      background="white"
      borderRadius="base"
      border="1px"
      borderColor="borderHighlight"
      overflow="hidden"
    >
      <ContinentCityImage name={name} photo={photo} />
      <ContinentCityInfo country={country} name={name} />
    </Box>
  );
}
