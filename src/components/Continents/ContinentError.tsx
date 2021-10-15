import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { Wrapper } from '../Wrapper';

export function ContinentError() {
  return (
    <>
      <Box as="header">
        <Header />
      </Box>
      <Wrapper>
        <Alert status="error" mt="5">
          <AlertIcon />
          <AlertDescription fontSize="sm" lineHeight="1.2">
            Falha ao acessar continentes! Por favor, tente novamente mais tarde.
          </AlertDescription>
        </Alert>
      </Wrapper>
    </>
  );
}
