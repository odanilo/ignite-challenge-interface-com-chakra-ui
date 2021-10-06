import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';

interface Continent {
  summary: string;
  id: string;
  name: string;
  slug: string;
}

interface ContinentSliderItemProps {
  continent: Continent;
  slideIndex: number;
}

export function ContinentSliderItem({
  continent,
  slideIndex,
}: ContinentSliderItemProps) {
  return (
    <Flex as="article" minH={['250px', '450px']} pos="relative">
      <Link href={`/continentes/${continent.slug}`} passHref>
        <ChakraLink
          flex="1"
          display="flex"
          align="center"
          justify="center"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Flex pos="absolute" w="100%" h="100%">
            <Image
              src={`/continents/slide/${continent.slug}.jpg`}
              alt={`Continente ${continent.name}`}
              layout="fill"
              objectFit="cover"
            />
            <Flex
              bg="black"
              pos="absolute"
              w="100%"
              h="100%"
              opacity="0.5"
            ></Flex>
          </Flex>
          <Flex
            align="center"
            pos="relative"
            color="white"
            flexDir="column"
            justify="center"
            width="100%"
            maxW={1160}
            mx="auto"
            px={['14', '17']}
          >
            <Heading
              as="h3"
              fontSize={['2xl', '5xl']}
              fontWeight="bold"
              lineHeight="1.5"
              color="headings.light"
            >
              {continent.name}
            </Heading>
            <Text color="info.light" fontSize={['md', '2xl']} fontWeight="bold">
              {continent.summary}
            </Text>
          </Flex>
        </ChakraLink>
      </Link>
    </Flex>
  );
}
