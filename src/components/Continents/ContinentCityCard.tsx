import Image from 'next/image';
import { Heading, Flex, Box, ListItem, Text, Avatar } from '@chakra-ui/react';

interface ContinentCityCardProps {
  name: string;
  country: string;
}

export function ContinentCityCard({ name, country }: ContinentCityCardProps) {
  return (
    <ListItem key={name}>
      <Box
        as="article"
        background="white"
        borderRadius="base"
        border="1px"
        borderColor="borderHighlight"
        overflow="hidden"
      >
        <Box as="figure" display="flex" background="info.light">
          <Image
            src={`/cities/${name}.jpg`}
            alt={`Photo of ${name}`}
            width={512}
            height={346}
            objectFit="cover"
          />
        </Box>
        <Flex align="center" justify="space-between" p="6">
          <Box textAlign="left">
            <Heading
              as="h3"
              color="heading.dark"
              fontSize="lg"
              lineHeight="1.25"
            >
              {name}
            </Heading>
            <Text color="info.dark" mt="3">
              {country}
            </Text>
          </Box>
          <Avatar name={country} size="sm" ml="1"></Avatar>
        </Flex>
      </Box>
    </ListItem>
  );
}