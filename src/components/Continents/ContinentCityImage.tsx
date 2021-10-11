import Image from 'next/image';
import { Box } from '@chakra-ui/react';

interface ContinentCityImageProps {
  name: string;
  photo: string;
}

export function ContinentCityImage({ name, photo }: ContinentCityImageProps) {
  return (
    <Box as="figure" display="flex" background="info.light">
      <Image
        src={photo}
        alt={`Photo of ${name}`}
        width={512}
        height={346}
        objectFit="cover"
      />
    </Box>
  );
}
