import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
import { Header } from '../../components/Header';

export function ContinentError() {
  return (
    <>
      <Box as="header">
        <Header />
      </Box>
      <Box maxW={1160} mx="auto" px={['4', '7']} width="100%">
        <Alert status="error" mt="5">
          <AlertIcon />
          <AlertDescription fontSize="sm" lineHeight="1.2">
            Falha ao acessar continentes! Por favor, tente novamente mais tarde.
          </AlertDescription>
        </Alert>
      </Box>
    </>
  );
}
