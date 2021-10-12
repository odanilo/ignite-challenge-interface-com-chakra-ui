import { Box, Flex, Spinner } from '@chakra-ui/react';

import { ContinentSliderHeader } from './ContinentSliderHeader';
import { ContinentSliderContent } from './ContinentSliderContent';
import { ContinentSliderError } from './ContinentSliderError';
import { useContinents } from '../../hooks/useContinents';

export function ContinentSlider() {
  const { continents, requestStatus } = useContinents();

  if (requestStatus === 'LOADING') {
    return (
      <Flex align="center" justify="center" minH="250px">
        <Spinner />
      </Flex>
    );
  }

  if (requestStatus === 'ERROR') {
    return <ContinentSliderError />;
  }

  return (
    <Box as="section" mt={['9', '20']}>
      <ContinentSliderHeader />

      <ContinentSliderContent continents={continents} />
    </Box>
  );
}
