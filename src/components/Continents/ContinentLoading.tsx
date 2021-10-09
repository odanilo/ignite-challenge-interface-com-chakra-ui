import { Box, Flex, Spinner } from '@chakra-ui/react';
import { Header } from '../Header';

export function ContinentLoading() {
  return (
    <>
      <Box as="header">
        <Header />
      </Box>
      <Flex align="center" justify="center" minH="250px">
        <Spinner />
      </Flex>
    </>
  );
}
