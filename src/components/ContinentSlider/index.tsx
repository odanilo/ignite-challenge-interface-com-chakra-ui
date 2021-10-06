import { useEffect, useState } from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import { ContinentSliderHeader } from './ContinentSliderHeader';
import { ContinentSliderContent } from './ContinentSliderContent';
import { ContinentSliderError } from './ContinentSliderError';

type Continent = {
  summary: string;
  id: string;
  name: string;
  slug: string;
};

type Status = 'LOADING' | 'ERROR' | 'SUCCESS';

export function ContinentSlider() {
  const [continents, setContinents] = useState<Continent[] | null>(null);
  const [status, setStatus] = useState<Status>('LOADING');

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
    return (
      <Flex align="center" justify="center" minH="250px">
        <Spinner />
      </Flex>
    );
  }

  if (status === 'SUCCESS' && continents !== null) {
    return (
      <Box as="section" mt={['9', '20']}>
        <ContinentSliderHeader />

        <ContinentSliderContent continents={continents} />
      </Box>
    );
  }

  return <ContinentSliderError />;
}
