import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    heading: {
      dark: '#47585B',
      light: '#F5F8FA',
    },
    body: {
      dark: '#47585B',
      light: '#F5F8FA',
    },
    info: {
      dark: '#999999',
      light: '#DADADA',
    },
    highlight: '#FFBA08',
  },
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Poppins", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'heading.light',
        color: 'heading.dark',
      },
    },
  },
});
