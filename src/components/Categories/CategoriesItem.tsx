import Image from 'next/image';
import {
  ListItem,
  ListIcon,
  Box,
  useBreakpointValue,
  Text,
} from '@chakra-ui/react';
import { BsCircleFill } from 'react-icons/bs';

interface CategoriesItemProps {
  title: string;
  icon: string;
}

export function CategoriesItem({ title, icon }: CategoriesItemProps) {
  const isIconVisible = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <ListItem
      key={title}
      display="flex"
      alignItems="center"
      flexBasis={['calc(50% - 1.75rem)', 'auto']}
      flexDir={['row', 'column']}
      mt={['7', '9']}
      ml={['7', '9']}
      _even={{
        justifyContent: 'flex-end',
      }}
    >
      {!isIconVisible && (
        <ListIcon as={BsCircleFill} color="highlight" fontSize="8px" />
      )}
      {isIconVisible && (
        <Box w="85px" h="85px">
          <Image src={icon} alt={title} width={170} height={170} />
        </Box>
      )}

      <Text
        fontSize={['lg', '2xl']}
        fontWeight={['medium', 'semibold']}
        mt={['0', '6']}
      >
        {title}
      </Text>
    </ListItem>
  );
}
