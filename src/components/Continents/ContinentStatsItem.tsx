import { Flex, ListItem, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ContinentStatsTooltip } from './ContinentStatsTooltip';

interface ContinentStatsItemProps {
  amount: number;
  hasTooltip?: boolean;
  children: ReactNode;
}

export function ContinentStatsItem({
  amount,
  hasTooltip = false,
  children,
}: ContinentStatsItemProps) {
  return (
    <ListItem textAlign={['left', 'left', 'center']}>
      <Text
        color="highlight"
        fontSize={['2xl', '2xl', '5xl']}
        fontWeight="semibold"
        lineHeight="1"
      >
        {amount}
      </Text>
      <Flex color="heading.dark" fontSize={['lg', 'lg', '2xl']}>
        <Text
          display="flex"
          fontWeight={['normal', 'normal', 'semibold']}
          alignItems="center"
        >
          {children}
          {hasTooltip && <ContinentStatsTooltip />}
        </Text>
      </Flex>
    </ListItem>
  );
}
