import { List, Stack } from '@chakra-ui/react';
import { ContinentStatsItem } from './ContinentStatsItem';

interface ContinentStatsProps {
  countriesAmount: number;
  languagesAmount: number;
  topCitiesAmount: number;
}

export function ContinentStats({
  countriesAmount,
  languagesAmount,
  topCitiesAmount,
}: ContinentStatsProps) {
  return (
    <List
      mt={['4', '4', '0']}
      w={['100%', '100%', '45%']}
      display="flex"
      alignItems="center"
    >
      <Stack
        spacing="10"
        direction="row"
        flex="1"
        justify={['flex-start', 'flex-start', 'space-between']}
      >
        <ContinentStatsItem amount={countriesAmount}>países</ContinentStatsItem>
        <ContinentStatsItem amount={languagesAmount}>
          línguas
        </ContinentStatsItem>
        <ContinentStatsItem amount={topCitiesAmount} hasTooltip={true}>
          cidades +100
        </ContinentStatsItem>
      </Stack>
    </List>
  );
}
