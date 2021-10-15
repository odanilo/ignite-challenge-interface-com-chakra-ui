import { Alert, AlertIcon, AlertDescription, Box } from '@chakra-ui/react';
import { Wrapper } from '../Wrapper';

export function ContinentSliderError() {
  return (
    <Wrapper hasFlex={false}>
      <Alert status="error" mt="5">
        <AlertIcon />
        <AlertDescription fontSize="sm" lineHeight="1.2">
          Falha ao acessar continentes! Por favor, tente novamente mais tarde.
        </AlertDescription>
      </Alert>
    </Wrapper>
  );
}
