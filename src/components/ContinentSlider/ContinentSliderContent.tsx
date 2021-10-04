import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Virtual } from 'swiper';
import { Box } from '@chakra-ui/react';

import { ContinentSliderItem } from './ContinentSliderItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './styles.module.css';

interface Continent {
  description: string;
  id: string;
  name: string;
  slug: string;
}

interface ContinentSliderContentProps {
  continents: Continent[];
}

export function ContinentSliderContent({
  continents,
}: ContinentSliderContentProps) {
  return (
    <Box
      className={styles.continentSlider}
      mt={['5', '14']}
      mx="auto"
      maxW={['100%', '1240px']}
    >
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Virtual]}
        pagination={{ clickable: true }}
        navigation
      >
        {continents.map((continent, index) => (
          <SwiperSlide key={continent.id} virtualIndex={index}>
            <ContinentSliderItem continent={continent} slideIndex={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
