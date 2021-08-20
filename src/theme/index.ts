/* eslint-disable import/prefer-default-export */
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    app: {
      color: '#FFF',
      bg: '#151515',
    },
    button: {
      color: '#FFF',
      bg: '#E53E3E',
      bgHover: '#F56565',
    },
    card: {
      color: '#000',
      bg: '#AAA',
      priceColor: '#1C4532',
      title: '#000',
    },
    header: {
      color: '#E53E3E',
      bg: '#202020',
    },
    form: {
      leftAddon: {
        bg: '#202020',
        color: '#AAA',
      },
    },
  },
});
