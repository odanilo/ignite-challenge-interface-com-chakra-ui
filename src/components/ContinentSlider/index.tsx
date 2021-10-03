import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Virtual } from 'swiper';
import { Flex, Text, Spinner } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Continent = {
  description: string;
  id: string;
  name: string;
  slug: string;
};

type Status = 'LOADING' | 'ERROR' | 'SUCCESS';

export function ContinentSlider() {
  const [continents, setContinents] = useState<Continent[] | null>(null);
  const [status, setStatus] = useState<Status>('LOADING');
  console.log(continents);

  useEffect(() => {
    try {
      fetch('http://localhost:3000/api/continents')
        .then(response => response.json())
        .then(data => {
          setContinents(data.continents);
          setStatus('SUCCESS');
        });
    } catch (error) {
      setStatus('ERROR');
    }
  }, []);

  if (status === 'LOADING') {
    return <Spinner />;
  }

  if (status === 'SUCCESS' && continents !== null) {
    return (
      <Flex as="section">
        <Swiper
          modules={[Navigation, Pagination, Virtual]}
          pagination={{ clickable: true }}
          navigation
        >
          {continents.map((continent, index) => (
            <SwiperSlide key={continent.id} virtualIndex={index}>
              {continent.name}
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    );
  }

  return <Text>Falha ao acessar continentes, por favor tente novamente</Text>;
}
