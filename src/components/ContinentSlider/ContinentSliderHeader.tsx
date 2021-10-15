import { Box, Divider, Heading } from '@chakra-ui/react';
import { Wrapper } from '../Wrapper';

export function ContinentSliderHeader() {
  return (
    <Wrapper hasFlex={false} as="header">
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
    </Wrapper>
  );
}
