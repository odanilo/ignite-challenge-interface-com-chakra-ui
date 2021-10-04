import { Box, Divider, Heading } from '@chakra-ui/react';

export function ContinentSliderHeader() {
  return (
    <Box as="header" maxW={1160} mx="auto" px={['4', '7']}>
      <Divider
        maxW={['60px', '90px']}
        mx="auto"
        borderColor="heading.dark"
        borderWidth={['0.5px', '1px']}
      />
      <Heading
        color="heading.dark"
        fontWeight="medium"
        fontSize={['xl', '4xl']}
        lineHeight="1.5"
        mt={['6', '14']}
        textAlign="center"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
    </Box>
  );
}
