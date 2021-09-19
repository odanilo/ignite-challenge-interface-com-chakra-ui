import { Flex, Heading, Text } from '@chakra-ui/react';

export function HeroText() {
  return (
    <Flex
      flexDir="column"
      flexBasis={['100%', '100%', '100%', '48%']}
      py={['7', '20']}
      position="relative"
    >
      <Heading
        as="h1"
        color="heading.light"
        fontSize={['xl', '4xl']}
        fontWeight="medium"
        lineHeight="1.5"
      >
        5 Continentes,&nbsp;
        <Text as="span" display={['inline', 'block']}>
          infinitas possibilidades
        </Text>
      </Heading>
      <Text color="info.light" lineHeight="1.5" mt="2" fontSize={['md', 'xl']}>
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Flex>
  );
}
