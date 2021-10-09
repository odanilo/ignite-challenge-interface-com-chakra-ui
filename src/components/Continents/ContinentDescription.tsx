import { Flex } from '@chakra-ui/react';

interface ContinentDescription {
  description: string;
}

export function ContinentDescription({ description }: ContinentDescription) {
  return (
    <Flex
      w={['100%', '100%', '48%']}
      color="heading.dark"
      fontSize={['md', 'md', '2xl']}
      textAlign="justify"
    >
      {description}
    </Flex>
  );
}
