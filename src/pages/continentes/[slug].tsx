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
        <Flex
          position="relative"
          p={['4', '7']}
          maxW={1160}
          minH={150}
          mx="auto"
          w="100%"
        >
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
          <Flex pos="relative" align="center" justify="center" w="100%">
            <Heading as="h1" color="white">
              {continent.name}
            </Heading>
          </Flex>
        </Flex>

        <Flex px={['4', '7']} maxW={1160} mx="auto" w="100%">
          {continent.description}
        </Flex>

        <List px={['4', '7']} maxW={1160} mx="auto" w="100%">
          <ListItem>
            <Text>{continent.countries_amount}</Text>
            <Text>países</Text>
          </ListItem>

          <ListItem>
            <Text>{continent.languages_amount}</Text>
            <Text>línguas</Text>
          </ListItem>

          <ListItem>
            <Text>{cities.length}</Text>
            <Flex>
              <Text>cidades +100</Text>
              <Tooltip
                hasArrow
                label={`Quantidade de cidades da ${continent.name} que estão no ranking dos 100 destinos mais visitados em todo mundo.`}
                aria-label="O que é +100"
              >
                <Box as="span">
                  <BsInfoCircle />
                </Box>
              </Tooltip>
            </Flex>
          </ListItem>
        </List>
      </Box>

      <Box as="main" px={['4', '7']} maxW={1160} mx="auto" w="100%">
        <Heading as="h2">Cidades +100</Heading>
        <List>
          {cities.map(city => (
            <ListItem key={city.name}>
              <Text>{city.name}</Text>
              <Text>{city.country}</Text>
            </ListItem>
          ))}
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
