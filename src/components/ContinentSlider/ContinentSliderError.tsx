import { Alert, AlertIcon, AlertDescription, Box } from '@chakra-ui/react';

export function ContinentSliderError() {
  return (
    <Box maxW={1160} mx="auto" px={['4', '7']} width="100%">
      <Alert status="error" mt="5">
        <AlertIcon />
        <AlertDescription fontSize="sm" lineHeight="1.2">
          Falha ao acessar continentes! Por favor, tente novamente mais tarde.
        </AlertDescription>
      </Alert>
    </Box>
  );
}
