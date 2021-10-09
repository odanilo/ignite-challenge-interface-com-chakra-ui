import { Box, Tooltip } from '@chakra-ui/react';
import { BsInfoCircle } from 'react-icons/bs';

export function ContinentStatsTooltip() {
  return (
    <Tooltip
      hasArrow
      label={`Quantidade de cidades do continente que estão no ranking dos 100 destinos mais visitados em todo mundo.`}
      aria-label="O que é +100"
    >
      <Box
        as="span"
        color="info.dark"
        fontSize={['xs', 'xs', 'md']}
        ml="1"
        opacity="0.5"
      >
        <BsInfoCircle />
      </Box>
    </Tooltip>
  );
}
