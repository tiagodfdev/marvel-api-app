import React from 'react';
import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import CartProvider from '../context/Cart';

interface PageProps {
  children: React.ReactNode
}
const Layout = ({ children }:PageProps) => (
  <CartProvider>
    <Flex
      flexDirection="column"
      w="100%"
      align="center"
      justify="start"
      bg="app.bg"
      h="100%"
    >
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Flex>
  </CartProvider>
);
export default Layout;
