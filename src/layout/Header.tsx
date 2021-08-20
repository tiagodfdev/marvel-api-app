import React from 'react';
import {
  Flex, Heading, Image, Icon, Text,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/MarvelComics.png';
import { useCart } from '../context/Cart';

const Header = () => {
  const { cart } = useCart();
  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      w="100%"
      align="center"
      justify="space-between"
      padding="0.4rem 0"
      bg="header.bg"
      color="header.color"
      direction="row"
      zIndex="2"
      paddingX="2rem"
    >
      <Flex>
        <Link to="/">
          <Heading>
            <Image bg="transparent" boxSize="60px" src={mainLogo} alt="Marvel Logo" />
          </Heading>
        </Link>
      </Flex>
      <Flex
        position="relative"
        align="center"
        justify="center"
        boxSize={10}
      >
        <Link to="/details">
          <Flex
            position="absolute"
            top={1}
            left={4}
            boxSize={3.5}
            bg="#FFF"
            borderRadius="full"
            borderWidth={1}
            borderColor="header.bg"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="xx-small">{cart.length}</Text>
          </Flex>
          <Icon as={FaShoppingCart} boxSize={5} />
        </Link>
      </Flex>
    </Flex>
  );
};
export default Header;
