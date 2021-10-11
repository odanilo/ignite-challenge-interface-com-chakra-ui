import { Heading, Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ContinentCityInfoProps {
  name: string;
  country: {
    name: string;
    flag: string;
  };
}

export function ContinentCityInfo({ name, country }: ContinentCityInfoProps) {
  return (
    <Flex align="center" justify="space-between" p="6">
      <Box textAlign="left">
        <Heading as="h3" color="heading.dark" fontSize="lg" lineHeight="1.25">
          {name}
        </Heading>
        <Text color="info.dark" mt="3">
          {country.name}
        </Text>
      </Box>
      <Avatar src={country.flag} name={country.name} size="sm" ml="1"></Avatar>
    </Flex>
  );
}
