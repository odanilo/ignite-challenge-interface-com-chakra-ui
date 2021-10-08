import Image from 'next/image';
import {
  Heading,
  Flex,
  Spinner,
  Box,
  Alert,
  AlertIcon,
  AlertDescription,
  List,
  ListItem,
  Text,
  Tooltip,
  Stack,
  Avatar,
  Grid,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Header } from '../../components/Header';
import { City } from '../../services/mirage/cities';

type Continent = {
  countries_amount: number;
  description: string;
  id: string;
  languages_amount: number;
  name: string;
  slug: string;
};

interface responseData {
  continent: Continent;
  cities: City[];
}

interface ContinentProps {
  slug: string;
}

type Status = 'LOADING' | 'ERROR' | 'SUCCESS';

export default function Continent({ slug }: ContinentProps) {
  const [requestStatus, setRequestStatus] = useState<Status>('LOADING');
  const [continent, setContinent] = useState<Continent | null>(null);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    setRequestStatus('LOADING');
    try {
      fetch(`http://localhost:3000/api/cities?slug=${slug}`)
        .then(response => response.json())
        .then((data: responseData) => {
          setContinent(data.continent);
          setCities(data.cities);
          setRequestStatus('SUCCESS');
        });
    } catch {
      setRequestStatus('ERROR');
    }
  }, [slug]);

  if (requestStatus === 'LOADING') {
    return (
      <Flex align="center" justify="center" minH="250px">
        <Spinner />
      </Flex>
    );
  }

  if (requestStatus === 'ERROR' || !continent) {
    return (
      <>
        <Header />
        <Box maxW={1160} mx="auto" px={['4', '7']} width="100%">
          <Alert status="error" mt="5">
            <AlertIcon />
            <AlertDescription fontSize="sm" lineHeight="1.2">
              Falha ao acessar continentes! Por favor, tente novamente mais
              tarde.
            </AlertDescription>
          </Alert>
        </Box>
      </>
    );
  }

  return (
    <>
      <Header />
      <Box as="header" pos="relative">
        <Flex position="relative" minH={[150, 150, 500]} w="100%">
          <Box pos="absolute" w="100%" height="100%" left="0" top="0">
            <Image
              src={`/continents/page/${continent.slug}.jpg`}
              layout="fill"
              alt={`Cidades da ${continent.name}`}
              objectFit="cover"
            />
            <Flex
              bg="black"
              pos="absolute"
              w="100%"
              h="100%"
              opacity="0.5"
            ></Flex>
          </Box>
          <Flex
            pos="relative"
            align={['center', 'center', 'flex-end']}
            justify={['center', 'center', 'flex-start']}
            w="100%"
          >
            <Heading
              as="h1"
              color="white"
              w="100%"
              maxW={1160}
              mx="auto"
              px={['4', '4', '7']}
              py={['4', '4', '16']}
              fontSize={['3xl', '3xl', '5xl']}
              textAlign={['center', 'center', 'left']}
            >
              {continent.name}
            </Heading>
          </Flex>
        </Flex>

        <Flex
          direction={['column', 'column', 'row']}
          px={['4', '4', '7']}
          maxW={1160}
          mx="auto"
          mt={['6', '6', '20']}
          justify={['flex-start', 'flex-start', 'space-between']}
        >
          <Flex
            w={['100%', '100%', '48%']}
            color="heading.dark"
            fontSize={['md', 'md', '2xl']}
            textAlign="justify"
          >
            {continent.description}
          </Flex>

          <List
            mt={['4', '4', '0']}
            w={['100%', '100%', '45%']}
            display="flex"
            alignItems="center"
          >
            <Stack
              spacing="10"
              direction="row"
              flex="1"
              justify={['flex-start', 'flex-start', 'space-between']}
            >
              <ListItem textAlign={['left', 'left', 'center']}>
                <Text
                  color="highlight"
                  fontSize={['2xl', '2xl', '5xl']}
                  fontWeight="semibold"
                  lineHeight="1"
                >
                  {continent.countries_amount}
                </Text>
                <Text
                  color="heading.dark"
                  fontSize={['lg', 'lg', '2xl']}
                  fontWeight={['normal', 'normal', 'semibold']}
                >
                  países
                </Text>
              </ListItem>

              <ListItem textAlign={['left', 'left', 'center']}>
                <Text
                  color="highlight"
                  fontSize={['2xl', '2xl', '5xl']}
                  fontWeight="semibold"
                  lineHeight="1"
                >
                  {continent.languages_amount}
                </Text>
                <Text
                  color="heading.dark"
                  fontSize={['lg', 'lg', '2xl']}
                  fontWeight={['normal', 'normal', 'semibold']}
                >
                  línguas
                </Text>
              </ListItem>

              <ListItem textAlign={['left', 'left', 'center']}>
                <Text
                  color="highlight"
                  fontSize={['2xl', '2xl', '5xl']}
                  fontWeight="semibold"
                  lineHeight="1"
                >
                  {cities.length}
                </Text>
                <Flex color="heading.dark" fontSize={['lg', 'lg', '2xl']}>
                  <Text
                    display="flex"
                    fontWeight={['normal', 'normal', 'semibold']}
                    alignItems="center"
                  >
                    cidades +100
                    <Tooltip
                      hasArrow
                      label={`Quantidade de cidades da ${continent.name} que estão no ranking dos 100 destinos mais visitados em todo mundo.`}
                      aria-label="O que é +100"
                    >
                      <Box
                        as="span"
                        color="info.dark"
                        fontSize={['xs', 'xs', 'md']}
                        ml="1"
                        opacity="0.5"
                      >
                        <BsInfoCircle />
                      </Box>
                    </Tooltip>
                  </Text>
                </Flex>
              </ListItem>
            </Stack>
          </List>
        </Flex>
      </Box>

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
            {cities.map(city => (
              <ListItem key={city.name}>
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
                      src={`/cities/${city.name}.jpg`}
                      alt={`Photo of ${city.name}`}
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
                        {city.name}
                      </Heading>
                      <Text color="info.dark" mt="3">
                        {city.country}
                      </Text>
                    </Box>
                    <Avatar name={city.country} size="sm" ml="1"></Avatar>
                  </Flex>
                </Box>
              </ListItem>
            ))}
          </Grid>
        </List>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = String(params?.slug);

  return {
    props: {
      slug,
    },
  };
};
