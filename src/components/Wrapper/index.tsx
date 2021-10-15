import { Flex, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FlexProps } from '@chakra-ui/react';

interface WrapperProps extends FlexProps {
  children: ReactNode;
  hasFlex?: boolean;
}

export function Wrapper({ children, hasFlex = true, ...rest }: WrapperProps) {
  const defaultProps = {
    px: ['4', '4', '7'],
    maxW: 1160,
    mx: 'auto',
    width: '100%',
  };

  if (hasFlex) {
    return (
      <Flex {...defaultProps} {...rest}>
        {children}
      </Flex>
    );
  }

  return (
    <Box {...defaultProps} {...rest}>
      {children}
    </Box>
  );
}
